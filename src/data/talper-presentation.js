const v10DeckPptx = new URL(
  "../assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min_v10_no_slide11_legend.pptx",
  import.meta.url,
).href;

export const talperPresentationMeta = {
  title:
    "Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning",
  deckTitle: "TBICS2026_TALPer_SRL4L_15min_v10_no_slide11_legend",
  totalDuration: "15 min",
  speaker: "Zong-En Bai",
  sourceUrl: v10DeckPptx,
};

export const talperPresentationSlides = [
  {
    number: 1,
    pdfPage: 1,
    section: "Opening",
    title: "Title",
    subtitle: "Opening and core problem",
    script: `Good morning everyone. My name is Zong-En Bai, from National Taichung University of Education, Taiwan.

Today I present our study: Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning.

Our companion is called TALPer.

We ask: can TALPer improve mathematics learning inside a structured self-regulated learning framework — and do different students benefit in different ways?`,
    scriptZh: `大家早安，我是白宗恩，來自台灣的國立臺中教育大學。

今天我要報告我們的研究：《將 AI 學習夥伴整合進自我調節學習 4L 框架對國小數學學習的影響》。

我們的學習夥伴名為 TALPer。

我們想問：在結構化的自我調節學習框架中，TALPer 能否提升數學學習？不同的學生是否會以不同的方式受益？`,
  },
  {
    number: 2,
    pdfPage: 2,
    section: "Core Story",
    title: "Core Story",
    subtitle: "The main thesis and roadmap",
    script: `Here is the core story.

TALPer does improve learning. But the more important lesson is not simply that AI is useful.

It is differentiated: students benefit most when they can regulate, question, monitor, and reflect with AI.

The talk has four steps: the problem, our intervention, three layers of evidence, and the implication — that AI access alone is not enough.`,
    scriptZh: `以下是本場報告的核心故事。

TALPer 確實能提升學習，但更重要的啟示，並不只是「AI 很有用」。

關鍵在於差異化：當學生能夠運用 AI 進行調節、提問、監控與反思時，受益最大。

本報告分為四個部分：問題、我們的介入方式、三層證據，以及一個啟示——光是能用 AI 並不足夠。`,
  },
  {
    number: 3,
    pdfPage: 3,
    section: "Background",
    title: "Background",
    subtitle: "The scaffold-dependence tension",
    script: `Our study comes from a tension in AI-supported learning.

On one hand, generative AI can scaffold self-regulated learning: immediate feedback, step-by-step guidance, and differentiated help.

On the other hand, there is a dependence risk.

If students use AI mainly to get answers quickly, it can support passive answer-seeking and reduced learner agency.

Our research gap is this: does the scaffold-dependence tension differ across ability levels?

With the same AI companion, do all students use it the same way — or do some use it for conceptual regulation, and others only for procedural completion?

We ground the study in Zimmerman's SRL cycle: forethought, performance, and self-reflection.`,
    scriptZh: `我們的研究源自 AI 輔助學習中的一個矛盾。

一方面，生成式 AI 可以作為自我調節學習的鷹架：提供即時回饋、逐步引導，以及差異化的協助。

另一方面，也存在依賴的風險。

如果學生主要用 AI 來快速取得答案，反而會助長被動找答案，並削弱學習自主性。

我們的研究缺口是：這種「鷹架與依賴」的矛盾，是否會隨著學生能力程度而有所不同？

使用同一個 AI 夥伴時，所有學生都會以相同方式使用它嗎？還是有些人用它來進行概念調節，有些人卻只用它來完成計算步驟？

我們以 Zimmerman 的自我調節學習循環為基礎：預備期、執行期與自我反思期。`,
  },
  {
    number: 4,
    pdfPage: 4,
    section: "Theory",
    title: "Theory",
    subtitle: "SRL cycle mapped to classroom 4L practice",
    script: `This slide shows our theoretical mapping.

Zimmerman's model is a cycle.

In forethought, learners set goals and activate prior knowledge.

In performance, they monitor and adjust.

In self-reflection, they notice errors and consolidate understanding.

Ho's 4L framework turns this into classroom practice.

Self-learning maps to forethought. Co-learning and mutual learning map to performance. Teacher-guided learning maps to self-reflection.

This mapping matters because it links our instructional design, our coding scheme, and our network analysis.

We ask not only whether students score higher, but whether their learning shows a more complete regulatory cycle.`,
    scriptZh: `這張投影片呈現我們的理論對應關係。

Zimmerman 的模型是一個循環。

在預備期，學習者設定目標並喚起先備知識。

在執行期，他們監控進度並調整做法。

在自我反思期，他們察覺錯誤並鞏固理解。

Ho 的 4L 框架把這些理念轉化為課堂實務。

自學對應預備期；共學與互學對應執行期；師導學習對應自我反思期。

這個對應很重要，因為它串連了我們的教學設計、編碼架構與網絡分析。

我們不只問學生分數是否更高，也問他們的學習是否展現出更完整的調節循環。`,
  },
  {
    number: 5,
    pdfPage: 5,
    section: "Model",
    title: "Model",
    subtitle: "TALPer embedded in the learning cycle",
    script: `Here is how TALPer was embedded in the 4L cycle.

Before class, students used the Taiwan Adaptive Learning Platform and TALPer to prepare.

TALPer recorded their questions and learning traces — evidence for the teacher.

During class, the teacher used these logs to introduce key concepts and spot common difficulties.

In co-learning, TALPer gave dialogic feedback and supported logical verification — guiding reasoning, not just giving answers.

In mutual learning, students shared strategies with peers.

Finally, the teacher guided reflection and addressed misconceptions.

So TALPer was not a separate tool. It was woven into the classroom routine.`,
    scriptZh: `以下是 TALPer 如何融入 4L 循環。

課前，學生使用「台灣adaptive 學習平台」與 TALPer 進行準備。

TALPer 記錄了學生的提問與學習軌跡，成為教師的依據。

課堂中，教師利用這些紀錄來引介重要概念，並找出常見困難。

在共學階段，TALPer 提供對話式回饋並支援邏輯驗證——引導推理，而非只是給答案。

在互學階段，學生與同儕分享策略。

最後，教師引導反思並處理迷思概念。

所以 TALPer 並非獨立於課堂外的工具，而是融入了整個課堂流程。`,
  },
  {
    number: 6,
    pdfPage: 6,
    section: "Research Questions",
    title: "Research Questions",
    subtitle: "Outcome, process, and structure",
    script: `We asked three questions, each for a different evidence layer.

RQ1, outcomes: does TALPer plus SRL 4L improve learning, compared with SRL 4L alone?

RQ2, process: with TALPer available, do high- and low-achieving students differ in their self-regulated strategy use?

RQ3, structure: do they organize their learning behaviors differently, as shown by ENA?

So we move from outcome, to process, to structure.`,
    scriptZh: `我們提出三個研究問題，各自對應一層證據。

RQ1 學習成效：TALPer 加上 SRL 4L，相較於只用 SRL 4L，能否提升學習？

RQ2 學習歷程：在可使用 TALPer 的情況下，高、低成就學生在自我調節策略的運用上是否有差異？

RQ3 結構：如 ENA 所示，他們組織學習行為的方式是否不同？

因此，我們從成效，進到歷程，再到結構。`,
  },
  {
    number: 7,
    pdfPage: 7,
    section: "Research Design",
    title: "Research Design",
    subtitle: "Quasi-experimental design",
    script: `This was a quasi-experimental study with 44 fifth-grade students from a public elementary school in Taiwan: 21 in the experimental group, 23 in the control group.

Both groups learned the same unit — Ratios and Percentages — over two weeks.

The key point: both followed the same SRL 4L structure. The only difference was TALPer access.

This lets us isolate TALPer's contribution, because the pedagogy was held constant.

At baseline, the two groups showed no significant pre-test difference, p = .376 — so they were comparable.`,
    scriptZh: `這是一項準實驗研究，對象是台灣某公立國小的 44 名五年級學生：實驗組 21 人、控制組 23 人。

兩組在兩週內學習相同單元——「比與百分率」。

關鍵在於：兩組都採用相同的 SRL 4L 結構，唯一的差別是能否使用 TALPer。

這讓我們能單獨檢視 TALPer 的貢獻，因為教學框架維持一致。

在起點上，兩組的前測沒有顯著差異，p = .376，因此具有可比性。`,
  },
  {
    number: 8,
    pdfPage: 8,
    section: "Analysis",
    title: "Analysis",
    subtitle: "From scores to learning-process structure",
    script: `Our analysis moved from scores to learning structure.

For outcomes, we used pre- and post-tests, with ANCOVA using the pre-test as covariate.

For the process, we coded students' TALPer dialogues using an SRL framework with two types of behavior.

Metacognitive codes — such as goal setting and reflection. And cognitive codes — such as conceptual questions versus procedural execution.

This distinction matters: asking what a concept means is different from asking for calculation steps.

For structure, we used Epistemic Network Analysis.

ENA does not just count behaviors — it models how they connect during learning.

The X-axis reflects cognitive tendency; the Y-axis reflects structural complexity.

So the goal was to see whether students connected planning, inquiry, execution, monitoring, and reflection with TALPer.`,
    scriptZh: `我們的分析從分數延伸到學習結構。

在成效層面，我們採用前後測，並以前測為共變量進行 ANCOVA 分析。

在歷程層面，我們以一套包含兩類行為的 SRL 架構，對學生的 TALPer 對話進行編碼。

後設認知編碼——例如目標設定與反思；以及認知編碼——例如概念性提問相對於程序性執行。

這個區分很重要：詢問一個概念的意義，與詢問計算步驟，是不同的。

在結構層面，我們使用知識網絡分析（ENA）。

ENA 不只是計算行為次數，而是建模這些行為在學習過程中如何彼此連結。

X 軸反映認知傾向；Y 軸反映結構的複雜度。

因此，目標是檢視學生在使用 TALPer 時，是否將規劃、探究、執行、監控與反思連結起來。`,
  },
  {
    number: 9,
    pdfPage: 9,
    section: "RQ1 Result",
    title: "RQ1 Result",
    subtitle: "TALPer adds measurable value",
    script: `Now the results.

For RQ1, TALPer-supported instruction produced higher adjusted scores.

Both groups improved significantly. But the TALPer group gained much more — about 26 points versus 14 points for the control group.

After controlling for the pre-test, the adjusted post-test mean was 85.5 for TALPer, versus 76.6 for the control group.

The ANCOVA was significant: p = .036, with a medium effect size.

So the answer to RQ1 is yes — TALPer added measurable value beyond SRL 4L alone.`,
    scriptZh: `接下來是結果。

在 RQ1 中，TALPer 輔助的教學產生了較高的調整後分數。

兩組都有顯著進步，但 TALPer 組進步更多——大約 26 分，相較於控制組的 14 分。

在控制前測之後，調整後的後測平均分數，TALPer 組為 85.5，控制組為 76.6。

ANCOVA 結果顯著：p = .036，效果量為中等。

所以 RQ1 的答案是肯定的——TALPer 在 SRL 4L 之外，帶來了可測量的額外價值。`,
  },
  {
    number: 10,
    pdfPage: 10,
    section: "RQ2 Result",
    title: "RQ2 Result",
    subtitle: "Different regulatory uses of TALPer",
    script: `For RQ2, we looked only at the experimental group, to see how students used TALPer when it was available.

We compared 10 high-achieving and 11 low-achieving students.

The key result: the difference was not tool access — both groups had TALPer. The difference was regulatory strategy.

High-achieving students showed more goal setting, conceptual questioning, monitoring, and reflection.

They used TALPer as part of a regulatory cycle.

Low-achieving students leaned toward procedural asking and answer-seeking, with limited reflection.

This difference was large and significant, with Cohen's d = 1.83.

So TALPer did not automatically create the same learning process for everyone.`,
    scriptZh: `在 RQ2 中，我們只看實驗組，以了解學生在能使用 TALPer 時是如何運用它的。

我們比較了 10 名高成就學生與 11 名低成就學生。

關鍵結果是：差異不在於能否使用工具——兩組都有 TALPer；差異在於調節策略。

高成就學生展現出更多的目標設定、概念性提問、監控與反思。

他們把 TALPer 當作調節循環的一部分。

低成就學生則偏向程序性提問與尋求答案，反思較少。

這個差異既大又顯著，Cohen's d = 1.83。

因此，TALPer 並不會自動為每位學生創造出相同的學習歷程。`,
  },
  {
    number: 11,
    pdfPage: 11,
    section: "RQ3 Result",
    title: "RQ3 Result",
    subtitle: "Network-level process differences",
    script: `RQ3 examines the networks behind these differences.

The ENA shows that high-achieving students formed more integrated, multidirectional networks.

They moved back and forth among planning, conceptual questions, trying procedures, checking understanding, and reflecting.

Low-achieving students showed a more fragmented, procedural pattern — closer to an ask-receive-execute cycle, with fewer links to explanation or reflection.

This helps explain the differentiated effect.

TALPer provides feedback, but the structure of learning still depends on how students regulate their interaction.

So ENA supports the same conclusion as RQ2, at a structural level: high-achievers used TALPer within a richer regulatory network, while low-achievers stayed closer to procedural dependence.`,
    scriptZh: `RQ3 檢視這些差異背後的網絡結構。

ENA 顯示，高成就學生形成了更為整合、多向連結的網絡。

他們在規劃、概念性提問、嘗試步驟、檢核理解與反思之間來回移動。

低成就學生則呈現較零散、偏程序性的模式——較接近「提問—接收—執行」的循環，較少連結到解釋或反思。

這有助於解釋這種差異化的效果。

TALPer 能提供回饋，但學習的結構仍取決於學生如何調節自己與工具的互動。

所以 ENA 在結構層面支持了與 RQ2 相同的結論：高成就者在更豐富的調節網絡中使用 TALPer，而低成就者則較停留在程序性依賴。`,
  },
  {
    number: 12,
    pdfPage: 12,
    section: "Implications",
    title: "Implications",
    subtitle: "Teaching students to regulate with AI",
    script: `The implication: teachers need to teach students how to regulate with AI.

Providing an AI companion is helpful, but not sufficient.

Teachers can help in three ways.

First, guided questioning — students should learn to ask conceptual questions, not just request answers.

Second, structured reflection — prompts that help them check, explain, and revise their thinking.

Third, dialogue modeling — showing examples of productive AI dialogue.

These supports matter most for low-achieving students, who tend toward procedural dependence.`,
    scriptZh: `本研究的啟示是：教師需要教導學生如何運用 AI 進行自我調節。

提供一個 AI 學習夥伴是有幫助的，但並不足夠。

教師可以從三個方面提供協助。

第一，引導式提問——學生應學會問概念性問題，而不只是要答案。

第二，結構化反思——透過提示，幫助他們檢核、解釋並修正自己的想法。

第三，對話示範——展示高品質 AI 對話的範例。

這些支持對低成就學生最為重要，因為他們傾向於程序性依賴。`,
  },
  {
    number: 13,
    pdfPage: 13,
    section: "Closing",
    title: "Closing",
    subtitle: "AI tools plus regulatory classroom routines",
    script: `To conclude: an AI learning companion is not a silver bullet.

TALPer improved outcomes inside the SRL 4L framework.

But the process and ENA results show the scaffolding effect depends on learners' regulatory awareness.

High-achievers used TALPer for conceptual deepening; low-achievers stayed at surface-level procedures.

So AI-supported instruction should not only focus on access. It should build students' capacity to ask better questions, monitor understanding, and reflect.

Our limitations: a small sample of 44 students and a short two-week intervention.

Future work should test longer-term use, and whether explicit regulatory scaffolding can especially help low-achieving students.

Thank you very much. I welcome your questions.`,
    scriptZh: `總結來說：AI 學習夥伴並非萬靈丹。

TALPer 在 SRL 4L 框架中提升了學習成效。

但歷程與 ENA 的結果顯示，鷹架效果取決於學習者的調節意識。

高成就者用 TALPer 深化概念；低成就者則停留在表面的程序操作。

因此，AI 輔助教學不應只關注能否取用工具，更應培養學生提出更好問題、監控理解與反思的能力。

本研究的限制：樣本僅 44 名學生，且介入期僅兩週、較為短暫。

未來研究應檢驗更長期的使用，以及明確的調節鷹架是否能特別協助低成就學生。

非常感謝大家，歡迎各位提問。`,
  },
];