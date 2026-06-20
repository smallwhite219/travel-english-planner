const talperDeckPdf = new URL(
  "../assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min.pdf",
  import.meta.url,
).href;

export const talperPresentationMeta = {
  "title": "Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning",
  "deckTitle": "TBICS2026_TALPer_SRL4L_v14_20260617",
  "totalDuration": "15 min 30 sec",
  "speaker": "zong-en bai",
  "sourceUrl": talperDeckPdf
};

export const talperPresentationSlides = [
  {
    "number": 1,
    "pdfPage": 1,
    "section": "Title 0:40",
    "title": "Title",
    "subtitle": "Rehearsal segment 0:40",
    "script": "Good afternoon, everyone. //\n\nMy name is Zong-En Bai, / from National Taichung University of Education / in Taiwan. //\n\nToday, / I will present / the effects of integrating / an AI learning companion / into the SRL 4L framework. //\n\nThe learning companion is called TALPer. //\n\nThe context of this study / is elementary mathematics learning. ///",
    "scriptZh": "大家午安。//\n\n我是白宗恩，/ 來自台灣國立臺中教育大學。//\n\n今天，/ 我要報告的是 / 將 AI 學習夥伴 / 整合進 SRL 4L 架構的效果。//\n\n這個 AI 學習夥伴 / 叫做 TALPer。//\n\n本研究的情境是 / 國小數學學習。///",
    "narrationScript": "Good afternoon, everyone.\n\nMy name is Zong-En Bai, from National Taichung University of Education in Taiwan.\n\nToday, I will present the effects of integrating an AI learning companion into the SRL 4L framework.\n\nThe learning companion is called TALPer.\n\nThe context of this study is elementary mathematics learning."
  },
  {
    "number": 2,
    "pdfPage": 2,
    "section": "Background 1:20",
    "title": "Background",
    "subtitle": "Rehearsal segment 1:20",
    "script": "Let me start / with the background. //\n\nAI learning companions / are becoming important / in education. //\n\nThey can support learners / through feedback, prompts, / and learning analytics. //\n\nGenerative AI can also work / as a digital scaffold / for self-regulated learning. //\n\nIt provides real-time feedback / and step-by-step guidance. //\n\nHowever, / this support may also create a tension. //\n\nAI may help students learn, / but too much reliance / may reduce regulatory awareness. //\n\nSo, / this study asks: / do students at different achievement levels / use TALPer differently? ///",
    "scriptZh": "讓我先從研究背景開始。//\n\nAI 學習夥伴 / 在教育中 / 越來越重要。//\n\n它們可以透過回饋、提示 / 與學習分析 / 支持學習者。//\n\n生成式 AI 也可以作為 / 支持自我調節學習的 / 數位鷹架。//\n\n它能提供即時回饋 / 與逐步引導。//\n\n然而，/ 這種支持也可能產生一種張力。//\n\nAI 可能幫助學生學習，/ 但過度依賴 / 可能削弱調節意識。//\n\n所以，/ 本研究要問的是：/ 不同成就水準的學生 / 是否會以不同方式使用 TALPer？///",
    "narrationScript": "Let me start with the background.\n\nAI learning companions are becoming important in education.\n\nThey can support learners through feedback, prompts, and learning analytics.\n\nGenerative AI can also work as a digital scaffold for self-regulated learning.\n\nIt provides real-time feedback and step-by-step guidance.\n\nHowever, this support may also create a tension.\n\nAI may help students learn, but too much reliance may reduce regulatory awareness.\n\nSo, this study asks: do students at different achievement levels use TALPer differently?"
  },
  {
    "number": 3,
    "pdfPage": 3,
    "section": "Scaffold–Dependence Tension 0:50",
    "title": "Scaffold–Dependence Tension",
    "subtitle": "Rehearsal segment 0:50",
    "script": "The same AI support / can work in two different ways. //\n\nIf students use it / for feedback, guidance, and reflection, / it becomes a scaffold. //\n\nIf students use it / mainly for answers or shortcuts, / it may lead to dependence. //\n\nSo, / our concern is not only / whether AI helps learning. //\n\nMore importantly, / we ask how different learners / use TALPer differently. ///",
    "scriptZh": "同樣的 AI 支持 / 可能以兩種不同方式發揮作用。//\n\n如果學生用它 / 來獲得回饋、引導與反思，/ 它會成為鷹架。//\n\n如果學生主要用它 / 來取得答案或捷徑，/ 它可能導致依賴。//\n\n所以，/ 我們關心的不只是 / AI 是否能幫助學習。//\n\n更重要的是，/ 我們要探討不同學習者 / 如何以不同方式使用 TALPer。///",
    "narrationScript": "The same AI support can work in two different ways.\n\nIf students use it for feedback, guidance, and reflection, it becomes a scaffold.\n\nIf students use it mainly for answers or shortcuts, it may lead to dependence.\n\nSo, our concern is not only whether AI helps learning.\n\nMore importantly, we ask how different learners use TALPer differently."
  },
  {
    "number": 4,
    "pdfPage": 4,
    "section": "SRL 4L and Zimmerman 1:00",
    "title": "SRL 4L and Zimmerman",
    "subtitle": "Rehearsal segment 1:00",
    "script": "Our study is based / on two frameworks. //\n\nThe first is / Zimmerman's SRL cycle. //\n\nIt has three phases. //\n\nForethought, / performance, / and self-reflection. //\n\nThe second is the SRL 4L framework, / proposed by Ho. //\n\nIt has four phases. //\n\nSelf-learning, / co-learning, / mutual learning, / and teacher-guided learning. //\n\nThese four phases / match Zimmerman's cycle well. //\n\nThis mapping guided / our coding scheme / and our E-N-A design. ///",
    "scriptZh": "本研究以兩個架構為基礎。//\n\n第一個是 Zimmerman 的自主學習循環。//\n\n它包含三個階段。//\n\n前思、表現，以及自我反思。//\n\n第二個是由 Ho 所提出的 SRL 4L 架構。//\n\n它包含四個階段。//\n\n自學、共學、互學，以及導學。//\n\n這四個階段與 Zimmerman 的循環對應良好。//\n\n這個對應引導了我們的編碼架構與 E-N-A 設計。///",
    "narrationScript": "Our study is based on two frameworks.\n\nThe first is Zimmerman's SRL cycle.\n\nIt has three phases.\n\nForethought, performance, and self-reflection.\n\nThe second is the SRL 4L framework, proposed by Ho.\n\nIt has four phases.\n\nSelf-learning, co-learning, mutual learning, and teacher-guided learning.\n\nThese four phases match Zimmerman's cycle well.\n\nThis mapping guided our coding scheme and our E-N-A design."
  },
  {
    "number": 5,
    "pdfPage": 5,
    "section": "TALP Platform 0:45",
    "title": "TALP Platform",
    "subtitle": "Rehearsal segment 0:45",
    "script": "Now let me introduce / our platform. //\n\nIt is the Taiwan Adaptive Learning Platform, / or TALP. //\n\nTaiwan's Ministry of Education / and our university / built it since Twenty-seventeen. //\n\nAs of June Twenty twenty-six, / it serves / about four million student accounts. //\n\nIt also serves / two hundred twenty thousand teachers / and over four thousand schools. //\n\nThis gives us / a strong base for our study. ///",
    "scriptZh": "現在讓我介紹我們的平台。//\n\n它是台灣適性學習平台，簡稱 TALP。//\n\n台灣教育部與本校自 2017 年起共同建置。//\n\n截至 2026 年 6 月，約有四百萬個學生帳號。//\n\n也服務 22 萬名教師，以及超過四千所學校。//\n\n這為我們的研究提供了堅實的基礎。///",
    "narrationScript": "Now let me introduce our platform.\n\nIt is the Taiwan Adaptive Learning Platform, or TALP.\n\nTaiwan's Ministry of Education and our university built it since Twenty-seventeen.\n\nAs of June Twenty twenty-six, it serves about four million student accounts.\n\nIt also serves two hundred twenty thousand teachers and over four thousand schools.\n\nThis gives us a strong base for our study."
  },
  {
    "number": 6,
    "pdfPage": 6,
    "section": "TALPer 0:50",
    "title": "TALPer",
    "subtitle": "Rehearsal segment 0:50",
    "script": "On top of TALP, / we built TALPer. //\n\nTALPer is / our AI learning companion. //\n\nIt is powered by / ChatGPT and Gemini. //\n\nIt has an AI tutor / for students. //\n\nAnd an AI assistant / for teachers. //\n\nTALPer went nationwide / in September Twenty twenty-four. //\n\nIt has reached / about seven hundred thousand users. ///",
    "scriptZh": "在 TALP 之上，/ 我們建置了 TALPer。//\n\nTALPer 是我們的 AI 學習夥伴。//\n\n它以 ChatGPT 與 Gemini 為基礎。//\n\n它有給學生使用的 AI 家教。//\n\n也有給教師使用的 AI 助理。//\n\nTALPer 於 2024 年 9 月全國上線。//\n\n目前已觸及約 70 萬名使用者。///",
    "narrationScript": "On top of TALP, we built TALPer.\n\nTALPer is our AI learning companion.\n\nIt is powered by ChatGPT and Gemini.\n\nIt has an AI tutor for students.\n\nAnd an AI assistant for teachers.\n\nTALPer went nationwide in September Twenty twenty-four.\n\nIt has reached about seven hundred thousand users."
  },
  {
    "number": 7,
    "pdfPage": 7,
    "section": "Research Questions 0:40",
    "title": "Research Questions",
    "subtitle": "Rehearsal segment 0:40",
    "script": "Our study has / three research questions. //\n\nFirst, / does TALPer improve learning outcomes, / compared with SRL 4L alone? //\n\nSecond, / do high achievers and low achievers / use TALPer differently? //\n\nThird, / what do the E-N-A maps / show us / about their network structures? ///",
    "scriptZh": "本研究有三個研究問題。//\n\n第一，與單純 SRL 4L 相比，TALPer 是否提升學習成效？//\n\n第二，高成就與低成就學生使用 TALPer 的方式是否不同？//\n\n第三，E-N-A 圖譜在他們的網絡結構上呈現了什麼？///",
    "narrationScript": "Our study has three research questions.\n\nFirst, does TALPer improve learning outcomes, compared with SRL 4L alone?\n\nSecond, do high achievers and low achievers use TALPer differently?\n\nThird, what do the E-N-A maps show us about their network structures?"
  },
  {
    "number": 8,
    "pdfPage": 8,
    "section": "Pedagogical Framework 1:10",
    "title": "Pedagogical Framework",
    "subtitle": "Rehearsal segment 1:10",
    "script": "Let me explain / how we put TALPer / into the SRL 4L framework. //\n\nThe process has / three parts. //\n\nPre class, / In class, / and Post class. //\n\nPre class, / students watch videos / and talk with TALPer. //\n\nThis sparks motivation, / and introduces basic concepts. //\n\nIn class, / the four phases / happen in order. //\n\nSelf, / co, / mutual, / and teacher-guided learning. //\n\nTALPer helps students / check their data / and reasoning. //\n\nTeachers also use / TALPer logs / to guide their teaching. //\n\nPost class, / students do workbook exercises / for review. //\n\nSo TALPer is not an add-on. // It is part of the cycle. ///",
    "scriptZh": "讓我說明我們如何把 TALPer 放進 SRL 4L 架構。//\n\n整個歷程分為三部分。//\n\n課前、課中，以及課後。//\n\n課前，學生觀看影片並與 TALPer 對話。//\n\n這能引發動機，並介紹基本概念。//\n\n課中，四個階段依序進行。//\n\n自學、共學、互學，以及導學。//\n\nTALPer 幫助學生檢查資料與推理。//\n\n教師也利用 TALPer 紀錄來引導教學。//\n\n課後，學生完成習作練習作為複習。//\n\n所以 TALPer 不是附加工具，/ 而是循環的一部分。///",
    "narrationScript": "Let me explain how we put TALPer into the SRL 4L framework.\n\nThe process has three parts.\n\nPre class, In class, and Post class.\n\nPre class, students watch videos and talk with TALPer.\n\nThis sparks motivation, and introduces basic concepts.\n\nIn class, the four phases happen in order.\n\nSelf, co, mutual, and teacher-guided learning.\n\nTALPer helps students check their data and reasoning.\n\nTeachers also use TALPer logs to guide their teaching.\n\nPost class, students do workbook exercises for review.\n\nSo TALPer is not an add-on. It is part of the cycle."
  },
  {
    "number": 9,
    "pdfPage": 9,
    "section": "Design and Participants 1:00",
    "title": "Design and Participants",
    "subtitle": "Rehearsal segment 1:00",
    "script": "Now let me explain / our research design. //\n\nWe had forty-four fifth-grade students / from a public school in Taiwan. //\n\nThey studied / ratios and percentages. //\n\nThe course had / five lessons / over two weeks. //\n\nThere were / two groups. //\n\nThe experimental group / had twenty-one students. //\n\nThe control group / had twenty-three students. //\n\nThe two groups / had no significant difference / in pre-test scores. //\n\nSo we can treat TALPer / as the main treatment. ///",
    "scriptZh": "現在讓我說明研究設計。//\n\n我們有 44 名來自台灣公立國小的五年級學生。//\n\n他們學習比率與百分率。//\n\n課程共五節課，歷時兩週。//\n\n共有兩組。//\n\n實驗組有 21 名學生。//\n\n控制組有 23 名學生。//\n\n兩組在前測分數上沒有顯著差異。//\n\n所以我們可以把 TALPer 視為主要的實驗處理。///",
    "narrationScript": "Now let me explain our research design.\n\nWe had forty-four fifth-grade students from a public school in Taiwan.\n\nThey studied ratios and percentages.\n\nThe course had five lessons over two weeks.\n\nThere were two groups.\n\nThe experimental group had twenty-one students.\n\nThe control group had twenty-three students.\n\nThe two groups had no significant difference in pre-test scores.\n\nSo we can treat TALPer as the main treatment."
  },
  {
    "number": 10,
    "pdfPage": 10,
    "section": "Coding and ENA 1:10",
    "title": "Coding and ENA",
    "subtitle": "Rehearsal segment 1:10",
    "script": "To study the learning pathway, / we built a coding framework. //\n\nIt has / two main parts. //\n\nMetacognition / and cognition. //\n\nFor metacognition, / we coded four behaviors. //\n\nGoal setting, / selecting strategies, / monitoring, / and reflection. //\n\nFor cognition, / we coded two types. //\n\nConceptual understanding / and procedural knowledge. //\n\nThen we used / E-N-A. //\n\nE-N-A does more / than count behaviors. //\n\nIt shows / how these behaviors / form a network. //\n\nThe X-axis / shows cognitive tendencies. //\n\nThe Y-axis / shows network complexity. ///",
    "scriptZh": "為了研究學習路徑，/ 我們建立了一套編碼架構。//\n\n它有兩個主要部分。//\n\n後設認知與認知。//\n\n在後設認知方面，/ 我們編碼四種行為。//\n\n目標設定、選擇策略、監控，以及反思。//\n\n在認知方面，/ 我們編碼兩種類型。//\n\n概念理解與程序知識。//\n\n接著我們使用知識網絡分析，簡稱 E-N-A。//\n\nE-N-A 不只是計算行為次數。//\n\n它呈現這些行為 / 如何形成網絡。//\n\nX 軸代表認知傾向。//\n\nY 軸代表網絡複雜度。///",
    "narrationScript": "To study the learning pathway, we built a coding framework.\n\nIt has two main parts.\n\nMetacognition and cognition.\n\nFor metacognition, we coded four behaviors.\n\nGoal setting, selecting strategies, monitoring, and reflection.\n\nFor cognition, we coded two types.\n\nConceptual understanding and procedural knowledge.\n\nThen we used E-N-A.\n\nE-N-A does more than count behaviors.\n\nIt shows how these behaviors form a network.\n\nThe X-axis shows cognitive tendencies.\n\nThe Y-axis shows network complexity."
  },
  {
    "number": 11,
    "pdfPage": 11,
    "section": "Result 1: Learning Outcomes 1:00",
    "title": "Result 1: Learning Outcomes",
    "subtitle": "Rehearsal segment 1:00",
    "script": "Now I will present / the results. //\n\nFor the first question, / we ran an AN-CO-VA. //\n\nThe adjusted post-test mean / was seventy-six point five six / for the control group. //\n\nFor the experimental group, / it was eighty-five point four nine. //\n\nThe difference / was significant. //\n\nF equals four point seven one, / p equals point oh three six, / and eta squared equals point one one four. //\n\nBoth groups improved / from pre-test to post-test. //\n\nThe control group / gained fourteen point four five points. //\n\nThe experimental group / gained twenty-six point four five points. //\n\nSo TALPer improved / learning outcomes. ///",
    "scriptZh": "接下來我將說明研究結果。//\n\n針對第一個問題，/ 我們進行了 ANCOVA 分析。//\n\n控制組的後測調整平均為 76.56。//\n\n實驗組則為 85.49。//\n\n這個差異達到顯著。//\n\nF 值為 4.71，p 值為 .036，效果量為 .114。//\n\n兩組從前測到後測都有進步。//\n\n控制組進步 14.45 分。//\n\n實驗組進步 26.45 分。//\n\n所以 TALPer 提升了學習成效。///",
    "narrationScript": "Now I will present the results.\n\nFor the first question, we ran an AN-CO-VA.\n\nThe adjusted post-test mean was seventy-six point five six for the control group.\n\nFor the experimental group, it was eighty-five point four nine.\n\nThe difference was significant.\n\nF equals four point seven one, p equals point oh three six, and eta squared equals point one one four.\n\nBoth groups improved from pre-test to post-test.\n\nThe control group gained fourteen point four five points.\n\nThe experimental group gained twenty-six point four five points.\n\nSo TALPer improved learning outcomes."
  },
  {
    "number": 12,
    "pdfPage": 12,
    "section": "Result 2: Usage Patterns 1:10",
    "title": "Result 2: Usage Patterns",
    "subtitle": "Rehearsal segment 1:10",
    "script": "The second result / is about usage patterns. //\n\nHere we look at / the experimental group only. //\n\nWe compared / high achievers / and low achievers. //\n\nHigh achievers / used TALPer / in more ways. //\n\nThey did goal setting, / asked concept questions, / and showed reflection. //\n\nThey also showed / selecting strategies / again and again. //\n\nLow achievers / used TALPer / in fewer ways. //\n\nThey mostly asked / for steps, / and looked for answers. //\n\nThey showed / little monitoring. //\n\nThis difference / was significant. //\n\nt equals four point oh five, // p less than point oh oh one, // and Cohen's d equals one point eight three. //\n\nSo TALPer does not work / the same way / for all students. ///",
    "scriptZh": "第二個結果是關於使用模式。//\n\n這裡我們只看實驗組。//\n\n我們比較了高成就與低成就學生。//\n\n高成就學生以更多方式使用 TALPer。//\n\n他們進行目標設定、提出概念問題，並呈現反思。//\n\n他們也一再地呈現選擇策略。//\n\n低成就學生以較少方式使用 TALPer。//\n\n他們大多詢問步驟並尋找答案。//\n\n他們很少監控。//\n\n這個差異達到顯著。//\n\nt 值為 4.05，p 小於 .001，Cohen's d 為 1.83。//\n\n所以 TALPer 對所有學生的作用並不相同。///",
    "narrationScript": "The second result is about usage patterns.\n\nHere we look at the experimental group only.\n\nWe compared high achievers and low achievers.\n\nHigh achievers used TALPer in more ways.\n\nThey did goal setting, asked concept questions, and showed reflection.\n\nThey also showed selecting strategies again and again.\n\nLow achievers used TALPer in fewer ways.\n\nThey mostly asked for steps, and looked for answers.\n\nThey showed little monitoring.\n\nThis difference was significant.\n\nt equals four point oh five, p less than point oh oh one, and Cohen's d equals one point eight three.\n\nSo TALPer does not work the same way for all students."
  },
  {
    "number": 13,
    "pdfPage": 13,
    "section": "Result 3: ENA Networks 1:00",
    "title": "Result 3: ENA Networks",
    "subtitle": "Rehearsal segment 1:00",
    "script": "The third result / comes from / the E-N-A maps. //\n\nFor high achievers, / the network was integrated. //\n\nTheir behaviors / formed / an integrated network. //\n\nQuestions, / monitoring, / and reflection / were linked together. //\n\nSo they used TALPer / as part of / a full learning pathway. //\n\nFor low achievers, / the network was fragmented. //\n\nTheir pattern was fragmented. // Ask, / then execute. //\n\nThey asked TALPer / what to do, / and just did it. //\n\nThey showed / few links / to monitoring and reflection. //\n\nSo the same TALPer / led to very different learning pathways. ///",
    "scriptZh": "第三個結果來自 E-N-A 圖譜。//\n\n對高成就學生，/ 網絡是整合的。//\n\n他們的行為 / 形成 / 整合的網絡。//\n\n提問、監控與反思彼此連結。//\n\n所以他們把 TALPer 用在完整的學習路徑中。//\n\n對低成就學生，/ 網絡是片段的。//\n\n他們的模式是片段的。/ 提問，然後執行。//\n\n他們問 TALPer 該做什麼，/ 然後就直接做。//\n\n他們很少連結到監控與反思。//\n\n所以同一個 TALPer / 帶來非常不同的學習路徑。///",
    "narrationScript": "The third result comes from the E-N-A maps.\n\nFor high achievers, the network was integrated.\n\nTheir behaviors formed an integrated network.\n\nQuestions, monitoring, and reflection were linked together.\n\nSo they used TALPer as part of a full learning pathway.\n\nFor low achievers, the network was fragmented.\n\nTheir pattern was fragmented. Ask, then execute.\n\nThey asked TALPer what to do, and just did it.\n\nThey showed few links to monitoring and reflection.\n\nSo the same TALPer led to very different learning pathways."
  },
  {
    "number": 14,
    "pdfPage": 14,
    "section": "Discussion: Findings in Relation to Prior Literature 約 1:25-1:40",
    "title": "Discussion: Findings in Relation to Prior Literature",
    "subtitle": "Rehearsal segment 約 1:25-1:40",
    "script": "In this slide, / I compare our findings / with prior literature. //\n\nPrior studies suggest / that generative AI can support / self-regulated learning. //\n\nBut this support / requires regulatory awareness. //\n\nOur study adds / two main points. //\n\nFirst, / TALPer integrated with SRL 4L / improved mathematics learning outcomes. //\n\nSecond, / TALPer did not work / in the same way for all learners. //\n\nStudents with stronger regulatory awareness / used TALPer for monitoring and reflection. //\n\nStudents with weaker regulatory awareness / mostly looked for steps and answers. //\n\nSo, / the main message is this: / AI can support learning, / but students need regulatory awareness / when they use TALPer. ///",
    "scriptZh": "在這張投影片中，/ 我比較本研究發現 / 與既有文獻。//\n\n既有研究指出，/ 生成式 AI 可以支持 / 自我調節學習。//\n\n但這種支持 / 需要調節意識。//\n\n本研究補充了 / 兩個重點。//\n\n第一，/ TALPer 與 SRL 4L 整合後，/ 提升了數學學習成效。//\n\n第二，/ TALPer 並不是對所有學習者 / 都以相同方式發揮作用。//\n\n調節意識較強的學生，/ 會使用 TALPer 進行監控與反思。//\n\n調節意識較弱的學生，/ 則大多尋找步驟與答案。//\n\n所以，/ 主要訊息是：/ AI 可以支持學習，/ 但學生在使用 TALPer 時 / 需要調節意識。///",
    "narrationScript": "In this slide, I compare our findings with prior literature.\n\nPrior studies suggest that generative AI can support self-regulated learning.\n\nBut this support requires regulatory awareness.\n\nOur study adds two main points.\n\nFirst, TALPer integrated with SRL 4L improved mathematics learning outcomes.\n\nSecond, TALPer did not work in the same way for all learners.\n\nStudents with stronger regulatory awareness used TALPer for monitoring and reflection.\n\nStudents with weaker regulatory awareness mostly looked for steps and answers.\n\nSo, the main message is this: AI can support learning, but students need regulatory awareness when they use TALPer."
  },
  {
    "number": 15,
    "pdfPage": 15,
    "section": "Discussion: ENA, Learning Pathways, and Cognitive Network Structures 約 1:25-1:45",
    "title": "Discussion: ENA, Learning Pathways, and Cognitive Network Structures",
    "subtitle": "Rehearsal segment 約 1:25-1:45",
    "script": "This slide focuses / on the learning pathway / shown by E-N-A. //\n\nE-N-A helps us see / the connections / among cognitive processes. //\n\nOur results showed / two different learning pathways. //\n\nHigh achievers / showed an integrated learning pathway, / with questions, monitoring, and reflection. //\n\nLow achievers / showed a fragmented learning pathway, / with steps, answers, / and little reflection. //\n\nTheir network structures / were also different. //\n\nHigh achievers showed / an integrated network. //\n\nLow achievers showed / a fragmented network. //\n\nSo, / E-N-A shows not only what students did, / but how their learning pathways were organized. ///",
    "scriptZh": "這張投影片聚焦於 / E-N-A 所呈現的 / 學習路徑。//\n\nE-N-A 幫助我們看見 / 認知歷程之間的 / 連結。//\n\n我們的結果呈現 / 兩種不同的學習路徑。//\n\n高成就學生 / 呈現整合型學習路徑，/ 包含提問、監控與反思。//\n\n低成就學生 / 呈現片段型學習路徑，/ 以步驟、答案與少量反思為主。//\n\n兩組學生的網絡結構 / 也有所不同。//\n\n高成就學生呈現 / 整合的網絡。//\n\n低成就學生呈現 / 片段的網絡。//\n\n因此，/ E-N-A 不只呈現學生做了什麼，/ 也呈現他們的學習路徑如何被組織。///",
    "narrationScript": "This slide focuses on the learning pathway shown by E-N-A.\n\nE-N-A helps us see the connections among cognitive processes.\n\nOur results showed two different learning pathways.\n\nHigh achievers showed an integrated learning pathway, with questions, monitoring, and reflection.\n\nLow achievers showed a fragmented learning pathway, with steps, answers, and little reflection.\n\nTheir network structures were also different.\n\nHigh achievers showed an integrated network.\n\nLow achievers showed a fragmented network.\n\nSo, E-N-A shows not only what students did, but how their learning pathways were organized."
  },
  {
    "number": 16,
    "pdfPage": 16,
    "section": "Thank You 0:30",
    "title": "Thank You",
    "subtitle": "Rehearsal segment 0:30",
    "script": "This brings me / to the end. //\n\nThank you very much / for your attention. //",
    "scriptZh": "我的報告到這裡結束。//\n\n非常感謝各位的聆聽。//",
    "narrationScript": "This brings me to the end.\n\nThank you very much for your attention."
  }
];
