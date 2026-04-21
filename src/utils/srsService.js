/**
 * 處理與 GAS 後端以及 LocalStorage 的狀態同步
 */

// 預設的使用者 ID，若未來加上登入系統可替換
const USER_ID = 'user_traveler_001';

// 注意：請將部署後的 GAS Web App URL 填入這裡，或透過 .env 注入
// 如果沒有 GAS 網址，會自動 fallback 回 localStorage 模式
const GAS_URL = import.meta.env.VITE_GAS_URL || 'https://script.google.com/macros/s/AKfycbxa_sKeiaDV00IJm-gKruKaRmw7OsBWQo--d39N7Iz0U4wRnWwtazj9jHR_EbTRPQKp/exec'; 

export class SRSService {
  static getLocalProgress() {
    try {
      const data = localStorage.getItem('morphology_srs_progress');
      return data ? JSON.parse(data) : {};
    } catch (e) {
      console.error("Local storage error:", e);
      return {};
    }
  }

  static saveLocalProgress(progressObj) {
    try {
      localStorage.setItem('morphology_srs_progress', JSON.stringify(progressObj));
    } catch (e) {
      console.error("Local storage error:", e);
    }
  }

  /**
   * 初始化：從 GAS 同步雲端資料到本地 (如果 GAS URL 存在)
   */
  static async syncFromCloud() {
    if (!GAS_URL) return this.getLocalProgress();
    
    try {
      const response = await fetch(`${GAS_URL}?userId=${USER_ID}`);
      const result = await response.json();
      
      if (result.status === 'success' && result.data) {
        // 合併本地與雲端 (簡單策略：以雲端為主)
        this.saveLocalProgress(result.data);
        return result.data;
      }
    } catch (e) {
      console.error("Failed to sync from cloud, using local:", e);
    }
    
    return this.getLocalProgress();
  }

  /**
   * 批次更新進度到雲端
   */
  static async syncToCloud(updatesArray) {
    if (!GAS_URL) return; // 沒設定 URL 就純本地
    
    try {
      await fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify({
          userId: USER_ID,
          updates: updatesArray
        }),
        headers: { 'Content-Type': 'text/plain' } // GAS 常需要 text/plain 來避開 CORS 預檢複雜度
      });
    } catch (e) {
      console.error("Failed to push updates to cloud:", e);
    }
  }

  /**
   * 更新單個單字的進度
   */
  static async updateWordProgress(wordId, newProgress) {
    const currentAll = this.getLocalProgress();
    currentAll[wordId] = newProgress;
    this.saveLocalProgress(currentAll);
    
    // 背景同步至雲端
    this.syncToCloud([{ wordId, progress: newProgress }]);
  }
}
