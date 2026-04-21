/**
 * 基於 SuperMemo-2 演算法的 SRS 引擎
 */

export const SRS_GRADES = {
  AGAIN: 0, // 忘記，從頭開始
  HARD: 3,  // 想了很久才想起來
  GOOD: 4,  // 正常想起
  EASY: 5   // 覺得太簡單
};

/**
 * 處理單字卡的複習結果並計算下一次出現的間隔
 * @param {Object} currentProgress 目前該卡的進度狀態 { repetition, interval, efactor }
 * @param {number} grade 使用者的評分 (0, 3, 4, 5)
 * @returns {Object} 新的進度狀態
 */
export function calculateNextReview(currentProgress, grade) {
  let { repetition = 0, interval = 0, efactor = 2.5 } = currentProgress || {};

  if (grade >= 3) {
    // 答對 (Hard, Good, Easy)
    if (repetition === 0) {
      interval = 1;
    } else if (repetition === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * efactor);
    }
    repetition += 1;
  } else {
    // 答錯 (Again)
    repetition = 0;
    interval = 1;
  }

  // 計算新的 e-factor
  // 公式: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  efactor = efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  
  if (efactor < 1.3) {
    efactor = 1.3;
  }

  // 計算下次複習日期
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);
  
  // Normalize to start of day for easier comparison
  nextReviewDate.setHours(0, 0, 0, 0);

  return {
    repetition,
    interval,
    efactor,
    nextReviewDate: nextReviewDate.toISOString()
  };
}
