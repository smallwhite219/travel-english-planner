export const talperPresentationMeta = {
  title:
    'Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning',
  deckTitle: 'TALPer_SRL_4L_20min',
  totalDuration: '20 min',
  speaker: 'Zong-En Bai',
  sourceUrl:
    'https://docs.google.com/presentation/d/1H4yijZLyyA36WICeayta9nj65JxiNVicLSZmkyvgC70',
};

export const talperPresentationSlides = [
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

export const getTalperFullScript = () =>
  talperPresentationSlides
    .map((slide) => `Slide ${slide.number} - ${slide.title}\n\n${slide.script}`)
    .join('\n\n');
