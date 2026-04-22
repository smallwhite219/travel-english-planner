export const fetchMorphologyFromLLM = async (word) => {
  // 改為直接讀取您的 GAS 網址 (與 SRS 使用相同的 GAS_URL)
  const GAS_URL = import.meta.env.VITE_GAS_URL || 'https://script.google.com/macros/s/AKfycbxa_sKeiaDV00IJm-gKruKaRmw7OsBWQo--d39N7Iz0U4wRnWwtazj9jHR_EbTRPQKp/exec'; 

  if (!GAS_URL) {
    console.warn("Missing VITE_GAS_URL in environment variables.");
    return null;
  }

  try {
    // 呼叫您的 Google Apps Script 後端中繼站
    const response = await fetch(GAS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain" // GAS 需要 text/plain 來避開 CORS 預檢
      },
      body: JSON.stringify({
        action: "generateWord", // 告訴 GAS 這是要觸發 LLM 拆解單字
        word: word
      })
    });

    if (!response.ok) {
        throw new Error(`API returned ${response.status}`);
    }

    const result = await response.json();
    
    if (result.status === 'success') {
      return result.data;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error("LLM Morphology Parse Error via GAS:", error);
    return null;
  }
};
