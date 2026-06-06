export const talperPresentationMeta = {
  title:
    'Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning',
  deckTitle: 'TALPer_SRL_4L_20min',
  totalDuration: '15 min',
  speaker: 'Zong-En Bai',
  sourceUrl:
    'https://docs.google.com/presentation/d/1H4yijZLyyA36WICeayta9nj65JxiNVicLSZmkyvgC70',
};

const talperPresentationSlideDrafts = [
  {
    number: 1,
    pdfPage: 1,
    section: 'Title',
    title: 'Title',
    subtitle: 'Opening and core problem',
    script: `Good morning everyone.

My name is Zong-En Bai, and today I am very pleased to present our study titled "Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning."

This study was conducted with Professor Bor-Chen Kuo and Professor Chia-Hua Lin at the Graduate Institute of Educational Information and Measurement, National Taichung University of Education, Taiwan.

The focus of this study is TALPer, a generative-AI learning companion integrated into the Taiwan Adaptive Learning Platform, or TALP.

More specifically, we examined how TALPer can support fifth-grade students' mathematics learning when it is embedded into a self-regulated learning 4L instructional framework.

The core idea of this presentation is simple:

AI may help students learn, but its effect depends on how students regulate their own learning.

In other words, AI is not only a tool for answering questions. It can also become a scaffold for planning, monitoring, reflection, and conceptual understanding.

But without proper guidance, it may also produce passive dependence.

This tension is the main problem we address in this study.`,
  },
  {
    number: 2,
    pdfPage: 2,
    section: 'Presentation Outline',
    title: 'Presentation Outline',
    subtitle: 'Six-part walkthrough',
    script: `Today's presentation will proceed in six parts.

First, I will introduce the background and the educational tension surrounding generative AI.

Second, I will explain the theoretical framework, especially the relationship between Zimmerman's self-regulated learning cycle and Ho's 4L framework.

Third, I will introduce TALPer as an AI learning companion and explain its functional design.

Fourth, I will describe our research design, participants, instructional process, and analytical methods.

Fifth, I will present the major results, including learning outcomes and ENA-based cognitive network structures.

Finally, I will discuss the implications, limitations, and future directions.

The whole presentation is designed as a 20-minute walkthrough from motivation to implications.`,
  },
  {
    number: 3,
    pdfPage: 3,
    section: 'Background',
    title: 'AI in Education: Promise and Tension',
    subtitle: 'The GenAI-SRL paradox',
    script: `Let me begin with the background.

In recent years, artificial intelligence has become increasingly important in education. Earlier intelligent tutoring systems mainly relied on big-data analytics and adaptive mechanisms to provide differentiated instruction. These systems have already shown potential for supporting sustainable and personalized education.

However, generative AI changes the situation substantially. Compared with traditional systems, generative AI can provide real-time feedback, step-by-step explanations, and flexible dialogue.

In this sense, it may function as a digital scaffold for self-regulated learning.

But there is also a paradox.

On the one hand, structured prompts and AI feedback may help students set goals, monitor their understanding, reflect on mistakes, and select strategies.

On the other hand, if students rely on AI passively, AI may reduce learner agency. Students may simply ask for the answer, copy the procedure, and move on without conceptual engagement.

So the key problem is not simply whether AI works.

The more important question is:

For whom does AI work, and under what kinds of learning processes does it work?

This issue is especially important in elementary mathematics, where students are still developing both conceptual understanding and self-regulated learning capacity.

Therefore, our study does not only examine whether TALPer improves test scores. We also examine how students interact with the AI companion and whether high- and low-ability students show different self-regulated learning patterns.`,
  },
  {
    number: 4,
    pdfPage: 4,
    section: 'Theoretical Framework',
    title: "Zimmerman's SRL Cycle x Ho's 4L Framework",
    subtitle: 'Instructional structure plus psychological mechanism',
    script: `The theoretical foundation of this study combines Zimmerman's self-regulated learning cycle and Ho's 4L framework.

Zimmerman's SRL cycle includes three major phases: forethought, performance, and self-reflection.

In the forethought phase, learners set goals and activate prior knowledge.

In the performance phase, they monitor their understanding, select strategies, and adjust their learning actions.

In the self-reflection phase, they evaluate their learning outcomes, identify errors, and consolidate understanding.

Ho's 4L framework operationalizes this idea in classroom instruction.

The four Ls are self-learning, co-learning, mutual learning, and teacher-guided learning.

In our interpretation, self-learning corresponds to the forethought phase, because students prepare before class and activate prior knowledge.

Co-learning and mutual learning correspond to the performance phase, because students monitor understanding, exchange strategies, and adjust their thinking through dialogue.

Teacher-guided learning corresponds to self-reflection, because the teacher helps students address misconceptions and integrate knowledge.

This mapping is important because it provides the instructional logic for integrating TALPer into the classroom. It also informs our coding framework for analyzing students' learning dialogues and ENA cognitive network structures.

In simple terms, the 4L framework gives us the classroom structure, while self-regulated learning theory gives us the psychological mechanism.`,
  },
  {
    number: 5,
    pdfPage: 5,
    section: 'TALPer as an AI Learning Companion',
    title: 'TALPer: An AI Learning Companion',
    subtitle: 'Three roles across the learning cycle',
    script: `Now I will introduce TALPer.

TALPer is an AI learning companion built on the Taiwan Adaptive Learning Platform. In this study, TALPer was used to support students' mathematics problem solving in the unit of ratios and percentages.

TALPer plays three major roles.

First, it provides real-time guidance. Before class, students interact with TALPer while watching TALP videos or completing learning tasks. TALPer records their questions and learning traces.

Second, it provides a verification scaffold. During class, students can use TALPer to check their reasoning, verify their solution steps, and receive step-by-step feedback.

Third, it provides strategy prompts. Rather than only giving answers, TALPer encourages students to monitor their understanding, revise strategies, and reflect on their problem-solving process.

In the instructional design, TALPer is integrated across the three phases of learning.

In the pre-class phase, students conduct self-learning with videos and TALPer dialogue.

In the in-class phase, the teacher uses TALPer logs to introduce key concepts. Students then engage in co-learning with scaffolded feedback, mutual learning through peer comparison, and teacher-guided consolidation.

In the post-class phase, students complete workbook practice for review.

So TALPer is not treated as an isolated chatbot. It is embedded into a structured pedagogical framework.`,
  },
  {
    number: 6,
    pdfPage: 6,
    section: 'TALPer as an AI Learning Companion',
    title: "TALPer's Functional Design",
    subtitle: 'Academic boundaries and guided dialogue',
    script: `Before moving to the research questions, I would like to further explain how TALPer actually functions during student interaction.

TALPer is not designed as a general-purpose chatbot.

Instead, it is designed as an academic learning companion with clear instructional boundaries.

First, TALPer avoids answering non-academic questions or sensitive political issues. This is important because, in an elementary school context, the AI system should keep students focused on learning tasks and maintain a safe educational environment.

Second, after a student asks a question, TALPer does not simply provide a direct final answer.

Instead, it guides the student to think about the problem step by step.

Through dialogue, TALPer helps students gradually understand the relevant concepts, examine their reasoning, and solve the problem.

This design is closely aligned with the idea of self-regulated learning.

Rather than replacing the learner's thinking, TALPer is intended to support the learner's thinking process.

For example, when a student encounters a mathematics problem, TALPer may guide the student to identify the known information, clarify the goal of the problem, select a possible strategy, verify each step, and reflect on whether the solution makes sense.

Therefore, TALPer's function is not merely answer generation.

Its pedagogical role is closer to guided inquiry, reasoning support, and reflective scaffolding.

This is also why we integrated TALPer into the SRL 4L framework.

The goal was not simply to add AI into the classroom, but to embed AI into a structured learning cycle where students can plan, monitor, discuss, verify, and reflect.

This distinction is important.

A chatbot alone may produce fragmented interactions. But TALPer is designed with academic boundaries and guided-dialogue functions, so it can be embedded into a self-regulated learning framework to support more meaningful learning cycles.`,
  },
  {
    number: 7,
    pdfPage: 7,
    section: 'Research Questions',
    title: 'Three Layered Research Questions',
    subtitle: 'Outcome, process, and structure',
    script: `Based on this design, we proposed three research questions.

The first question focuses on learning outcomes:

Does integrating TALPer into an SRL 4L framework result in superior learning outcomes compared to the SRL 4L framework without TALPer support?

The second question focuses on learning processes:

Within the TALPer-supported environment, are there significant differences in the SRL strategies exhibited by high- and low-ability students?

The third question focuses on cognitive network structure:

Are there significant differences in the cognitive network structures between high- and low-ability students, as represented by Epistemic Network Analysis?

These three questions form a layered design: outcome, process, and structure.

The first question tells us whether TALPer improves learning.

The second tells us how students use SRL strategies.

The third tells us how those strategies are structurally connected in students' learning dialogue.`,
  },
  {
    number: 8,
    pdfPage: 8,
    section: 'Method',
    title: 'Research Design and Participants',
    subtitle: 'Quasi-experimental design',
    script: `This study adopted a quasi-experimental design with a two-week intervention.

The participants were 44 fifth-grade students from a public elementary school in Taiwan.

There were 21 students in the experimental group and 23 students in the control group.

Both groups studied five lessons on ratios and percentages over two weeks.

The experimental group received SRL 4L instruction supported by TALPer.

The control group received the same SRL 4L instructional structure, but without access to TALPer.

Importantly, there was no significant baseline difference between the two groups on the pre-test, with p equal to .376.

This means the two groups were comparable before the intervention.

Therefore, the main difference between the two groups was the integration of TALPer.

This design allowed us to isolate the effect of TALPer within the same instructional framework.`,
  },
  {
    number: 9,
    pdfPage: 9,
    section: 'Method',
    title: 'Pedagogical Framework',
    subtitle: 'Pre-class, in-class, and post-class phases',
    script: `The instructional design followed a three-phase structure: pre-class, in-class, and post-class.

In the pre-class phase, students engaged in self-learning through TALP instructional videos.

In the experimental group, TALPer recorded students' questions and learning traces. These data helped the teacher understand students' prior difficulties before the class began.

During the in-class phase, the teacher first introduced key concepts based on students' learning traces.

Then students engaged in co-learning, where TALPer provided scaffolded feedback and logical verification.

Students also participated in mutual learning, where they compared strategies across groups.

Finally, the teacher guided the whole class to consolidate ideas and address misconceptions.

In the post-class phase, students completed workbook exercises to reinforce what they had learned.

The key point here is that TALPer was not used only after students failed.

It was used throughout the learning cycle: before class, during collaborative learning, and during reflection.`,
  },
  {
    number: 10,
    pdfPage: 10,
    section: 'Method',
    title: 'SRL Coding Framework and ENA Dimensions',
    subtitle: 'Metacognition x cognition',
    script: `To analyze students' learning processes, we developed a coding framework with two main categories: metacognition and cognition.

The metacognitive category included four codes:

goal setting, strategy selection, monitoring and evaluation, and reflection.

The cognitive category also included four codes:

conceptual understanding ask, conceptual understanding explain, procedural knowledge ask, and procedural knowledge execute.

For example, when a student set or adjusted a learning goal, we coded it as M.SG.

When a student asked about the meaning or application of a concept, we coded it as C.CUA.

When a student performed a calculation or formulated an answer, we coded it as C.PKE.

These codes allowed us to examine not only what students said, but also how their metacognitive and cognitive behaviors were connected.

We then used Epistemic Network Analysis, or ENA, to map the co-occurrence of these codes into two-dimensional cognitive network representations.

The X-axis reflects relative differences in cognitive tendencies, while the Y-axis captures differences in structural complexity and diversity.

This is important because frequency alone is not enough.

Two students may use the same number of strategies, but the structure of their strategy connections may be very different.

ENA helps us see those structural differences.`,
  },
  {
    number: 11,
    pdfPage: 11,
    section: 'Method',
    title: 'Statistical and Analytical Methods',
    subtitle: 'T-tests, ANCOVA, and ENA',
    script: `Our analysis used a multi-method approach.

First, we used paired-samples t-tests to examine whether each group improved from pre-test to post-test.

Second, we used ANCOVA to compare the adjusted post-test scores between the experimental and control groups, using pre-test scores as the covariate.

Third, we used ENA to examine the cognitive network structures based on coded dialogue events.

So the analytical logic is again outcome, process, and structure.

The t-tests and ANCOVA tell us whether students improved and whether TALPer had an effect.

The coding framework tells us what SRL strategies students used.

ENA tells us how these strategies were connected in cognitive networks.`,
  },
  {
    number: 12,
    pdfPage: 12,
    section: 'Results',
    title: 'RQ1: TALPer Significantly Boosts Learning Outcomes',
    subtitle: 'Learning outcome effect',
    script: `Now let me present the results.

For RQ1, the results showed that TALPer significantly improved learning outcomes.

After controlling for pre-test scores, the ANCOVA showed a significant group effect:

F(1, 41) = 4.71, p = .036, with eta squared = .114.

The adjusted post-test mean of the experimental group was 85.49, while the adjusted post-test mean of the control group was 76.56.

This indicates that students who learned with TALPer-supported SRL 4L instruction performed significantly better than students who learned with the SRL 4L framework alone.

The effect size was medium.

In practical terms, this result suggests that TALPer can function as an effective cognitive scaffold when embedded into a structured self-regulated learning environment.

However, this is only the first layer of the story.

The next question is: did all students benefit in the same way?`,
  },
  {
    number: 13,
    pdfPage: 13,
    section: 'Results',
    title: 'RQ2: SRL Strategy Profiles Diverge by Ability',
    subtitle: 'Different ways of using TALPer',
    script: `For RQ2, we examined differences between high- and low-ability students within the TALPer-supported group.

The results showed a significant difference in SRL strategy profiles between the two groups:

t(12.07) = 4.05, p < .001, with Cohen's d = 1.83.

This is a large effect size, meaning that the difference between high- and low-ability students was substantial.

High-achieving students showed a more complete regulatory cycle.

They moved between goal setting, monitoring, conceptual questioning, strategy switching, and reflection.

Their dialogues were deeper, more multidirectional, and more iterative.

In contrast, low-achieving students focused more on procedural execution.

They often selected a strategy or asked for a procedure, but showed less reflection and less conceptual dialogue.

Their interactions tended to follow a linear pattern:

ask a question, receive an answer, execute the procedure.

This finding is important because both groups had access to TALPer.

The difference was not tool availability.

The difference was how students engaged with the tool.

So we can say that TALPer created learning opportunities, but students' regulatory awareness shaped how those opportunities were used.`,
  },
  {
    number: 14,
    pdfPage: 14,
    section: 'Results',
    title: 'RQ3: Cognitive Network Structures Diverge',
    subtitle: 'ENA network differences',
    script: `RQ3 further confirmed this difference through ENA.

The ENA visualizations showed that high-achieving students formed more integrated and multidirectional cognitive networks.

Their networks included strong connections among goal setting, conceptual questioning, procedural execution, and reflection.

This suggests that high-achieving students did not simply use TALPer to get answers.

They used it to move between planning, inquiry, execution, and reflection.

Low-achieving students, however, showed more fragmented and linear networks.

Their networks centered mainly on strategy selection and procedural knowledge asking.

Their learning process was more like:

What should I do? How do I calculate this? Then execute the procedure.

There were fewer links to conceptual understanding and reflection.

This structural difference is one of the major contributions of the study.

It shows that AI-supported learning should not be evaluated only by test scores.

We also need to examine the structure of students' learning processes.

To put it simply:

High-achieving students used TALPer as a thinking partner.

Low-achieving students were more likely to use TALPer as a procedural shortcut.

That does not mean TALPer failed low-achieving students.

It means that low-achieving students may need stronger scaffolding to use TALPer productively.`,
  },
  {
    number: 15,
    pdfPage: 15,
    section: 'Discussion',
    title: 'Three Key Findings',
    subtitle: 'Outcome, process, and structure',
    script: `Based on these results, we identified three key findings.

First, TALPer functioned as an effective cognitive scaffold within the SRL 4L framework.

Immediate and personalized AI feedback promoted higher-order exploration and improved mathematics learning performance.

Second, high- and low-achieving students displayed distinct SRL profiles.

High-achieving students completed fuller regulatory cycles involving conceptual analysis and reflection.

Low-achieving students remained more procedurally focused.

Third, ENA revealed contrasting cognitive network structures.

High-achieving students formed integrated, multidirectional networks, while low-achieving students showed fragmented, linear, and execution-centered networks.

Together, these findings suggest that the value of AI in education depends not only on the AI system itself, but also on students' capacity to regulate their interaction with the AI.

This is a subtle but important shift.

The question should not be:

Can AI teach students?

The better question is:

How can we help students learn with AI in a self-regulated way?`,
  },
  {
    number: 16,
    pdfPage: 16,
    section: 'Discussion',
    title: 'Implications: Beyond Tool Availability',
    subtitle: "Teacher support for students' AI use",
    script: `The pedagogical implication is that providing AI access is not enough.

TALPer's effectiveness cannot be assumed from tool availability alone.

It is closely tied to learners' cognitive and self-regulatory strategies.

This means the teacher's role becomes even more important in AI-supported classrooms.

We propose three extensions of the teacher's role.

First, teachers need to provide guided questioning.

Students should learn how to ask TALPer productive questions, not just answer-seeking questions.

Second, teachers need to provide structured reflection.

Low-achieving students especially need prompts that help them explain why a method works, what mistake they made, and how they can revise their strategy.

Third, teachers need to provide dialogue modeling.

Students need examples of high-quality TALPer-mediated dialogue.

For instance, instead of asking:

What is the answer?

students can ask:

What concept should I use here?

Can you help me check my reasoning?

or

What is another way to solve this problem?

In this sense, AI literacy in mathematics education should include not only tool operation, but also question design, reflection, and strategic dialogue.`,
  },
  {
    number: 17,
    pdfPage: 17,
    section: 'Conclusion',
    title: 'Conclusion',
    subtitle: 'Differentiated effects of an AI companion',
    script: `To conclude, this study shows the differentiated effects of an AI learning companion in a self-regulated learning environment.

High-ability students were able to leverage TALPer's dynamic feedback for conceptual deepening.

They formed multidirectional and iterative cognitive networks and showed more complete SRL regulatory cycles.

Low-ability students, in contrast, tended toward surface-level procedural dependence.

Their networks were more fragmented and execution-focused.

Therefore, regulatory awareness becomes the key intervention point.

The main take-home message is this:

An AI learning companion is not a silver bullet. Its scaffolding effect depends on learners' regulatory awareness.

For equitable AI education, we need to design interventions that help low-achieving students move from procedural dependence toward conceptual understanding and reflection.`,
  },
  {
    number: 18,
    pdfPage: 18,
    section: 'Future Work',
    title: 'Limitations and Future Work',
    subtitle: 'Sample, domain, duration, and coding reliability',
    script: `Of course, this study has several limitations.

First, the sample size was limited.

The study involved 44 students from a single elementary school, so external validity is limited.

Second, the learning domain was limited to ratios and percentages.

Future studies should examine whether TALPer can be transferred to other mathematics domains such as algebra, geometry, or probability.

Third, the intervention lasted only two weeks.

Therefore, long-term effects were not observed.

Fourth, the coding process relied on TALPer auto-coding, so manual validation is still needed to strengthen the reliability of the analysis.

Future research should design specific interventions to build regulatory awareness, especially for low-achieving students.

It should also examine the long-term sustainability of TALPer integration and combine dialogue data with other multimodal learning analytics, such as behavior and affect data.`,
  },
  {
    number: 19,
    pdfPage: 19,
    section: 'Contribution',
    title: 'Contributions',
    subtitle: 'Theoretical, methodological, and practical',
    script: `This study makes three contributions.

Theoretically, it integrates TALPer into the SRL 4L framework and addresses the GenAI-SRL paradox from an ability-differentiated perspective.

Methodologically, it combines SRL coding with ENA, moving beyond aggregate learning outcomes toward process and structural analysis.

Practically, it provides a classroom-ready model for integrating TALPer into elementary mathematics instruction in Taiwan.

It also identifies concrete entry points for differentiated support, especially for students who may otherwise use AI in a procedural and dependent way.`,
  },
  {
    number: 20,
    pdfPage: 20,
    section: 'References',
    title: 'References',
    subtitle: 'Key theoretical and methodological references',
    script: `The key theoretical and methodological references include Zimmerman's self-regulated learning theory, Ho's 4L framework, Bergmann and Sams' flipped classroom model, and Shaffer and colleagues' work on Epistemic Network Analysis.

We also build on recent studies of generative AI, self-regulated learning, and AI learning companions.

These references help position our study at the intersection of AI in education, self-regulated learning, mathematics education, and learning analytics.`,
  },
  {
    number: 21,
    pdfPage: 21,
    section: 'Thank You',
    title: 'Thank You',
    subtitle: 'Closing and Q&A',
    script: `To close, I would like to emphasize one final point.

The future of AI in education should not be reduced to faster answers or automated tutoring.

The more important goal is to design learning environments where AI helps students become more reflective, more strategic, and more self-regulated learners.

TALPer shows promise in this direction, but the findings also remind us that AI scaffolding must be paired with pedagogical scaffolding.

Thank you very much for your attention.

I welcome your questions and comments.`,
  },
];

const talperPresentationScriptZh = {
  1: `大家早安。

我是白宗恩，今天很高興向各位報告我們的研究，題目是「將 AI 學習夥伴整合到自我調整學習 4L 架構中，對國小數學學習的影響」。

本研究由臺灣國立臺中教育大學教育資訊與測驗統計研究所的郭伯臣教授、林佳樺教授與我共同完成。

本研究的焦點是 TALPer，一個整合在因材網，也就是 TALP，中的生成式 AI 學習夥伴。

更具體來說，我們探討當 TALPer 被嵌入自我調整學習 4L 教學架構時，如何支持五年級學生的數學學習。

這場報告的核心想法很簡單：

AI 可能幫助學生學習，但它的效果取決於學生如何調整自己的學習。

換句話說，AI 不只是回答問題的工具。它也可以成為規劃、監控、反思與概念理解的鷹架。

但是，如果沒有適當引導，它也可能造成被動依賴。

這個張力就是本研究要處理的主要問題。`,
  2: `今天的報告會分成六個部分。

第一，我會介紹研究背景，以及生成式 AI 在教育中帶來的機會與張力。

第二，我會說明理論架構，特別是 Zimmerman 的自我調整學習循環與 Ho 的 4L 架構之間的關係。

第三，我會介紹 TALPer 作為 AI 學習夥伴，並說明它的功能設計。

第四，我會說明研究設計、參與者、教學流程與分析方法。

第五，我會呈現主要結果，包括學習成效以及以 ENA 分析的認知網絡結構。

最後，我會討論研究意涵、限制與未來方向。

整場報告設計為 15 分鐘，從研究動機一路說明到研究意涵。`,
  3: `我先從研究背景開始。

近年來，人工智慧在教育中越來越重要。早期的智慧型教學系統主要依靠大數據分析與適性化機制，提供差異化教學。這些系統已經展現出支持永續與個人化教育的潛力。

然而，生成式 AI 大幅改變了這個情境。相較於傳統系統，生成式 AI 可以提供即時回饋、逐步解釋與彈性對話。

因此，它可能成為支持自我調整學習的數位鷹架。

但這裡也存在一個弔詭。

一方面，結構化提示與 AI 回饋可能幫助學生設定目標、監控理解、反思錯誤並選擇策略。

另一方面，如果學生被動依賴 AI，AI 可能降低學習者的主體性。學生可能只是要求答案、複製步驟，然後在沒有概念投入的情況下繼續往下做。

所以關鍵問題不只是 AI 有沒有用。

更重要的問題是：

AI 對誰有效？又是在什麼樣的學習歷程下有效？

這個問題在國小數學中特別重要，因為學生仍在發展概念理解與自我調整學習能力。

因此，本研究不只檢驗 TALPer 是否能提升測驗分數。我們也檢驗學生如何與 AI 學習夥伴互動，以及高、低能力學生是否展現不同的自我調整學習模式。`,
  4: `本研究的理論基礎結合 Zimmerman 的自我調整學習循環與 Ho 的 4L 架構。

Zimmerman 的自我調整學習循環包含三個主要階段：前思、表現與自我反思。

在前思階段，學習者設定目標並啟動先備知識。

在表現階段，學習者監控理解、選擇策略，並調整學習行動。

在自我反思階段，學習者評估學習結果、辨識錯誤，並鞏固理解。

Ho 的 4L 架構則把這個想法轉化為課堂教學流程。

四個 L 分別是自學、共學、互學與導學。

在我們的詮釋中，自學對應前思階段，因為學生在課前準備並啟動先備知識。

共學與互學對應表現階段，因為學生透過對話監控理解、交換策略並調整思考。

導學對應自我反思，因為教師協助學生處理迷思概念並整合知識。

這個對應很重要，因為它提供了將 TALPer 整合進課堂的教學邏輯。它也幫助我們建立編碼架構，用來分析學生的學習對話與 ENA 認知網絡結構。

簡單來說，4L 架構提供課堂結構，而自我調整學習理論提供心理機制。`,
  5: `現在我介紹 TALPer。

TALPer 是建立在因材網上的 AI 學習夥伴。在本研究中，TALPer 用來支持學生在比率與百分率單元中的數學解題。

TALPer 扮演三個主要角色。

第一，它提供即時引導。課前，學生在觀看因材網影片或完成學習任務時與 TALPer 互動。TALPer 會記錄學生的問題與學習軌跡。

第二，它提供驗證鷹架。課堂中，學生可以使用 TALPer 檢查推理、驗證解題步驟，並獲得逐步回饋。

第三，它提供策略提示。TALPer 不只是給答案，而是鼓勵學生監控理解、修正策略，並反思解題歷程。

在教學設計中，TALPer 被整合到三個學習階段。

在課前階段，學生透過影片與 TALPer 對話進行自學。

在課中階段，教師使用 TALPer 紀錄來引入關鍵概念。接著學生透過鷹架回饋進行共學，透過同儕比較進行互學，並在教師引導下進行統整。

在課後階段，學生完成習作練習以進行複習。

因此，TALPer 不是被視為孤立的聊天機器人，而是被嵌入一個結構化的教學架構中。`,
  6: `在進入研究問題之前，我想進一步說明 TALPer 在學生互動時實際如何運作。

TALPer 不是被設計成一般用途的聊天機器人。

相反地，它被設計為具有清楚教學邊界的學術學習夥伴。

第一，TALPer 會避免回答非學術問題或敏感政治議題。這很重要，因為在國小情境中，AI 系統應該讓學生聚焦於學習任務，並維持安全的教育環境。

第二，當學生提出問題後，TALPer 不會只是直接提供最後答案。

相反地，它會引導學生一步一步思考問題。

透過對話，TALPer 幫助學生逐漸理解相關概念、檢查自己的推理，並解決問題。

這樣的設計與自我調整學習的概念高度一致。

TALPer 的目的不是取代學習者思考，而是支持學習者的思考歷程。

例如，當學生遇到數學問題時，TALPer 可能引導學生辨識已知資訊、釐清問題目標、選擇可能策略、驗證每一個步驟，並反思答案是否合理。

因此，TALPer 的功能不只是產生答案。

它的教學角色更接近引導探究、推理支持與反思鷹架。

這也是為什麼我們將 TALPer 整合到 SRL 4L 架構中。

目標不只是把 AI 加進教室，而是把 AI 嵌入一個讓學生能規劃、監控、討論、驗證與反思的結構化學習循環。

這個區別很重要。

單純的聊天機器人可能產生片段式互動。但 TALPer 具有學術邊界與引導式對話功能，因此可以被嵌入自我調整學習架構，支持更有意義的學習循環。`,
  7: `基於這樣的設計，我們提出三個研究問題。

第一個問題聚焦於學習成效：

將 TALPer 整合到 SRL 4L 架構中，是否會比沒有 TALPer 支持的 SRL 4L 架構產生更好的學習成效？

第二個問題聚焦於學習歷程：

在 TALPer 支持的環境中，高能力與低能力學生所展現的 SRL 策略是否有顯著差異？

第三個問題聚焦於認知網絡結構：

以認識網絡分析，也就是 ENA 表徵時，高能力與低能力學生的認知網絡結構是否有顯著差異？

這三個問題形成一個分層設計：成效、歷程與結構。

第一個問題告訴我們 TALPer 是否提升學習。

第二個問題告訴我們學生如何使用 SRL 策略。

第三個問題告訴我們這些策略如何在學生的學習對話中形成結構性連結。`,
  8: `本研究採用準實驗設計，並進行兩週的教學介入。

參與者為臺灣一所公立國小的 44 位五年級學生。

實驗組有 21 位學生，控制組有 23 位學生。

兩組學生在兩週內都學習五堂比率與百分率課程。

實驗組接受 TALPer 支持的 SRL 4L 教學。

控制組接受相同的 SRL 4L 教學結構，但沒有使用 TALPer。

重要的是，兩組在前測上沒有顯著基準差異，p 值為 .376。

這表示兩組在介入前具有可比較性。

因此，兩組之間的主要差異就是 TALPer 的整合。

這樣的設計讓我們能在相同教學架構下，分離出 TALPer 的效果。`,
  9: `教學設計採用三階段結構：課前、課中與課後。

在課前階段，學生透過因材網教學影片進行自學。

在實驗組中，TALPer 會記錄學生的問題與學習軌跡。這些資料幫助教師在課程開始前了解學生原本的困難。

在課中階段，教師先根據學生的學習軌跡介紹關鍵概念。

接著學生進行共學，由 TALPer 提供鷹架式回饋與邏輯驗證。

學生也參與互學，比較不同小組的策略。

最後，教師引導全班統整想法並處理迷思概念。

在課後階段，學生完成習作練習以強化所學。

這裡的重點是，TALPer 不是只在學生失敗之後才使用。

它被用在整個學習循環中：課前、合作學習中，以及反思時。`,
  10: `為了分析學生的學習歷程，我們建立了一套包含兩大類別的編碼架構：後設認知與認知。

後設認知類別包含四個編碼：

目標設定、策略選擇、監控與評估，以及反思。

認知類別也包含四個編碼：

概念理解提問、概念理解解釋、程序知識提問，以及程序知識執行。

例如，當學生設定或調整學習目標時，我們編碼為 M.SG。

當學生詢問概念的意義或應用時，我們編碼為 C.CUA。

當學生進行計算或形成答案時，我們編碼為 C.PKE。

這些編碼讓我們不只分析學生說了什麼，也能分析他們的後設認知與認知行為如何連結。

接著，我們使用認識網絡分析，也就是 ENA，將這些編碼的共現關係映射成二維認知網絡表徵。

X 軸反映認知傾向的相對差異，Y 軸呈現結構複雜度與多樣性的差異。

這很重要，因為只看頻率並不足夠。

兩位學生可能使用相同數量的策略，但策略連結的結構可能非常不同。

ENA 幫助我們看見這些結構差異。`,
  11: `我們的分析採用多方法取向。

第一，我們使用成對樣本 t 檢定，檢驗各組從前測到後測是否進步。

第二，我們使用共變數分析，也就是 ANCOVA，以前測分數作為共變數，比較實驗組與控制組調整後的後測分數。

第三，我們使用 ENA，根據已編碼的對話事件檢驗認知網絡結構。

因此，分析邏輯同樣是成效、歷程與結構。

t 檢定與 ANCOVA 告訴我們學生是否進步，以及 TALPer 是否有效果。

編碼架構告訴我們學生使用了哪些 SRL 策略。

ENA 告訴我們這些策略如何在認知網絡中彼此連結。`,
  12: `現在我呈現研究結果。

針對 RQ1，結果顯示 TALPer 顯著提升了學習成效。

在控制前測分數後，ANCOVA 顯示顯著的組別效果：

F(1, 41) = 4.71，p = .036，eta squared = .114。

實驗組調整後的後測平均數為 85.49，控制組調整後的後測平均數為 76.56。

這表示接受 TALPer 支持的 SRL 4L 教學學生，表現顯著優於只接受 SRL 4L 架構的學生。

效果量為中等。

從實務角度來看，這個結果表示當 TALPer 被嵌入結構化的自我調整學習環境時，可以成為有效的認知鷹架。

然而，這只是故事的第一層。

下一個問題是：所有學生都是以相同方式受益嗎？`,
  13: `針對 RQ2，我們檢驗 TALPer 支持組內高能力與低能力學生的差異。

結果顯示，兩組學生在 SRL 策略樣貌上有顯著差異：

t(12.07) = 4.05，p < .001，Cohen's d = 1.83。

這是一個大的效果量，表示高能力與低能力學生之間的差異相當明顯。

高成就學生展現出更完整的調整循環。

他們會在目標設定、監控、概念提問、策略轉換與反思之間移動。

他們的對話更深入、更具多方向性，也更具迭代性。

相較之下，低成就學生更聚焦於程序執行。

他們常常選擇策略或詢問程序，但較少展現反思與概念性對話。

他們的互動傾向遵循線性模式：

提出問題、接收答案、執行程序。

這個發現很重要，因為兩組學生都可以使用 TALPer。

差異不在於工具可近性。

差異在於學生如何投入使用這個工具。

因此我們可以說，TALPer 創造了學習機會，但學生的調整覺察形塑了這些機會如何被使用。`,
  14: `RQ3 透過 ENA 進一步確認了這個差異。

ENA 視覺化結果顯示，高成就學生形成更整合且多方向的認知網絡。

他們的網絡包含目標設定、概念提問、程序執行與反思之間的強連結。

這表示高成就學生並不是只用 TALPer 取得答案。

他們用 TALPer 在規劃、探究、執行與反思之間移動。

然而，低成就學生呈現較片段且線性的網絡。

他們的網絡主要集中在策略選擇與程序知識提問。

他們的學習歷程比較像：

我該怎麼做？這題怎麼算？然後執行程序。

與概念理解和反思的連結較少。

這種結構差異是本研究的主要貢獻之一。

它顯示 AI 支持學習不應該只用測驗分數評估。

我們也需要檢驗學生學習歷程的結構。

簡單來說：

高成就學生把 TALPer 當作思考夥伴。

低成就學生較可能把 TALPer 當作程序捷徑。

這並不表示 TALPer 對低成就學生失敗了。

它表示低成就學生可能需要更強的鷹架，才能有效使用 TALPer。`,
  15: `根據這些結果，我們歸納出三個主要發現。

第一，TALPer 在 SRL 4L 架構中可以作為有效的認知鷹架。

即時且個人化的 AI 回饋促進較高層次的探索，並提升數學學習表現。

第二，高成就與低成就學生展現出不同的 SRL 樣貌。

高成就學生完成了較完整的調整循環，包含概念分析與反思。

低成就學生則仍然較聚焦於程序。

第三，ENA 揭示了對比明顯的認知網絡結構。

高成就學生形成整合且多方向的網絡，而低成就學生呈現片段、線性且以執行為中心的網絡。

綜合來看，這些發現表示 AI 在教育中的價值不只取決於 AI 系統本身，也取決於學生調整自己與 AI 互動的能力。

這是一個細微但重要的轉變。

問題不應該是：

AI 能不能教學生？

更好的問題是：

我們如何幫助學生以自我調整的方式與 AI 一起學習？`,
  16: `教學上的意涵是，提供 AI 使用權限並不足夠。

不能只因為工具可用，就假設 TALPer 一定有效。

它的效果與學習者的認知策略和自我調整策略密切相關。

這表示在 AI 支持的課堂中，教師角色變得更加重要。

我們提出教師角色的三個延伸。

第一，教師需要提供引導式提問。

學生應該學會如何向 TALPer 提出有助於學習的問題，而不只是尋求答案的問題。

第二，教師需要提供結構化反思。

特別是低成就學生，需要提示來幫助他們解釋為什麼某個方法有效、自己犯了什麼錯，以及如何修正策略。

第三，教師需要提供對話示範。

學生需要看到高品質的 TALPer 中介對話範例。

例如，與其問：

答案是什麼？

學生可以問：

這裡應該使用什麼概念？

你可以幫我檢查我的推理嗎？

或是：

這題有另一種解法嗎？

因此，數學教育中的 AI 素養不應只包含工具操作，也應包含問題設計、反思與策略性對話。`,
  17: `總結來說，本研究顯示 AI 學習夥伴在自我調整學習環境中具有差異化效果。

高能力學生能夠運用 TALPer 的動態回饋來深化概念。

他們形成多方向且迭代的認知網絡，並展現較完整的 SRL 調整循環。

相反地，低能力學生較傾向表層的程序依賴。

他們的網絡較片段，也較聚焦於執行。

因此，調整覺察成為關鍵的介入點。

本研究最主要的訊息是：

AI 學習夥伴不是萬靈丹。它的鷹架效果取決於學習者的調整覺察。

為了促進公平的 AI 教育，我們需要設計介入，幫助低成就學生從程序依賴走向概念理解與反思。`,
  18: `當然，本研究仍有幾項限制。

第一，樣本數有限。

本研究包含來自單一國小的 44 位學生，因此外部效度有限。

第二，學習領域限制在比率與百分率。

未來研究應檢驗 TALPer 是否能轉移到其他數學領域，例如代數、幾何或機率。

第三，介入時間只有兩週。

因此，本研究未觀察長期效果。

第四，編碼過程依賴 TALPer 自動編碼，因此仍需要人工驗證來強化分析信度。

未來研究應設計特定介入來建立調整覺察，特別是針對低成就學生。

也應檢驗 TALPer 整合的長期永續性，並將對話資料與其他多模態學習分析資料結合，例如行為與情意資料。`,
  19: `本研究有三項貢獻。

在理論上，它將 TALPer 整合到 SRL 4L 架構中，並從能力差異化觀點處理 GenAI-SRL 弔詭。

在方法上，它結合 SRL 編碼與 ENA，超越整體學習成效，轉向歷程與結構分析。

在實務上，它提供一個可在臺灣國小數學教學中使用的 TALPer 整合模式。

它也指出差異化支持的具體切入點，特別是針對可能以程序化且依賴方式使用 AI 的學生。`,
  20: `主要的理論與方法參考文獻包括 Zimmerman 的自我調整學習理論、Ho 的 4L 架構、Bergmann 與 Sams 的翻轉教室模式，以及 Shaffer 等人的認識網絡分析研究。

我們也奠基於近年關於生成式 AI、自我調整學習與 AI 學習夥伴的研究。

這些文獻幫助我們將本研究定位在教育 AI、自我調整學習、數學教育與學習分析的交會處。`,
  21: `最後，我想強調一個重點。

AI 在教育中的未來，不應被簡化為更快的答案或自動化教學。

更重要的目標，是設計能讓 AI 幫助學生成為更會反思、更有策略，也更能自我調整的學習者的學習環境。

TALPer 在這個方向上展現了潛力，但研究發現也提醒我們，AI 鷹架必須與教學鷹架搭配。

非常感謝各位聆聽。

歡迎各位提出問題與建議。`,
};

export const talperPresentationSlides = talperPresentationSlideDrafts.map((slide) => ({
  ...slide,
  scriptZh: talperPresentationScriptZh[slide.number] ?? '',
}));

export const getTalperFullScript = () =>
  talperPresentationSlides
    .map((slide) => `Slide ${slide.number} - ${slide.title}\n\n${slide.script}`)
    .join('\n\n');
