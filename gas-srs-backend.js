/**
 * Morphology SRS - Google Apps Script Backend
 * 
 * 使用方式：
 * 1. 在 Google Drive 建立一個新的 Google Apps Script 專案。
 * 2. 將此程式碼貼上覆蓋。
 * 3. 點擊上方的「執行 (Run)」按鈕並選擇 `setupDatabase` 函式，這會自動建立一個 Spreadsheet 並設定好標題。
 * 4. 點擊右上角的「部署 (Deploy)」 -> 「新增部署作業 (New deployment)」
 * 5. 類型選擇「網頁應用程式 (Web App)」。
 *    - 執行身分：我 (Me)
 *    - 誰可以存取：所有人 (Anyone)
 * 6. 部署後，將獲得的「網頁應用程式網址 (Web App URL)」複製下來，填入前端專案的 `.env` 中。
 */

// 建立或取得資料庫 (Spreadsheet)
function setupDatabase() {
  const SCRIPT_PROP = PropertiesService.getScriptProperties();
  let docId = SCRIPT_PROP.getProperty('SRS_DOC_ID');
  let doc;
  
  if (!docId) {
    // 建立新的 Spreadsheet
    doc = SpreadsheetApp.create('Morphology_SRS_Database');
    docId = doc.getId();
    SCRIPT_PROP.setProperty('SRS_DOC_ID', docId);
    
    // 初始化 Sheet 與標題
    const sheet = doc.getActiveSheet();
    sheet.setName('Progress');
    sheet.appendRow(['UserId', 'WordId', 'Repetition', 'Interval', 'EFactor', 'NextReviewDate', 'LastUpdated']);
    
    // 凍結第一行並設為粗體
    sheet.setFrozenRows(1);
    sheet.getRange("A1:G1").setFontWeight("bold");
    
    Logger.log("Database created successfully! Spreadsheet ID: " + docId);
    Logger.log("URL: " + doc.getUrl());
  } else {
    Logger.log("Database already exists. Spreadsheet ID: " + docId);
  }
}

// 處理 CORS 預檢請求
function doOptions(e) {
  return handleResponse({});
}

// 處理 GET 請求 (取得使用者的 SRS 進度)
function doGet(e) {
  try {
    const userId = e.parameter.userId || 'default_user';
    const docId = PropertiesService.getScriptProperties().getProperty('SRS_DOC_ID');
    
    if (!docId) throw new Error("Database not initialized. Run setupDatabase first.");
    
    const sheet = SpreadsheetApp.openById(docId).getSheetByName('Progress');
    const data = sheet.getDataRange().getValues();
    
    // 尋找符合 userId 的紀錄
    // headers: UserId(0), WordId(1), Repetition(2), Interval(3), EFactor(4), NextReviewDate(5), LastUpdated(6)
    const userProgress = {};
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === userId) {
        userProgress[data[i][1]] = {
          repetition: Number(data[i][2]),
          interval: Number(data[i][3]),
          efactor: Number(data[i][4]),
          nextReviewDate: data[i][5], // Date string or ISO string
          lastUpdated: data[i][6]
        };
      }
    }
    
    return handleResponse({ status: 'success', data: userProgress });
  } catch (error) {
    return handleResponse({ status: 'error', message: error.toString() });
  }
}

// 處理 POST 請求 (支援「更新 SRS 進度」與「LLM 單字拆解」兩種 Action)
function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    
    // ==========================================
    // Action 1: LLM 代理呼叫 (安全隱藏 API Key)
    // ==========================================
    if (postData.action === 'generateWord') {
      const word = postData.word;
      
      // 從專案設定的「指令碼屬性」取得 API Key
      const apiKey = PropertiesService.getScriptProperties().getProperty("OPENROUTER_API_KEY");
      if (!apiKey) throw new Error("OPENROUTER_API_KEY not found in Script Properties.");
      
      const prompt = `
You are an expert in English morphology. Break down the word "${word}" into its prefixes, root, and suffixes.
Return ONLY a valid JSON object in this exact format, with no markdown formatting:
{ "word": "${word}", "root": "root_part", "rootMeaning": "meaning of the root", "breakdown": ["prefix", "root", "suffix"], "meaning": "English definition", "translation": "繁體中文翻譯" }
If a prefix or suffix does not exist, omit it.
      `;
      
      const options = {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        payload: JSON.stringify({
          model: "qwen/qwen-2.5-72b-instruct:free",
          response_format: { type: "json_object" },
          messages: [{ role: "user", content: prompt }]
        }),
        muteHttpExceptions: true
      };
      
      const response = UrlFetchApp.fetch("https://openrouter.ai/api/v1/chat/completions", options);
      const data = JSON.parse(response.getContentText());
      
      if (data.error) throw new Error(data.error.message || "OpenRouter API Error");
      
      let resultText = data.choices[0].message.content;
      resultText = resultText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      return handleResponse({ status: 'success', data: JSON.parse(resultText) });
    }

    // ==========================================
    // Action 2: 原本的 SRS 進度更新邏輯
    // ==========================================
    const userId = postData.userId || 'default_user';
    const updates = postData.updates; // 預期為陣列 [{ wordId: '...', progress: { repetition, interval, efactor, nextReviewDate } }]
    
    if (!updates || !Array.isArray(updates)) {
      throw new Error("Invalid payload. 'updates' array is required for SRS update.");
    }
    
    const docId = PropertiesService.getScriptProperties().getProperty('SRS_DOC_ID');
    if (!docId) throw new Error("Database not initialized. Run setupDatabase first.");
    
    const sheet = SpreadsheetApp.openById(docId).getSheetByName('Progress');
    const data = sheet.getDataRange().getValues();
    
    // 建立查詢索引以加速更新
    const rowMap = {};
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] === userId) {
        rowMap[data[i][1]] = i + 1; // 記錄在 sheet 中的真實列號 (1-indexed)
      }
    }
    
    const timestamp = new Date().toISOString();
    
    // 執行更新或新增
    for (const update of updates) {
      const rowIdx = rowMap[update.wordId];
      const prog = update.progress;
      
      const rowData = [
        userId,
        update.wordId,
        prog.repetition,
        prog.interval,
        prog.efactor,
        prog.nextReviewDate,
        timestamp
      ];
      
      if (rowIdx) {
        // 更新現有資料
        sheet.getRange(rowIdx, 1, 1, 7).setValues([rowData]);
      } else {
        // 新增資料
        sheet.appendRow(rowData);
      }
    }
    
    return handleResponse({ status: 'success', message: `Updated ${updates.length} records.` });
  } catch (error) {
    return handleResponse({ status: 'error', message: error.toString() });
  }
}

// 統一回傳格式並加入 CORS 標頭
function handleResponse(responseObj) {
  const output = ContentService.createTextOutput(JSON.stringify(responseObj));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
