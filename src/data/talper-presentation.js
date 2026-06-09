const v10DeckPptx = new URL(
  '../assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min_v10_no_slide11_legend.pptx',
  import.meta.url,
).href;

export const talperPresentationMeta = {
  title:
    'Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning',
  deckTitle: 'TBICS2026_TALPer_SRL4L_15min_v10_no_slide11_legend',
  totalDuration: '15 min',
  speaker: 'Zong-En Bai',
  sourceUrl: v10DeckPptx,
};

export const talperPresentationSlides = [
  {
    number: 1,
    pdfPage: 1,
    section: 'Opening',
    title: 'Title',
    subtitle: 'Opening and core problem',
    script: `Good morning everyone. My name is Zong-En Bai, from the Graduate Institute of Educational Information and Measurement at National Taichung University of Education, Taiwan.

Today I will present our study, Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning.

The focus of this study is TALPer, an AI learning companion designed for elementary mathematics problem solving. More specifically, we ask whether TALPer can improve students' mathematics learning when it is embedded in a structured self-regulated learning framework, and whether different students benefit from it in different ways.`,
    scriptZh: `大家早安。我是白宗恩，來自國立臺中教育大學教育資訊與測驗統計研究所。

今天我要報告我們的研究：將 AI 學習夥伴整合到自我調節學習 4L 架構中，對國小數學學習的影響。

本研究聚焦於 TALPer，這是一個為國小數學解題設計的 AI 學習夥伴。更具體地說，我們想了解，當 TALPer 被嵌入結構化的自我調節學習框架時，是否能提升學生的數學學習，以及不同學生是否會以不同方式受益。`,
  },
  {
    number: 2,
    pdfPage: 2,
    section: 'Core Story',
    title: 'Core Story',
    subtitle: 'The main thesis and roadmap',
    script: `Let me begin with the core story of this presentation.

Our main finding is that TALPer improves mathematics learning, but the more important lesson is not simply that AI is useful. The stronger message is differentiated: students benefit most when they can regulate, question, monitor, and reflect with AI.

So the presentation follows four steps. First, I will introduce the problem: generative AI can scaffold learning, but it can also create dependence. Second, I will explain our intervention: TALPer was embedded in a self-regulated learning 4L framework. Third, I will show three layers of evidence: learning outcomes, learning-process coding, and ENA network structures. Finally, I will discuss the implication: AI access alone is not enough. Students also need guidance in how to learn with AI.`,
    scriptZh: `我先從這份簡報的核心故事開始。

我們的主要發現是 TALPer 能提升數學學習，但更重要的重點不只是 AI 有用而已。更強的訊息是差異化的：當學生能夠和 AI 一起調節、提問、監控與反思時，他們受益最多。

因此，這份報告分成四個步驟。第一，我會介紹問題：生成式 AI 可以支架學習，但也可能造成依賴。第二，我會說明我們的介入設計：TALPer 被嵌入自我調節學習的 4L 架構。第三，我會呈現三層證據：學習成效、學習歷程編碼，以及 ENA 網絡結構。最後，我會討論其意涵：只有 AI 使用權限是不夠的，學生也需要知道如何和 AI 一起學習。`,
  },
  {
    number: 3,
    pdfPage: 3,
    section: 'Background',
    title: 'Background',
    subtitle: 'The scaffold-dependence tension',
    script: `The background of this study comes from a tension in current AI-supported learning.

On the one hand, generative AI can work as a scaffold for self-regulated learning. It can provide immediate feedback, step-by-step guidance, support for planning and monitoring, and differentiated help for students who need different levels of support.

This potential has been discussed in recent studies on generative AI and self-regulated learning, including Chiu and Wu and colleagues.

On the other hand, there is also a dependence risk. If students mainly use AI to get answers quickly, AI may support passive answer-seeking, procedural shortcutting, and reduced learner agency. This concern has also been raised in recent work by Jin and colleagues, and by Lee and Low.

For us, the important research gap is whether this scaffold-dependence tension differs across learner ability levels. In other words, when students have access to the same AI learning companion, do they all use it in the same way? Or do some students turn it into a tool for conceptual regulation, while others use it mainly for procedural completion?

This is why we ground the study in Zimmerman's self-regulated learning cycle: forethought, performance, and self-reflection.`,
    scriptZh: `本研究的背景來自目前 AI 支持學習中的一個張力。

一方面，生成式 AI 可以作為自我調節學習的支架。它能提供即時回饋、逐步引導、支持規劃與監控，並對需要不同支持程度的學生提供差異化協助。

這樣的潛力已在近年生成式 AI 與自我調節學習的研究中被討論，包括 Chiu、Wu 及其同事的研究。

另一方面，也存在依賴的風險。如果學生主要使用 AI 來快速取得答案，AI 可能會支持被動找答案、程序捷徑，以及降低學習者自主性。這個疑慮也在 Jin 及其同事、以及 Lee 和 Low 的近期研究中被提出。

對我們而言，重要的研究缺口是：這種支架與依賴的張力是否會因學習者能力而不同。換句話說，當學生使用同一個 AI 學習夥伴時，他們是否都用同樣方式使用它？還是有些學生把它變成概念調節的工具，而另一些學生主要把它用於完成程序？

因此，我們將研究奠基於 Zimmerman 的自我調節學習循環：前思、表現與自我反思。`,
  },
  {
    number: 4,
    pdfPage: 4,
    section: 'Theory',
    title: 'Theory',
    subtitle: 'SRL cycle mapped to classroom 4L practice',
    script: `This slide shows the theoretical mapping that supports our design.

Zimmerman's SRL model describes learning as a cycle. In the forethought phase, learners set goals and activate prior knowledge. In the performance phase, they monitor their progress, choose strategies, and adjust their actions. In the self-reflection phase, they notice errors and consolidate understanding.

Ho's 4L framework operationalizes these ideas in classroom practice. Self-learning corresponds mainly to forethought, because students prepare, set goals, and activate prior knowledge before class. Co-learning and mutual learning correspond mainly to the performance phase, because students monitor understanding, receive scaffolded feedback, and exchange strategies with peers. Teacher-guided learning corresponds to self-reflection, because teachers help students address misconceptions and integrate what they have learned.

This mapping is important for our study because it connects the instructional design, the SRL coding scheme, and the ENA analysis. We are not only asking whether students score higher. We are also asking whether their learning process shows a more complete regulatory cycle.`,
    scriptZh: `這張投影片呈現支撐我們設計的理論對應。

Zimmerman 的 SRL 模型將學習描述為一個循環。在前思階段，學習者設定目標並啟動先備知識。在表現階段，他們監控進度、選擇策略並調整行動。在自我反思階段，他們注意錯誤並鞏固理解。

Ho 的 4L 架構把這些想法落實到課室實作中。自學主要對應前思，因為學生在課前準備、設定目標並啟動先備知識。共學與互學主要對應表現階段，因為學生監控理解、接受支架回饋，並和同儕交換策略。教師導學則對應自我反思，因為教師協助學生處理迷思概念並整合所學。

這個對應對本研究很重要，因為它連結了教學設計、SRL 編碼架構與 ENA 分析。我們不只是問學生分數是否提高，也是在問他們的學習歷程是否呈現更完整的調節循環。`,
  },
  {
    number: 5,
    pdfPage: 5,
    section: 'Model',
    title: 'Model',
    subtitle: 'TALPer embedded in the learning cycle',
    script: `Here is how TALPer was embedded inside the SRL 4L learning cycle.

In the pre-class self-learning phase, students used the Taiwan Adaptive Learning Platform and TALPer for preparation. TALPer recorded students' questions and learning traces, so these records could become evidence for the teacher.

During class, the teacher used these logs to introduce key concepts and identify common difficulties. Then, in the co-learning phase, TALPer provided dialogic feedback and supported logical verification. Students were not only receiving answers; ideally, they were guided to reason through mathematical problems.

In the mutual learning phase, students shared strategies with peers. Finally, in the teacher-guided phase, the teacher helped students reflect, address misconceptions, and consolidate their understanding.

So TALPer was not treated as a separate tool outside the lesson. It was embedded into the classroom routine, connecting self-learning, co-learning, mutual learning, and teacher-guided reflection.`,
    scriptZh: `這裡說明 TALPer 如何被嵌入 SRL 4L 學習循環中。

在課前自學階段，學生使用因材網和 TALPer 進行準備。TALPer 記錄學生的問題與學習軌跡，因此這些紀錄可以成為教師的教學證據。

課堂中，教師使用這些紀錄來介紹關鍵概念並辨識共同困難。接著在共學階段，TALPer 提供對話式回饋並支持邏輯驗證。學生不只是接收答案；理想上，他們會被引導去推理數學問題。

在互學階段，學生和同儕分享策略。最後，在教師導學階段，教師協助學生反思、處理迷思概念，並鞏固理解。

因此，TALPer 並不是課堂外的一個獨立工具。它被嵌入課室流程，連結自學、共學、互學與教師引導反思。`,
  },
  {
    number: 6,
    pdfPage: 6,
    section: 'Research Questions',
    title: 'Research Questions',
    subtitle: 'Outcome, process, and structure',
    script: `Based on this design, we asked three research questions, each corresponding to a different evidence layer.

RQ1 focuses on learning outcomes: does TALPer plus SRL 4L improve mathematics learning compared with SRL 4L instruction alone?

RQ2 focuses on the learning process: when TALPer is available, do high- and low-achieving students differ in their self-regulated learning strategy use?

RQ3 focuses on cognitive network structure: do high- and low-achieving students organize their learning behaviors differently, as represented by ENA?

Together, these questions allow us to move from outcome evidence to process evidence, and then to structural evidence.`,
    scriptZh: `基於這個設計，我們提出三個研究問題，每一個都對應到不同層次的證據。

RQ1 聚焦於學習成效：相較於只有 SRL 4L 教學，TALPer 加上 SRL 4L 是否能提升數學學習？

RQ2 聚焦於學習歷程：當學生可以使用 TALPer 時，高成就與低成就學生在自我調節學習策略使用上是否不同？

RQ3 聚焦於認知網絡結構：以 ENA 表徵時，高成就與低成就學生是否以不同方式組織他們的學習行為？

這些問題讓我們能從成效證據，進一步走向歷程證據，再走向結構證據。`,
  },
  {
    number: 7,
    pdfPage: 7,
    section: 'Research Design',
    title: 'Research Design',
    subtitle: 'Quasi-experimental design',
    script: `This was a quasi-experimental study with 44 fifth-grade students from a public elementary school in Taiwan.

There were 21 students in the experimental group and 23 students in the control group. Both groups learned the same unit, Ratios and Percentages, across five lessons over two weeks.

The key design point is that both groups followed the same SRL 4L instructional structure. The difference was TALPer access. The experimental group received SRL 4L instruction with TALPer support, while the control group received the same SRL 4L structure without TALPer.

This comparison helps isolate the contribution of TALPer, because the broader pedagogical framework was held constant across groups.

Before the intervention, the two groups did not show a significant pre-test difference, with p equal to .376. This suggests that the two groups were reasonably comparable at baseline.`,
    scriptZh: `這是一項準實驗研究，對象是臺灣一所公立國小的 44 位五年級學生。

實驗組有 21 位學生，控制組有 23 位學生。兩組都在兩週內、共五節課學習同一個單元：比率與百分率。

關鍵設計點是，兩組都遵循相同的 SRL 4L 教學結構。差異在於是否能使用 TALPer。實驗組接受有 TALPer 支持的 SRL 4L 教學，控制組則接受沒有 TALPer 的相同 SRL 4L 結構。

這樣的比較有助於隔離 TALPer 的貢獻，因為兩組的大教學架構保持一致。

介入前，兩組前測沒有顯著差異，p 值為 .376。這表示兩組在基線上大致可比較。`,
  },
  {
    number: 8,
    pdfPage: 8,
    section: 'Analysis',
    title: 'Analysis',
    subtitle: 'From scores to learning-process structure',
    script: `Our analysis moved from scores to learning-process structure.

For the outcome layer, we used pre- and post-tests, and then ANCOVA with pre-test scores as the covariate. This allowed us to compare adjusted post-test performance while accounting for baseline differences.

For the process layer, we coded students' TALPer dialogues using an SRL coding framework. The coding framework included metacognitive behaviors and cognitive behaviors.

The metacognitive codes included goal setting, strategy selection, monitoring and evaluation, and reflection. The cognitive codes included conceptual questions, conceptual explanations, procedural questions, and procedural execution.

These codes are important because they distinguish between deeper conceptual engagement and more procedural forms of interaction. For example, asking about the meaning of a mathematical concept is different from asking for calculation steps.

For the structure layer, we used Epistemic Network Analysis. ENA does not only count how often behaviors occur. Instead, it models how coded behaviors co-occur and connect with one another during learning. In this study, the X-axis reflects relative cognitive tendencies, and the Y-axis reflects structural complexity and diversity in the cognitive network.

So the purpose of this analysis was to see whether students connected planning, inquiry, execution, monitoring, and reflection when learning with TALPer.`,
    scriptZh: `我們的分析從分數進一步走向學習歷程結構。

在成效層次，我們使用前測與後測，接著以 ANCOVA 將前測分數作為共變量。這讓我們能在控制基線差異後，比較調整後的後測表現。

在歷程層次，我們使用 SRL 編碼架構來編碼學生與 TALPer 的對話。這個編碼架構包含後設認知行為與認知行為。

後設認知編碼包含目標設定、策略選擇、監控與評估，以及反思。認知編碼包含概念問題、概念解釋、程序問題與程序執行。

這些編碼很重要，因為它們能區分較深層的概念投入與較程序性的互動形式。例如，詢問數學概念的意義，和詢問計算步驟，是不同的。

在結構層次，我們使用 Epistemic Network Analysis。ENA 不只是計算行為出現的頻率，而是建模編碼行為在學習過程中如何共同出現並彼此連結。在本研究中，X 軸反映相對認知傾向，Y 軸反映認知網絡中的結構複雜性與多樣性。

因此，這項分析的目的，是檢視學生在使用 TALPer 學習時，是否會連結規劃、探究、執行、監控與反思。`,
  },
  {
    number: 9,
    pdfPage: 9,
    section: 'RQ1 Result',
    title: 'RQ1 Result',
    subtitle: 'TALPer adds measurable value',
    script: `Now I will move to the results.

For RQ1, we found that TALPer-supported SRL 4L instruction produced higher adjusted post-test scores.

Both groups improved significantly from pre-test to post-test. The control group showed a gain of 14.45 points, and the TALPer group showed a gain of 26.45 points. Both gains were statistically significant, with p less than .001.

After controlling for pre-test performance, the adjusted post-test mean was 76.56 for the control group and 85.49 for the TALPer group.

The ANCOVA result was significant: F(1, 41) equals 4.71, p equals .036, with eta squared equal to .114. This indicates a medium effect size.

So the answer to RQ1 is yes: TALPer added measurable value beyond SRL 4L instruction alone.`,
    scriptZh: `接著我進入研究結果。

針對 RQ1，我們發現有 TALPer 支持的 SRL 4L 教學產生了較高的調整後後測分數。

兩組從前測到後測都有顯著進步。控制組進步 14.45 分，TALPer 組進步 26.45 分。兩個進步幅度都達統計顯著，p 小於 .001。

控制前測表現後，控制組的調整後後測平均為 76.56，TALPer 組為 85.49。

ANCOVA 結果達顯著：F(1, 41) 等於 4.71，p 等於 .036，eta squared 等於 .114。這表示中等效果量。

因此，RQ1 的答案是肯定的：相較於只有 SRL 4L 教學，TALPer 增加了可測量的價值。`,
  },
  {
    number: 10,
    pdfPage: 10,
    section: 'RQ2 Result',
    title: 'RQ2 Result',
    subtitle: 'Different regulatory uses of TALPer',
    script: `For RQ2, we looked only at the experimental group, because we wanted to understand how students used TALPer when the tool was available.

We compared high-achieving students and low-achieving students within the TALPer group. There were 10 high-achieving students and 11 low-achieving students.

The key result is that the major difference was not tool access, because both groups had access to TALPer. The major difference was regulatory strategy.

High-achieving students showed more goal setting, conceptual questioning, monitoring, reflection, and iterative strategy use. In other words, they used TALPer as part of a regulatory cycle.

Low-achieving students were more likely to show strategy selection, procedural asking, answer-seeking flow, and limited reflection. Their interaction pattern was more focused on completing procedures.

The difference was statistically pronounced, with t(12.07) equals 4.05, p less than .001, and Cohen's d equal to 1.83.

This suggests that TALPer did not automatically produce the same learning process for every student.`,
    scriptZh: `針對 RQ2，我們只分析實驗組，因為我們想了解當工具可用時，學生如何使用 TALPer。

我們比較 TALPer 組中的高成就學生與低成就學生。其中高成就學生有 10 位，低成就學生有 11 位。

關鍵結果是，主要差異並不是工具使用權限，因為兩組都能使用 TALPer。主要差異在於調節策略。

高成就學生展現更多目標設定、概念提問、監控、反思與反覆策略使用。換句話說，他們把 TALPer 作為調節循環的一部分。

低成就學生則較常展現策略選擇、程序性提問、尋求答案的流程，以及有限反思。他們的互動模式更聚焦於完成程序。

這個差異在統計上相當明顯，t(12.07) 等於 4.05，p 小於 .001，Cohen's d 等於 1.83。

這表示 TALPer 不會自動為每位學生產生相同的學習歷程。`,
  },
  {
    number: 11,
    pdfPage: 11,
    section: 'RQ3 Result',
    title: 'RQ3 Result',
    subtitle: 'Network-level process differences',
    script: `RQ3 examines the network structures behind these differences.

The ENA visualization shows that high-achieving students formed more integrated and multidirectional cognitive networks. Their learning behaviors connected goal setting, conceptual inquiry, procedural execution, monitoring, and reflection.

In practical terms, this means that high-achieving students did not only ask TALPer for help. They tended to move back and forth among planning, asking conceptual questions, trying procedures, checking understanding, and reflecting on their work.

In contrast, low-achieving students showed a more fragmented and procedural pattern. Their network was closer to an ask-receive-execute cycle. They tended to ask procedural questions, receive guidance, and carry out steps, but with fewer links to conceptual explanation or reflection.

This result is important because it helps explain the differentiated effect of AI support. TALPer can provide feedback, but the structure of learning still depends on how students regulate their interaction with the tool.

So the ENA result supports the same conclusion as RQ2, but at a structural level: high-achievers used TALPer within a richer regulatory network, while low-achievers remained closer to procedural dependence.`,
    scriptZh: `RQ3 檢視這些差異背後的網絡結構。

ENA 視覺化顯示，高成就學生形成較整合且多方向的認知網絡。他們的學習行為連結了目標設定、概念探究、程序執行、監控與反思。

在實務意義上，這表示高成就學生不只是向 TALPer 求助。他們傾向在規劃、提出概念問題、嘗試程序、檢查理解與反思作品之間來回移動。

相較之下，低成就學生呈現較片段且程序性的模式。他們的網絡更接近「提問、接收、執行」的循環。他們傾向提出程序問題、接收指引並執行步驟，但較少連結到概念解釋或反思。

這個結果很重要，因為它有助於解釋 AI 支持的差異化效果。TALPer 可以提供回饋，但學習結構仍取決於學生如何調節自己與工具的互動。

因此，ENA 結果在結構層次上支持了與 RQ2 相同的結論：高成就學生在較豐富的調節網絡中使用 TALPer，而低成就學生則更接近程序依賴。`,
  },
  {
    number: 12,
    pdfPage: 12,
    section: 'Implications',
    title: 'Implications',
    subtitle: 'Teaching students to regulate with AI',
    script: `The pedagogical implication is that teachers need to teach students how to regulate with AI.

Our findings suggest that TALPer's effectiveness cannot be assumed from tool availability alone. Providing students with an AI learning companion is helpful, but it is not sufficient.

Teachers may need to guide students in three ways.

First, guided questioning: students should learn how to ask conceptual questions, not only request answers or procedures.

Second, structured reflection: students need prompts that help them check, explain, and revise their thinking.

Third, dialogue modeling: teachers can show examples of productive TALPer-mediated dialogue, so students can see what high-quality interaction with AI looks like.

These supports are especially important for low-achieving students, who may tend toward procedural dependence. If we want AI feedback to support deeper learning, it should invite explanation, comparison, and reflection.`,
    scriptZh: `教學意涵是，教師需要教學生如何和 AI 一起調節學習。

我們的發現顯示，不能只因為學生能使用工具，就假設 TALPer 會有效。提供學生一個 AI 學習夥伴是有幫助的，但這還不夠。

教師可能需要從三個方向引導學生。

第一，引導式提問：學生應學會提出概念問題，而不只是要求答案或程序。

第二，結構化反思：學生需要能幫助他們檢查、解釋與修正思考的提示。

第三，對話示範：教師可以示範有效的 TALPer 中介對話，讓學生看到高品質的人機互動長什麼樣子。

這些支持對低成就學生尤其重要，因為他們可能傾向程序依賴。如果我們希望 AI 回饋支持更深層的學習，它應該邀請學生解釋、比較與反思。`,
  },
  {
    number: 13,
    pdfPage: 13,
    section: 'Closing',
    title: 'Closing',
    subtitle: 'AI tools plus regulatory classroom routines',
    script: `To conclude, this study shows that an AI learning companion is not a silver bullet.

TALPer improved mathematics learning outcomes when integrated into the SRL 4L framework. However, the process and ENA results show that the scaffolding effect depends on learners' regulatory awareness.

High-achieving students were able to use TALPer feedback for conceptual deepening and multidirectional regulation. Low-achieving students were more likely to remain in surface-level procedural interaction.

Therefore, the key message is that AI-supported instruction should not only focus on access to AI tools. It should also support students' capacity to ask better questions, monitor understanding, and reflect on learning.

There are also limitations. The sample size was small, with 44 students, and longer-term studies are needed. Future research should examine interventions that foster regulatory awareness among low-achieving students and test TALPer integration across different mathematics domains.

Thank you very much. I welcome your questions and comments.`,
    scriptZh: `總結來說，本研究顯示 AI 學習夥伴並不是萬靈丹。

當 TALPer 被整合到 SRL 4L 架構中時，它提升了數學學習成效。然而，歷程與 ENA 結果顯示，支架效果取決於學習者的調節意識。

高成就學生能使用 TALPer 回饋來深化概念並進行多方向調節。低成就學生則較可能停留在表層的程序性互動。

因此，核心訊息是，AI 支持教學不應只聚焦於是否能使用 AI 工具，也應支持學生提出更好問題、監控理解與反思學習的能力。

本研究也有限制。樣本數較小，只有 44 位學生，也需要更長期的研究。未來研究可以檢驗能促進低成就學生調節意識的介入，並測試 TALPer 在不同數學領域中的整合。

非常謝謝大家，歡迎提出問題與建議。`,
  },
];
