const talperDeckPdf = new URL(
  "../assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min.pdf",
  import.meta.url,
).href;

export const talperPresentationMeta = {
  title:
    "Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning",
  deckTitle: "TBICS_template_21.05.2026",
  totalDuration: "13 min 30 sec",
  speaker: "Zong-En Bai",
  sourceUrl: talperDeckPdf,
};

export const talperPresentationSlides = [
  {
    number: 1,
    pdfPage: 1,
    section: "開場 0:00–0:25",
    title: "開場",
    subtitle: "Rehearsal segment 0:00–0:25",
    script: `Good morning, everyone.

My name is Zong-En Bai. I am from National Taichung University of Education, Taiwan.

Today, I will talk about TALPer, an AI learning companion.

We put TALPer into a self-regulated learning framework, called the 4L framework.

The topic is elementary math: ratios and percentages, for grade five.`,
    scriptZh: `各位早安。

我是白宗恩，來自臺灣國立臺中教育大學。

今天我要談 TALPer，一個 AI 學習夥伴。

我們將 TALPer 放入自我調節學習的四學模式中。

主題是國小數學：五年級的比率與百分率。`,
  },
  {
    number: 2,
    pdfPage: 2,
    section: "核心訊息 0:25–1:10",
    title: "核心訊息",
    subtitle: "Rehearsal segment 0:25–1:10",
    script: `My main message is simple.

TALPer improved math learning.

But here is the key point: not all students benefited in the same way.

Students learned more when they set goals, asked questions, checked their understanding, and reflected.

So, giving students AI is not enough.

The key is HOW students learn with AI.`,
    scriptZh: `我的核心訊息很簡單。

TALPer 提升了數學學習成效。

但關鍵是：不是所有學生都以相同方式受益。

當學生會設定目標、提問、檢查理解、反思時，他們學得更多。

所以，只給學生 AI 是不夠的。

關鍵是學生「如何」與 AI 一起學習。`,
  },
  {
    number: 3,
    pdfPage: 3,
    section: "AI 的潛力與依賴風險 1:10–2:05",
    title: "AI 的潛力與依賴風險",
    subtitle: "Rehearsal segment 1:10–2:05",
    script: `Generative AI has great potential in education.

It gives real-time feedback and step-by-step help.

But there is a risk.

Some students use AI in a passive way.

They only ask for answers. They take shortcuts.

Then, AI may hurt learning, not help it.

So our question is: Is AI a support, or does it create dependence?

And, is this different for high and low achievers?`,
    scriptZh: `生成式 AI 在教育上有很大潛力。

它能提供即時回饋與逐步引導。

但也有風險。

有些學生被動地使用 AI。

他們只是要答案、走捷徑。

這樣 AI 可能傷害學習，而不是幫助學習。

所以我們的問題是：AI 是支持，還是造成依賴？

而且，高成就與低成就學生會不會不一樣？`,
  },
  {
    number: 4,
    pdfPage: 4,
    section: "理論架構 2:05–3:05",
    title: "理論架構",
    subtitle: "Rehearsal segment 2:05–3:05",
    script: `Our study is based on Zimmerman's self-regulated learning cycle.

The cycle has three phases: forethought, performance, and self-reflection.

We connect this cycle to Ho's 4L framework.

Self-learning: students set goals.

Co-learning: students check their understanding with feedback.

Mutual learning: students share ideas with peers.

Teacher-guided learning: teachers fix misconceptions.

The 4L framework gives the classroom structure. TALPer works inside it.`,
    scriptZh: `本研究奠基於 Zimmerman 的自我調節學習循環。

循環有三階段：前思、表現、自我反思。
（發音：forethought = FOR–thot）

我們把這個循環連結到 Ho 的四學模式。

自學：學生設定目標。

合學：學生透過回饋檢查理解。

互學：學生與同儕分享想法。

導學：教師修正迷思概念。

四學模式提供課堂結構，TALPer 在其中運作。`,
  },
  {
    number: 5,
    pdfPage: 5,
    section: "TALPer 介紹 3:05–4:00",
    title: "TALPer 介紹",
    subtitle: "Rehearsal segment 3:05–4:00",
    script: `TALPer is an AI learning companion on the Taiwan Adaptive Learning Platform.

It supports math problem solving in elementary school.

TALPer has three roles.

First, it records students' questions and learning traces.

Second, it gives feedback through dialogue.

Third, it helps students check their reasoning.

Importantly, TALPer does not give answers directly. It guides students.

Teachers can also use the records to plan their teaching.`,
    scriptZh: `TALPer 是臺灣因材網上的 AI 學習夥伴。

它支持國小數學解題。

TALPer 有三個角色。

第一，記錄學生的提問與學習軌跡。

第二，透過對話提供回饋。

第三，協助學生檢查推理。

重要的是，TALPer 不直接給答案，而是引導學生。

教師也能用這些紀錄來規劃教學。`,
  },
  {
    number: 6,
    pdfPage: 6,
    section: "三層證據 4:00–4:50",
    title: "三層證據",
    subtitle: "Rehearsal segment 4:00–4:50",
    script: `We used three layers of evidence.

Layer one: learning outcomes.

Did TALPer improve learning? Yes or no?

Layer two: learning process.

Did high and low achievers use different strategies?

Layer three: learning structure.

We used E-N-A to see students' cognitive networks.

So we asked not only "Does it work?" but also "How, and for whom?"`,
    scriptZh: `我們使用三層證據。

第一層：學習成效。

TALPer 有沒有提升學習？

第二層：學習歷程。

高低成就學生的策略是否不同？

第三層：學習結構。

我們用 ENA 來看學生的認知網絡。

所以我們不只問「有沒有效」，還問「如何有效、對誰有效」。`,
  },
  {
    number: 7,
    pdfPage: 7,
    section: "教學設計 4:50–5:45",
    title: "教學設計",
    subtitle: "Rehearsal segment 4:50–5:45",
    script: `Both groups had the same 4L instruction.

The only difference was TALPer.

Before class, the experimental group watched videos and talked with TALPer.

In class, teachers used TALPer records to see students' problems.

Then, students did co-learning, mutual learning, and teacher-guided learning.

The control group did the same activities, but without TALPer.`,
    scriptZh: `兩組接受相同的四學模式教學。

唯一差別是 TALPer。

課前，實驗組看影片並與 TALPer 互動。

課中，教師用 TALPer 紀錄了解學生的問題。

接著進行合學、互學與導學。

控制組做相同活動，但沒有 TALPer。`,
  },
  {
    number: 8,
    pdfPage: 8,
    section: "研究設計與對象 5:45–6:30",
    title: "研究設計與對象",
    subtitle: "Rehearsal segment 5:45–6:30",
    script: `We compared two groups of fifth-grade students.

In total, 44 students from a public elementary school in Taiwan.

21 students in the experimental group. 23 in the control group.

Both groups learned ratios and percentages.

Five lessons, over two weeks.

Before the study, the two groups had no difference on the pre-test.

So we can focus on the effect of TALPer.`,
    scriptZh: `我們比較兩組五年級學生。

共 44 位，來自臺灣一所公立國小。

實驗組 21 人，控制組 23 人。

兩組都學比率與百分率。

五節課，為期兩週。

研究前，兩組前測沒有差異。

所以我們可以聚焦在 TALPer 的效果。`,
  },
  {
    number: 9,
    pdfPage: 9,
    section: "編碼與 ENA 6:30–7:40",
    title: "編碼與 ENA",
    subtitle: "Rehearsal segment 6:30–7:40",
    script: `We coded students' dialogues with TALPer.

There were two main categories.

The first is metacognition.

It includes goal setting, strategy selection, monitoring, and reflection.

The second is cognition.

It includes conceptual questions and explanations, and procedural questions and execution.

Then, we used E-N-A.

E-N-A does not just count behaviors.

It shows how behaviors connect with each other.

This gives us the structure of students' learning.`,
    scriptZh: `我們對學生與 TALPer 的對話進行編碼。

有兩大類別。

第一類是後設認知。（MET–a–cog–NI–shun）

包含目標設定、策略選擇、監控與反思。

第二類是認知。

包含概念提問與解釋、程序提問與執行。

接著我們使用 ENA。

ENA 不只是計算行為次數。

它顯示行為之間如何連結。

這讓我們看到學生學習的結構。`,
  },
  {
    number: 10,
    pdfPage: 10,
    section: "成效結果 7:40–8:55",
    title: "成效結果",
    subtitle: "Rehearsal segment 7:40–8:55",
    script: `Now, the results.

Both groups improved from pre-test to post-test.

But the TALPer group improved much more.

The control group gained 14 point 45 points.

The TALPer group gained 26 point 45 points. Almost double.

After controlling for the pre-test, the TALPer group scored 85 point 49.

The control group scored 76 point 56.

The difference was significant: F equals 4 point 7 1, p equals point 0 3 6.

The effect size was medium: eta squared equals point 1 1 4.

So, TALPer with the 4L framework improved math learning.`,
    scriptZh: `現在來看結果。

兩組從前測到後測都有進步。

但 TALPer 組進步更多。

控制組進步 14.45 分。

TALPer 組進步 26.45 分，幾乎是兩倍。

控制前測後，TALPer 組為 85.49。

控制組為 76.56。

差異顯著：F = 4.71，p = .036。

效果量中等：η² = .114。

所以，TALPer 加四學模式提升了數學學習。`,
  },
  {
    number: 11,
    pdfPage: 11,
    section: "策略差異 8:55–10:05",
    title: "策略差異",
    subtitle: "Rehearsal segment 8:55–10:05",
    script: `The second result is about students inside the TALPer group.

We compared high achievers and low achievers.

They used TALPer very differently.

High achievers set more goals.

They asked more conceptual questions.

They monitored and reflected more.

Low achievers asked more procedural questions.

Their pattern was: ask, get an answer, and move on.

The difference was significant: t equals 4 point 0 5, p less than point 0 0 1.

Cohen's d was 1 point 8 3. A very large difference.

Same tool, but very different learning.`,
    scriptZh: `第二個結果是關於 TALPer 組內的學生。

我們比較高成就與低成就學生。

他們使用 TALPer 的方式非常不同。

高成就學生設定較多目標。

他們提出較多概念性問題。

他們更常監控與反思。

低成就學生問較多程序性問題。

他們的模式是：問、拿到答案、繼續。

差異顯著：t = 4.05，p < .001。

Cohen's d 為 1.83，差異非常大。

同一個工具，但學習方式非常不同。`,
  },
  {
    number: 12,
    pdfPage: 12,
    section: "ENA 網絡結構 10:05–11:15",
    title: "ENA 網絡結構",
    subtitle: "Rehearsal segment 10:05–11:15",
    script: `The third result is the E-N-A networks. Please look at this figure.

High achievers, on this side, showed a dense and connected network.

Goal setting, conceptual questions, execution, and reflection were all connected.

They used TALPer in a full learning cycle.

Low achievers, on the other side, showed a fragmented network.

Their pattern was linear: ask a procedural question, then execute.

Very little reflection. Very little conceptual thinking.

In short: high achievers build knowledge. Low achievers follow procedures.`,
    scriptZh: `第三個結果是 ENA 網絡。請看這張圖。

高成就學生（這一側）呈現密集且連結的網絡。

目標設定、概念提問、執行與反思全部相連。

他們以完整學習循環使用 TALPer。

低成就學生（另一側）呈現片段化網絡。

模式是線性的：問程序問題，然後執行。

很少反思，很少概念思考。

簡言之：高成就者建構知識；低成就者執行程序。`,
  },
  {
    number: 13,
    pdfPage: 13,
    section: "教學意涵 11:15–12:20",
    title: "教學意涵",
    subtitle: "Rehearsal segment 11:15–12:20",
    script: `What does this mean for teachers?

Giving students an AI tool is not enough.

We must teach students how to learn with AI.

We suggest three supports.

First, guided questioning.

Show students how to ask "why", not only "how".

Second, structured reflection.

Use prompts that help students check and explain their thinking.

Third, dialogue modeling.

Show good examples of learning with TALPer.

These supports are most important for low achievers.`,
    scriptZh: `這對教師的意義是什麼？

只給學生 AI 工具是不夠的。

我們必須教學生如何與 AI 學習。

我們建議三種支持。

第一，引導式提問。

示範如何問「為什麼」，而不只是「怎麼做」。

第二，結構化反思。

用提示協助學生檢查並解釋想法。

第三，對話示範。

展示與 TALPer 的良好學習對話範例。

這些支持對低成就學生最重要。`,
  },
  {
    number: 14,
    pdfPage: 14,
    section: "結論 12:20–13:20",
    title: "結論",
    subtitle: "Rehearsal segment 12:20–13:20",
    script: `To conclude:

TALPer can improve elementary math learning.

But AI is not a silver bullet.

Its effect depends on students' self-regulation.

High achievers used AI to think deeper.

Low achievers used AI to get answers.

So, in the future, we should not only build better AI.

We should also build better learning guidance.

The key question is not how powerful AI is.

The key question is how well we guide students to learn with AI.

Thank you very much. I welcome your questions.`,
    scriptZh: `總結：

TALPer 能提升國小數學學習。

但 AI 不是萬靈丹。

效果取決於學生的自我調節。

高成就學生用 AI 深化思考。

低成就學生用 AI 取得答案。

所以未來不只要打造更好的 AI。

也要打造更好的學習引導。

關鍵問題不是 AI 有多強。

關鍵是我們如何引導學生與 AI 學習。

非常感謝，歡迎提問。`,
  }
];
