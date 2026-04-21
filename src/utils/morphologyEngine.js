import { prefixes, suffixes, roots, wordDictionary } from '../data/morphology-data';

export class MorphologyEngine {
  /**
   * 解析單字，將其拆解為字首、字根、字尾。
   * @param {string} word 
   * @returns {Array} 拆解後的陣列，例如 [{text: "un", type: "prefix", mean: "..."}, ...]
   */
  static parseWord(word) {
    const lowercaseWord = word.toLowerCase().trim();
    const dictionaryEntry = wordDictionary[lowercaseWord];
    
    // 如果在字典中找到該單字，直接使用定義好的拆解結果
    if (dictionaryEntry) {
      return dictionaryEntry.breakdown.map(part => {
        // 判斷這個 part 是 prefix, suffix, root 還是其他
        let type = 'other';
        let mean = '';
        
        if (prefixes[part]) {
          type = 'prefix';
          mean = prefixes[part].mean;
        } else if (suffixes[part]) {
          type = 'suffix';
          mean = suffixes[part].mean;
        } else if (roots[part] || dictionaryEntry.root === part) {
          // If the part matches the main root
          type = 'root';
          const rootData = roots[part] || roots[dictionaryEntry.root];
          mean = rootData ? rootData.mean : '';
        } else {
          // Fallback check if it's another known root used as part
          if (roots[part]) {
            type = 'root';
            mean = roots[part].mean;
          }
        }
        
        return { text: part, type, mean };
      });
    }

    // 如果不在字典中，嘗試進行簡單的正向匹配 (這裡僅做簡單範例，真實情況可能需要更複雜的 NLP)
    return [{ text: word, type: 'unknown', mean: 'Word not in database.' }];
  }

  /**
   * 根據字根尋找所有同源詞
   * @param {string} rootText 
   * @returns {Array} 同源詞列表
   */
  static getWordFamily(rootText) {
    if (!rootText) return [];
    
    // 找出符合的字根資料
    let targetRootKey = null;
    if (roots[rootText]) {
      targetRootKey = rootText;
    } else {
      // 若傳入的是單字而非字根，試圖找它的字根
      const entry = wordDictionary[rootText.toLowerCase()];
      if (entry) {
        targetRootKey = entry.root;
      }
    }

    if (targetRootKey && roots[targetRootKey]) {
      return {
        root: targetRootKey,
        mean: roots[targetRootKey].mean,
        family: roots[targetRootKey].words
      };
    }
    
    return null;
  }
  
  /**
   * 模糊搜尋單字或字根
   */
  static search(query) {
    query = query.toLowerCase().trim();
    const results = [];
    
    // Search words
    Object.keys(wordDictionary).forEach(word => {
      if (word.includes(query)) {
        results.push({ type: 'word', text: word, data: wordDictionary[word] });
      }
    });
    
    return results;
  }
}
