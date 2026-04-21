export const qaBank = {
  "paper_title": "Effects of Integrating an AI Learning Companion into a Self-Regulated Learning 4L Framework on Elementary Mathematics Learning",
  "presenter": "Zong-En Bai",
  "key_terms": {
    "TALPer": "Taiwan Adaptive Learning Platform companion (AI learning companion for math)",
    "TALP": "Taiwan Adaptive Learning Platform (the platform TALPer is built on)",
    "SRL": "Self-Regulated Learning",
    "4L_framework": "Four Lesson Framework: self-learning, co-learning, mutual learning, teacher-directed learning",
    "ENA": "Epistemic Network Analysis — transforms coded dialogue into 2D cognitive network",
    "ANCOVA": "Analysis of Covariance — controls for pre-test baseline differences",
    "quasi_experimental": "Non-random group assignment; both groups from same school"
  },
  "key_results": {
    "sample": "44 fifth-grade students; experimental n=21, control n=23",
    "topic": "Ratios and Percentages, 5 lessons over 2 weeks",
    "pretest_equivalence": "p = .376, no significant baseline difference",
    "within_group_gains": "Control: Mgain=14.45; Experimental: Mgain=26.45, both p<.001",
    "ANCOVA_result": "F(1,41)=4.71, p=.036; experimental M=85.49 vs control M=76.56",
    "effect_size": "eta-squared = .114, medium effect (Cohen 1988)",
    "ENA_X_axis": "High-achievers M=0.07 vs Low-achievers M=-0.07, t(12.07)=4.05, p<.001, d=1.83",
    "ENA_fit": "All model fit indices exceeded .94"
  },
  "qa_scenarios": [
    {
      "id": "Q01",
      "difficulty": "common",
      "category": "methodology",
      "question": "Why did you choose ANCOVA instead of a simple t-test or ANOVA?",
      "model_answer": "We used ANCOVA because our design is quasi-experimental — students were not randomly assigned to groups. ANCOVA allows us to statistically control for pre-existing differences in mathematics ability by using pre-test scores as a covariate. This gives us a cleaner estimate of the treatment effect and strengthens the internal validity of the comparison.",
      "key_phrases": ["statistically control", "covariate", "internal validity", "quasi-experimental design"]
    },
    {
      "id": "Q02",
      "difficulty": "common",
      "category": "methodology",
      "question": "Your sample size is only 44. Isn't that too small to draw conclusions?",
      "model_answer": "That's a valid concern. The sample size is limited by the school setting — we worked with two intact classrooms. However, we did achieve a medium effect size of eta-squared .114, and the statistical significance held at p equals .036. We also used ENA as a process-level analysis, which provides qualitative depth beyond the quantitative outcomes. We acknowledge this as a limitation and call for replication with larger samples in future research.",
      "key_phrases": ["intact classrooms", "effect size", "limitation", "replication", "process-level analysis"]
    },
    {
      "id": "Q03",
      "difficulty": "common",
      "category": "results",
      "question": "Could the improvement in the experimental group simply be a novelty effect — students performed better just because they were using something new?",
      "model_answer": "That's a reasonable alternative explanation. We cannot fully rule out novelty effects given our design. However, two points are worth noting. First, the ENA results show systematic differences in cognitive strategy patterns between high and low achievers — not just performance gaps — which suggests the effect goes beyond surface-level engagement. Second, the SRL process analysis revealed meaningful qualitative differences in how students regulated their learning, which is harder to explain through novelty alone. But we agree this is a limitation that longitudinal studies could address.",
      "key_phrases": ["novelty effect", "alternative explanation", "systematic differences", "cognitive strategy", "longitudinal studies"]
    },
    {
      "id": "Q04",
      "difficulty": "common",
      "category": "results",
      "question": "What exactly does TALPer do? How is it different from a regular chatbot like ChatGPT?",
      "model_answer": "TALPer is purpose-built for elementary mathematics problem solving within the Taiwan Adaptive Learning Platform. Unlike general-purpose chatbots, TALPer is integrated into the instructional workflow — it tracks students' learning traces, records their questions, and provides scaffolded feedback aligned with the specific lesson objectives. Teachers can also access TALPer's records to inform their instructional decisions. So the key difference is tight integration with the curriculum and learning management system, rather than open-ended dialogue.",
      "key_phrases": ["purpose-built", "learning traces", "scaffolded feedback", "instructional workflow", "curriculum integration"]
    },
    {
      "id": "Q05",
      "difficulty": "moderate",
      "category": "methodology",
      "question": "How did you define 'high-achieving' and 'low-achieving' students for the ENA analysis?",
      "model_answer": "We used post-test scores within the experimental group to classify students. The top and bottom groups were identified based on their performance, resulting in 10 high-achieving and 11 low-achieving students for the ENA comparison. This within-group comparison allows us to examine how TALPer support differentially benefited students of varying ability levels.",
      "key_phrases": ["post-test scores", "within-group comparison", "differentially benefited", "ability levels"]
    },
    {
      "id": "Q06",
      "difficulty": "moderate",
      "category": "methodology",
      "question": "Can you explain how Epistemic Network Analysis works and why you chose it over other methods?",
      "model_answer": "ENA transforms sequential coded dialogue events into a quantitative network model. Rather than simply counting frequencies of each SRL strategy, ENA captures co-occurrence patterns — which strategies tend to appear together within a conversational window. This gives us a richer picture of cognitive structure. We chose ENA over frequency analysis precisely because we wanted to see not just what strategies students used, but how those strategies were connected — the network topology, so to speak. The resulting 2D visualization also makes group comparisons very intuitive.",
      "key_phrases": ["co-occurrence patterns", "conversational window", "network topology", "cognitive structure", "frequency analysis limitation"]
    },
    {
      "id": "Q07",
      "difficulty": "moderate",
      "category": "implications",
      "question": "What should teachers specifically do differently based on your findings?",
      "model_answer": "Our findings suggest that simply providing TALPer access is not sufficient — especially for low-ability students. Teachers should actively scaffold students' strategic engagement with the tool. Concretely, this might include guided questioning prompts before students interact with TALPer, structured reflection activities after AI interactions, and modeling productive dialogue — showing students how to move beyond procedural questions toward conceptual inquiry. In other words, the teacher's role shifts from content deliverer to metacognitive coach.",
      "key_phrases": ["scaffold strategic engagement", "guided questioning", "structured reflection", "modeling productive dialogue", "metacognitive coach"]
    },
    {
      "id": "Q08",
      "difficulty": "hard",
      "category": "methodology",
      "question": "Your coding of SRL strategies — how did you establish inter-rater reliability?",
      "model_answer": "That's an important methodological question. The coding framework was based on established SRL categories encompassing metacognition and cognition dimensions. In our study, the coding process involved trained researchers applying the framework to the dialogue transcripts. For reliability, we followed standard practice for ENA-based studies — though I should note that detailed inter-rater reliability statistics were part of our methodology. I'd be happy to share the full methodology section with you after the session if you'd like more detail on that specific aspect.",
      "key_phrases": ["inter-rater reliability", "established categories", "trained researchers", "coding framework", "full methodology"]
    },
    {
      "id": "Q09",
      "difficulty": "hard",
      "category": "generalizability",
      "question": "Your study was limited to ratios and percentages in Taiwan. How generalizable are these findings?",
      "model_answer": "You raise a fair point about ecological validity. The specific content — ratios and percentages — was chosen because it represents a conceptually rich unit that requires both procedural and conceptual understanding, making it well-suited for examining SRL strategy variation. However, we acknowledge that the cultural context of Taiwan's educational system, and the specific design of the SRL 4L framework, may limit direct generalizability to other contexts. We call for future research to replicate the study across different mathematical domains, grade levels, and educational systems.",
      "key_phrases": ["ecological validity", "conceptually rich", "cultural context", "direct generalizability", "future replication"]
    },
    {
      "id": "Q10",
      "difficulty": "common",
      "category": "clarification",
      "question": "I didn't quite catch what ENA stands for. Could you explain that again?",
      "model_answer": "Of course. ENA stands for Epistemic Network Analysis. It's an analytical method that models the structure of relationships within coded interaction data. In our case, we used it to visualize and compare the cognitive networks — the connections between different self-regulated learning strategies — that students formed during their dialogue with TALPer.",
      "key_phrases": ["Epistemic Network Analysis", "analytical method", "cognitive networks", "self-regulated learning strategies"]
    }
  ],
  "emergency_qa_phrases": [
    "Could you please repeat the question? I want to make sure I understand correctly.",
    "That's a very insightful question. Let me take a moment to think about that.",
    "I appreciate that question — it touches on one of the limitations we acknowledge in our study.",
    "That's beyond the scope of this study, but it's a great direction for future research.",
    "I'm not entirely certain about that specific point. I'd be happy to follow up with you after the session.",
    "Could you clarify what you mean by [X]? I want to make sure I address your question accurately."
  ]
};
