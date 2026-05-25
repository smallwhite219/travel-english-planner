# 🌍 Travel English Planner (旅遊規劃與情境英文實戰)

這是一套為即將前往日本熊本參與 **ICLEA 2026** 學術研討會打造的「個人化旅程預演系統」。
本專案打破傳統靜態企劃書的限制，結合長時間閱讀友善的實色深色介面、真實行程節點、英日雙語情境句，以及整合瀏覽器 **Web Speech API** 的發音互動教練，協助使用者在行前預習旅途中每一階段的關鍵對話。

---

## ✨ 核心特色 (Core Features)

1. **動態情境導覽 (Dynamic Journey Timeline)**
   - 將「桃園機場前泊 ➔ TPE/KMJ 航班 ➔ 熊本機場接機 ➔ 市區飯店 ➔ ICLEA 2026 會場 ➔ 機場飯店 ➔ 回台航班」節點化。
   - 每個節點都有對應注意事項、英文句、日文句與重要單字。

2. **實戰英文教練 (Scenario English Practice)**
   - 內建各節點必備的固定腳本（包含航空報到、入境、接機、飯店 Check-in、會議報到、發表設備確認、回程報到等）。
   - **英日雙語練習**：每個情境提供英文句、日文句、中文意思與重要單字。
   - **TTS 發音引擎**：點擊播放鍵即可透過 Web Speech API 聆聽英文或日文發音。

3. **電子規劃書匯出 (One-Click PDF Export)**
   - 內建 `html2pdf.js`，一鍵自動隱藏播放按鈕與播放器介面，將最純粹的行程表與對白稿完美排版並匯出為高畫質 A4 PDF 檔案，方便實體旅行時離線參考。

4. **閱讀友善介面 (Readable Study UI)**
   - 使用不透明深色實體面板，避免透明玻璃與高眩光背景造成長時間閱讀疲勞。
   - 使用 **Framer Motion** 實作元件轉場與淡入淡出。

---

## 🛠️ 技術堆疊 (Tech Stack)

- **前端框架**: React 18 
- **建置工具**: Vite (快速且輕量)
- **視覺與動畫**: Vanilla CSS (實色深色介面)、Framer Motion
- **圖示庫**: Lucide React
- **核心工具**: Web Speech API (語音合成), html2pdf.js (PDF 轉出)

---

## 🚀 啟動指南 (Quick Start)

請確保您的電腦已安裝 [Node.js](https://nodejs.org/) (預設支援 npm)。

1. **進入專案目錄**
   ```bash
   cd d:\vibeCode\projects\travel-english-planner
   ```

2. **安裝依賴套件**
   ```bash
   npm install
   ```

3. **啟動開發伺服器 (HMR)**
   ```bash
   npm run dev
   ```

4. **瀏覽器檢視**
   - 點擊終端機提示的本機網址 (通常為 `http://localhost:5173`) 即可體驗。

---

## 📝 後續待優化項目 (To-Do / Roadmap)

- [ ] **Speech-to-Text (STT) 整合**：讓使用者不僅能聽，還能實際對著麥克風開口說，系統辨識後給出發音準確度評分。
- [ ] **Google Places API 真實景點串接**：讓地理位置與景點評分（如：新宿華盛頓飯店的真實街景）動態載入。
- [ ] **LLM 自由對話切換**：未來可考慮串接 OpenAI / Gemini API 讓原本的「固定腳本」升級為「不按牌理出牌的海關自由問答」。

---

*“Never solve the same problem twice.” - Antigravity Autonomous Protocol*
