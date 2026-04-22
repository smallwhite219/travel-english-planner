export const prefixes = {
  "ad": { mean: "to, toward", type: "prefix" },
  "co": { mean: "with, together", type: "prefix" },
  "syn": { mean: "together, with", type: "prefix" },
  "en": { mean: "cause to be, put into", type: "prefix" },
  "un": { mean: "not, opposite of", type: "prefix" },
  "pre": { mean: "before, in advance", type: "prefix" },
  "re": { mean: "again, back", type: "prefix" },
  "in": { mean: "not, into", type: "prefix" },
  "im": { mean: "not, into", type: "prefix" },
  "dis": { mean: "apart, away, not", type: "prefix" },
  "con": { mean: "with, together", type: "prefix" },
  "com": { mean: "with, together", type: "prefix" },
  "auto": { mean: "self", type: "prefix" },
  "anti": { mean: "against, opposite", type: "prefix" },
  "sub": { mean: "under, below", type: "prefix" },
  "super": { mean: "above, beyond", type: "prefix" },
  "trans": { mean: "across, through", type: "prefix" },
  "inter": { mean: "between, among", type: "prefix" },
  "ex": { mean: "out, out of", type: "prefix" },
  "de": { mean: "down, away from", type: "prefix" },
  "pro": { mean: "forward, for", type: "prefix" },
  "micro": { mean: "small", type: "prefix" },
  "macro": { mean: "large", type: "prefix" },
  "multi": { mean: "many", type: "prefix" },
  "poly": { mean: "many", type: "prefix" },
  "tele": { mean: "distance", type: "prefix" },
  "net": { mean: "web, mesh", type: "prefix" },
  "over": { mean: "too much, above", type: "prefix" },
  "under": { mean: "too little, below", type: "prefix" },
  "mis": { mean: "wrong, bad", type: "prefix" },
  "non": { mean: "not", type: "prefix" },
  "bi": { mean: "two", type: "prefix" },
  "tri": { mean: "three", type: "prefix" }
};

export const suffixes = {
  "ation": { mean: "action or process", type: "suffix" },
  "ion": { mean: "action or process", type: "suffix" },
  "itive": { mean: "tending to, relating to", type: "suffix" },
  "ative": { mean: "tending to", type: "suffix" },
  "ory": { mean: "relating to", type: "suffix" },
  "tory": { mean: "relating to", type: "suffix" },
  "ual": { mean: "relating to", type: "suffix" },
  "ure": { mean: "act, process, or condition", type: "suffix" },
  "ed": { mean: "past tense or state", type: "suffix" },
  "ing": { mean: "action or process", type: "suffix" },
  "able": { mean: "capable of, fit for", type: "suffix" },
  "ible": { mean: "capable of, fit for", type: "suffix" },
  "tion": { mean: "action, process, state", type: "suffix" },
  "sion": { mean: "action, process, state", type: "suffix" },
  "ment": { mean: "action, result", type: "suffix" },
  "ly": { mean: "in a certain way", type: "suffix" },
  "er": { mean: "one who, that which", type: "suffix" },
  "or": { mean: "one who, that which", type: "suffix" },
  "ful": { mean: "full of", type: "suffix" },
  "less": { mean: "without", type: "suffix" },
  "ity": { mean: "state, quality", type: "suffix" },
  "al": { mean: "relating to", type: "suffix" },
  "ive": { mean: "tending to, performing", type: "suffix" },
  "ism": { mean: "belief, practice", type: "suffix" },
  "ist": { mean: "person who does something", type: "suffix" },
  "ize": { mean: "to make, to act", type: "suffix" },
  "ology": { mean: "study of", type: "suffix" },
  "ous": { mean: "full of", type: "suffix" },
  "ate": { mean: "to make, to act", type: "suffix" },
  "en": { mean: "made of, to make", type: "suffix" },
  "ify": { mean: "to make", type: "suffix" },
  "ic": { mean: "relating to", type: "suffix" },
  "ness": { mean: "state of being", type: "suffix" },
  "ship": { mean: "state, condition", type: "suffix" },
  "ance": { mean: "action, state", type: "suffix" },
  "ence": { mean: "action, state", type: "suffix" }
};

export const roots = {
  "cogn": {
    mean: "to know",
    words: [
      { word: "cognitive", breakdown: ["cogn", "itive"], meaning: "relating to cognition", translation: "認知的" },
      { word: "recognize", breakdown: ["re", "cogn", "ize"], meaning: "identify from having encountered them before", translation: "認出" }
    ]
  },
  "cept": {
    mean: "to take, seize",
    words: [
      { word: "concept", breakdown: ["con", "cept"], meaning: "an abstract idea", translation: "概念" },
      { word: "conceptual", breakdown: ["con", "cept", "ual"], meaning: "relating to or based on mental concepts", translation: "概念的" },
      { word: "misconception", breakdown: ["mis", "con", "cept", "ion"], meaning: "a view or opinion that is incorrect", translation: "迷思概念" }
    ]
  },
  "solid": {
    mean: "firm, whole",
    words: [
      { word: "consolidation", breakdown: ["con", "solid", "ation"], meaning: "the action or process of making something stronger or more solid", translation: "鞏固" },
      { word: "solidify", breakdown: ["solid", "ify"], meaning: "make or become hard or solid", translation: "凝固" }
    ]
  },
  "occur": {
    mean: "run, meet",
    words: [
      { word: "cooccurrence", breakdown: ["co", "occur", "ence"], meaning: "occurring together", translation: "共現" }
    ]
  },
  "direct": {
    mean: "straight",
    words: [
      { word: "multidirectional", breakdown: ["multi", "direct", "ion", "al"], meaning: "operating in several directions", translation: "多向的" }
    ]
  },
  "frag": {
    mean: "break",
    words: [
      { word: "fragmented", breakdown: ["frag", "ment", "ed"], meaning: "broken or separated into distinct parts", translation: "碎片的" }
    ]
  },
  "ced": {
    mean: "go, yield",
    words: [
      { word: "procedural", breakdown: ["pro", "ced", "ure", "al"], meaning: "relating to an established or official way of doing something", translation: "程序的" },
      { word: "procedure", breakdown: ["pro", "ced", "ure"], meaning: "an established or official way of doing something", translation: "程序" }
    ]
  },
  "plor": {
    mean: "cry out",
    words: [
      { word: "exploration", breakdown: ["ex", "plor", "ation"], meaning: "traveling in or through an unfamiliar area", translation: "探索" }
    ]
  },
  "thes": {
    mean: "place, put",
    words: [
      { word: "synthesis", breakdown: ["syn", "thes", "is"], meaning: "the combination of ideas to form a theory or system", translation: "綜合 / 合成" }
    ]
  },
  "gage": {
    mean: "pledge",
    words: [
      { word: "engagement", breakdown: ["en", "gage", "ment"], meaning: "the action of engaging or being engaged", translation: "參與" }
    ]
  },
  "reg": {
    mean: "rule, guide",
    words: [
      { word: "regulatory", breakdown: ["reg", "ula", "tory"], meaning: "serving or intended to regulate something", translation: "調節的 / 監管的" }
    ]
  },
  "iter": {
    mean: "again",
    words: [
      { word: "iterative", breakdown: ["iter", "ative"], meaning: "relating to or involving iteration", translation: "迭代的 / 反覆的" }
    ]
  },
  "it": {
    mean: "go",
    words: [
      { word: "transition", breakdown: ["trans", "it", "ion"], meaning: "process of changing from one state to another", translation: "過渡 / 轉換" }
    ]
  },
  "vari": {
    mean: "change",
    words: [
      { word: "covariate", breakdown: ["co", "vari", "ate"], meaning: "a continuous independent variable", translation: "共變數" }
    ]
  },
  "just": {
    mean: "law, right",
    words: [
      { word: "adjustment", breakdown: ["ad", "just", "ment"], meaning: "a small alteration or movement made to achieve a desired fit", translation: "調整" }
    ]
  },
  "test": {
    mean: "to examine or prove",
    words: [
      { word: "pretest", breakdown: ["pre", "test"], meaning: "a test given before a course of instruction", translation: "前測" }
    ]
  },
  "believe": { 
    mean: "to accept as true", 
    words: [
      { word: "believe", breakdown: ["believe"], meaning: "to accept as true", translation: "相信" },
      { word: "belief", breakdown: ["believe"], meaning: "trust, faith, or confidence", translation: "信念 / 信任" },
      { word: "believer", breakdown: ["believe", "er"], meaning: "one who believes", translation: "信徒 / 相信者" },
      { word: "unbelievable", breakdown: ["un", "believe", "able"], meaning: "not able to be believed", translation: "難以置信的" },
      { word: "disbelieve", breakdown: ["dis", "believe"], meaning: "to not believe", translation: "不相信 / 懷疑" }
    ] 
  },
  "dict": { 
    mean: "to say, speak", 
    words: [
      { word: "dictate", breakdown: ["dict", "ate"], meaning: "to speak or read something for someone to write", translation: "口述 / 獨裁" },
      { word: "dictionary", breakdown: ["dict", "ion", "ary"], meaning: "a book that lists words and their meanings", translation: "字典" },
      { word: "predict", breakdown: ["pre", "dict"], meaning: "to say what will happen before it occurs", translation: "預測" },
      { word: "predictable", breakdown: ["pre", "dict", "able"], meaning: "able to be foretold", translation: "可預測的" },
      { word: "contradict", breakdown: ["contra", "dict"], meaning: "to speak against; to say the opposite", translation: "反駁 / 矛盾" }
    ] 
  },
  "cred": {
    mean: "to believe",
    words: [
      { word: "credit", breakdown: ["cred", "it"], meaning: "belief that someone will do something", translation: "信用 / 讚譽" },
      { word: "incredible", breakdown: ["in", "cred", "ible"], meaning: "impossible to believe", translation: "極好的 / 難以置信的" },
      { word: "credible", breakdown: ["cred", "ible"], meaning: "able to be believed; convincing", translation: "可信的" },
      { word: "creditor", breakdown: ["cred", "it", "or"], meaning: "a person or company to whom money is owed", translation: "債權人" }
    ]
  },
  "vis": {
    mean: "to see",
    words: [
      { word: "vision", breakdown: ["vis", "ion"], meaning: "the faculty or state of being able to see", translation: "視力 / 願景" },
      { word: "visible", breakdown: ["vis", "ible"], meaning: "able to be seen", translation: "可見的" },
      { word: "invisible", breakdown: ["in", "vis", "ible"], meaning: "unable to be seen", translation: "隱形的" },
      { word: "revisit", breakdown: ["re", "vis", "it"], meaning: "to view or visit again", translation: "重遊 / 重新探討" },
      { word: "supervisor", breakdown: ["super", "vis", "or"], meaning: "one who oversees", translation: "主管 / 監督者" }
    ]
  },
  "vid": {
    mean: "to see",
    words: [
      { word: "video", breakdown: ["vid", "eo"], meaning: "recording, reproducing, or broadcasting of moving visual images", translation: "影片 / 錄影" },
      { word: "evidence", breakdown: ["e", "vid", "ence"], meaning: "body of facts indicating whether a belief is true", translation: "證據" },
      { word: "provide", breakdown: ["pro", "vid", "e"], meaning: "to make available for use; supply", translation: "提供" }
    ]
  },
  "graph": {
    mean: "to write, draw",
    words: [
      { word: "autograph", breakdown: ["auto", "graph"], meaning: "a signature, especially that of a celebrity", translation: "親筆簽名" },
      { word: "photograph", breakdown: ["photo", "graph"], meaning: "a picture made using a camera", translation: "相片" },
      { word: "biography", breakdown: ["bio", "graph", "y"], meaning: "an account of someone's life written by someone else", translation: "傳記" },
      { word: "graphics", breakdown: ["graph", "ics"], meaning: "visual images or designs on some surface", translation: "圖像 / 繪圖" },
      { word: "telegraph", breakdown: ["tele", "graph"], meaning: "a system for transmitting messages from a distance", translation: "電報" }
    ]
  },
  "port": {
    mean: "to carry",
    words: [
      { word: "transport", breakdown: ["trans", "port"], meaning: "to take or carry from one place to another", translation: "運輸" },
      { word: "export", breakdown: ["ex", "port"], meaning: "to send goods to another country", translation: "出口" },
      { word: "import", breakdown: ["im", "port"], meaning: "to bring goods into a country", translation: "進口" },
      { word: "portable", breakdown: ["port", "able"], meaning: "able to be easily carried", translation: "可攜帶的" },
      { word: "reporter", breakdown: ["re", "port", "er"], meaning: "a person who reports, especially for news", translation: "記者" }
    ]
  },
  "struct": {
    mean: "to build",
    words: [
      { word: "construct", breakdown: ["con", "struct"], meaning: "to build or erect", translation: "建造 / 構築" },
      { word: "destruction", breakdown: ["de", "struct", "ion"], meaning: "the action or process of causing damage", translation: "破壞 / 毀滅" },
      { word: "structure", breakdown: ["struct", "ure"], meaning: "the arrangement of and relations between parts", translation: "結構" },
      { word: "instructor", breakdown: ["in", "struct", "or"], meaning: "a person who teaches something", translation: "講師 / 教練" },
      { word: "infrastructure", breakdown: ["infra", "struct", "ure"], meaning: "basic physical and organizational structures", translation: "基礎設施" }
    ]
  },
  "tract": {
    mean: "to pull, drag",
    words: [
      { word: "attract", breakdown: ["at", "tract"], meaning: "to pull or draw someone towards them", translation: "吸引" },
      { word: "distract", breakdown: ["dis", "tract"], meaning: "to pull attention away from something", translation: "使分心" },
      { word: "contract", breakdown: ["con", "tract"], meaning: "a written or spoken agreement", translation: "合約 / 收縮" },
      { word: "tractor", breakdown: ["tract", "or"], meaning: "a powerful motor vehicle used for hauling", translation: "牽引機 / 拖拉機" },
      { word: "extract", breakdown: ["ex", "tract"], meaning: "to remove or take out by effort", translation: "提取 / 拔出" }
    ]
  },
  "spect": {
    mean: "to look",
    words: [
      { word: "inspect", breakdown: ["in", "spect"], meaning: "to look at closely", translation: "檢查" },
      { word: "spectator", breakdown: ["spect", "at", "or"], meaning: "a person who watches at a show or game", translation: "觀眾" },
      { word: "respect", breakdown: ["re", "spect"], meaning: "a feeling of deep admiration", translation: "尊敬" },
      { word: "prospect", breakdown: ["pro", "spect"], meaning: "the possibility of some future event occurring", translation: "前景 / 預期" },
      { word: "expect", breakdown: ["ex", "spect"], meaning: "regard as likely to happen", translation: "期待 / 預料" }
    ]
  },
  "form": {
    mean: "shape",
    words: [
      { word: "transform", breakdown: ["trans", "form"], meaning: "to make a thorough or dramatic change in form", translation: "改變 / 變形" },
      { word: "uniform", breakdown: ["uni", "form"], meaning: "remaining the same in all cases", translation: "制服 / 統一的" },
      { word: "reform", breakdown: ["re", "form"], meaning: "to make changes in order to improve it", translation: "改革" },
      { word: "information", breakdown: ["in", "form", "ation"], meaning: "facts provided or learned about something", translation: "資訊 / 情報" }
    ]
  },
  "work": {
    mean: "labor, task, operation",
    words: [
      { word: "network", breakdown: ["net", "work"], meaning: "a group or system of interconnected things", translation: "網路 / 人脈網" },
      { word: "worker", breakdown: ["work", "er"], meaning: "a person who does a specified type of work", translation: "工人 / 員工" },
      { word: "workout", breakdown: ["work", "out"], meaning: "a session of vigorous physical exercise", translation: "健身 / 運動" },
      { word: "overwork", breakdown: ["over", "work"], meaning: "to work too hard or too much", translation: "過度工作" },
      { word: "teamwork", breakdown: ["team", "work"], meaning: "the combined action of a group of people", translation: "團隊合作" }
    ]
  },
  "phon": {
    mean: "sound",
    words: [
      { word: "telephone", breakdown: ["tele", "phon", "e"], meaning: "a system for transmitting voices over a distance", translation: "電話" },
      { word: "microphone", breakdown: ["micro", "phon", "e"], meaning: "an instrument for converting sound waves", translation: "麥克風" },
      { word: "symphony", breakdown: ["sym", "phon", "y"], meaning: "an elaborate musical composition for full orchestra", translation: "交響樂" },
      { word: "phonetics", breakdown: ["phon", "et", "ics"], meaning: "the study and classification of speech sounds", translation: "語音學" }
    ]
  },
  "bio": {
    mean: "life",
    words: [
      { word: "biology", breakdown: ["bio", "logy"], meaning: "the study of living organisms", translation: "生物學" },
      { word: "biography", breakdown: ["bio", "graph", "y"], meaning: "an account of someone's life written by someone else", translation: "傳記" },
      { word: "antibiotic", breakdown: ["anti", "bio", "tic"], meaning: "a medicine that destroys microorganisms", translation: "抗生素" },
      { word: "biodiversity", breakdown: ["bio", "divers", "ity"], meaning: "the variety of plant and animal life", translation: "生物多樣性" }
    ]
  },
  "logy": {
    mean: "study of",
    words: [
      { word: "biology", breakdown: ["bio", "logy"], meaning: "the study of living organisms", translation: "生物學" },
      { word: "psychology", breakdown: ["psycho", "logy"], meaning: "scientific study of the human mind", translation: "心理學" },
      { word: "technology", breakdown: ["techno", "logy"], meaning: "application of scientific knowledge for practical purposes", translation: "科技 / 技術" },
      { word: "morphology", breakdown: ["morpho", "logy"], meaning: "the study of the forms of things", translation: "形態學" }
    ]
  }
};

// Flatten dictionary for quick word lookup and parsing
export const wordDictionary = Object.keys(roots).reduce((acc, rootKey) => {
  roots[rootKey].words.forEach(wordObj => {
    acc[wordObj.word] = {
      ...wordObj,
      root: rootKey
    };
  });
  return acc;
}, {});
