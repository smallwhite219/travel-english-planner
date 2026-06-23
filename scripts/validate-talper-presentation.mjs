import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  talperPresentationMeta,
  talperPresentationSlides,
} from '../src/data/talper-presentation.js';
import {
  getSlowWordSlowRate,
  slowWordPracticeGroups,
  slowWordPracticeWords,
} from '../src/data/slow-word-practice.js';
import { sprintWords } from '../src/data/tbics-pronunciation-sprint.js';
import {
  getSpeechStressEntry,
  speechPronunciationTerms,
} from '../src/data/speech-pronunciation.js';
import { termsFlashcards } from '../src/data/terms-flashcards.js';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const deckPdfPath = new URL(
  '../src/assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min.pdf',
  import.meta.url,
);
const presentCoachSource = readFileSync(new URL('../src/pages/PresentCoach.jsx', import.meta.url), 'utf8');
const termsDrillSource = readFileSync(new URL('../src/pages/TermsDrill.jsx', import.meta.url), 'utf8');

assert.equal(talperPresentationMeta.deckTitle, 'TBICS2026_TALPer_SRL4L_v14_20260617');
assert.equal(talperPresentationMeta.speaker, 'zong-en bai');
assert.equal(talperPresentationSlides.length, 16);
assert.ok(existsSync(deckPdfPath), 'expected TALPer slide PDF asset to exist');
assert.match(
  presentCoachSource,
  /const loopAllSlides = \(\) => playSlides\(\{ loop: true \}\);/,
  'speech controls must keep a whole-deck loop action',
);
assert.match(presentCoachSource, /playbackMode === 'all-loop'/, 'speech status must expose all-loop playback mode');
assert.match(presentCoachSource, /Loop All Slides/, 'speech controls must label the whole-deck loop clearly');
assert.equal(slowWordPracticeGroups.length, 5);
assert.equal(slowWordPracticeWords.length, 126);
assert.equal(new Set(slowWordPracticeWords.map((word) => word.id)).size, slowWordPracticeWords.length);
assert.ok(
  slowWordPracticeWords.some((word) => word.term === 'Epistemic' && word.slow.includes('STEE')),
  'slow-word list must include Epistemic pronunciation guidance',
);
assert.ok(
  slowWordPracticeWords.some((word) => word.term === 'Structurally organized'),
  'slow-word list must include discussion vocabulary',
);
assert.ok(
  slowWordPracticeWords.some(
    (word) => word.term === 'Fourteen point four five' && word.meaningZh === '十四點四五',
  ),
  'slow-word list must include Chinese meaning for Fourteen point four five',
);
assert.ok(
  slowWordPracticeWords.some((word) => word.term === 'Epistemic' && word.meaningZh.includes('知識論')),
  'slow-word list must include Chinese meaning for Epistemic',
);
assert.ok(
  slowWordPracticeWords.some((word) => word.term === 'TALPer' && word.meaningZh.includes('AI 學習夥伴')),
  'slow-word list must include Chinese meaning for TALPer',
);
assert.equal(getSlowWordSlowRate('TALPer'), 0.65);
assert.equal(getSlowWordSlowRate('Metacognition'), 0.6);
assert.equal(getSlowWordSlowRate('Self-regulated learning'), 0.55);
assert.equal(getSlowWordSlowRate('Distinct cognitive network structures'), 0.5);

const companionWord = sprintWords.find((word) => word.id === 'companion');
const introduceWord = sprintWords.find((word) => word.id === 'introduce');
assert.ok(companionWord, 'sprint word companion format must exist');
assert.equal(companionWord.slow, 'com-PAN-ion');
assert.equal(companionWord.stress, 'PAN');
assert.equal(companionWord.meaningZh, '\u5925\u4f34');
assert.equal(companionWord.example, 'TALPer is a companion.');
assert.ok(introduceWord, 'sprint word introduce format must exist');
assert.equal(introduceWord.slow, 'in-tro-DUCE');
assert.equal(introduceWord.stress, 'DUCE');
assert.equal(introduceWord.meaningZh, '\u4ecb\u7d39\uff08\u767c\u8868\u7528\u8a9e \ud83d\udd11\uff09');
assert.equal(introduceWord.example, 'Let me introduce TALPer.');

assert.ok(getSpeechStressEntry('companion'), 'speech stress lookup must annotate companion');
assert.equal(getSpeechStressEntry('introduce')?.stress, 'DUCE');
assert.ok(
  speechPronunciationTerms.some((word) => word.term === 'companion' && word.section === 'Latest Speech Core Words'),
  'Terms must include latest speech companion word',
);
assert.ok(
  speechPronunciationTerms.some((word) => word.term === 'introduce' && word.practice_sentence.includes('introduce')),
  'Terms must include latest speech introduce word with script context',
);
assert.match(presentCoachSource, /script-word-stress-syllable/, 'Speech script must color stressed syllables inline');
assert.equal(termsFlashcards.length, 75, 'Terms flashcards must include the user-provided merged word list');
assert.ok(
  termsFlashcards.some((term) => term.word === 'integrated' && term.pronunciation === 'IN-te-gra-ted'),
  'Terms flashcards must include high-frequency pronunciation cards',
);
assert.ok(
  termsFlashcards.some((term) => term.word === 'elementary' && term.translation.includes('\u570b\u5c0f\u6578\u5b78')),
  'Terms flashcards must include the second batch cards with Chinese translations',
);
assert.match(termsDrillSource, /Terms Flashcards/, 'Terms page must render the flashcard interface');
assert.match(termsDrillSource, /setIsFlipped/, 'Terms cards must flip between front and back');
assert.match(termsDrillSource, /getRandomIndex/, 'Terms page must expose random practice');
assert.match(termsDrillSource, /getSpeechSyllableText/, 'Terms playback must include syllable practice');

sprintWords.forEach((word) => {
  assert.ok(word.slow?.trim(), `sprint word ${word.id} syllables are required`);
  assert.ok(word.stress?.trim(), `sprint word ${word.id} stress is required`);
  assert.ok(word.meaningZh?.trim(), `sprint word ${word.id} Chinese meaning is required`);
  assert.ok(word.example?.trim(), `sprint word ${word.id} example is required`);
});


slowWordPracticeWords.forEach((word) => {
  assert.ok(word.term?.trim(), `slow-word ${word.id} term is required`);
  assert.ok(word.slow?.trim(), `slow-word ${word.id} slow pronunciation is required`);
  assert.ok(word.meaningZh?.trim(), `slow-word ${word.id} Chinese meaning is required`);
  assert.ok(
    /[\u3400-\u9fff]/u.test(word.meaningZh),
    `slow-word ${word.id} Chinese meaning must contain Han characters`,
  );
  assert.ok(word.groupTitle?.trim(), `slow-word ${word.id} group title is required`);
});

const slide6 = talperPresentationSlides[5];
assert.match(slide6.script, /triangle congruence and similarity/);
assert.match(slide6.script, /short paragraph/);
assert.match(slide6.scriptZh, /三角形的全等與相似/);
assert.match(slide6.scriptZh, /簡短段落/);

const slide8 = talperPresentationSlides[7];
assert.match(slide8.script, /The process has \/ three parts\./);
assert.match(slide8.script, /Post class, \/ students do workbook exercises \/ for review\./);

const slide10 = talperPresentationSlides[9];
assert.match(slide10.script, /Goal setting, \/ selecting strategies, \/ monitoring/);

const slide12 = talperPresentationSlides[11];
assert.match(slide12.script, /They also showed \/ selecting strategies \/ again and again/);

assert.ok(
  talperPresentationSlides.every(
    (slide) =>
      !slide.script.includes('strategy adjustment') &&
      !slide.narrationScript.includes('strategy adjustment') &&
      !slide.scriptZh.includes('\u7b56\u7565\u8abf\u6574'),
  ),
  'speech script terminology must use selecting strategies instead of strategy adjustment',
);

const slide9 = talperPresentationSlides[8];
assert.match(slide9.script, /The experimental group \/ had twenty-one students/);

const slide11 = talperPresentationSlides[10];
assert.match(slide11.script, /For the experimental group, \/ it was eighty-five point four nine/);

assert.ok(
  talperPresentationSlides.every(
    (slide) =>
      !slide.script.includes('TALPer group') &&
      !slide.narrationScript.includes('TALPer group') &&
      !slide.scriptZh.includes('TALPer \u7d44'),
  ),
  'speech script terminology must use experimental group instead of TALPer group',
);

const slide14 = talperPresentationSlides[13];
assert.equal(slide14.title, 'Discussion: Findings in Relation to Prior Literature');
assert.match(slide14.script, /I compare our findings \/ with prior literature/);
assert.match(slide14.script, /requires regulatory awareness \/ and active use/);
assert.match(slide14.script, /students need to regulate \/ how they use TALPer/);

const slide15 = talperPresentationSlides[14];
assert.equal(slide15.title, 'Discussion: ENA, Learning Pathways, and Cognitive Network Structures');
assert.match(slide15.script, /learning pathway \/ shown by E-N-A/);
assert.match(slide15.script, /how their learning pathways were organized/);

const splitParagraphs = (text = '') =>
  text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

talperPresentationSlides.forEach((slide, index) => {
  const expectedNumber = index + 1;
  const scriptParagraphs = splitParagraphs(slide.script);
  const scriptZhParagraphs = splitParagraphs(slide.scriptZh);

  assert.equal(slide.number, expectedNumber, `slide ${expectedNumber} number must be contiguous`);
  assert.equal(slide.pdfPage, expectedNumber, `slide ${expectedNumber} must map to same PDF page`);
  assert.ok(slide.title?.length > 0, `slide ${expectedNumber} title is required`);
  assert.ok(slide.section?.length > 0, `slide ${expectedNumber} section is required`);
  assert.ok(scriptParagraphs.length > 0, `slide ${expectedNumber} script must have paragraphs`);
  assert.ok(slide.script?.split(/\s+/).length > 8, `slide ${expectedNumber} script is unexpectedly short`);
  assert.ok(slide.scriptZh?.length > 20, `slide ${expectedNumber} Chinese translation is required`);
  assert.ok(
    slide.narrationScript?.split(/\s+/).length > 8,
    `slide ${expectedNumber} narration script is unexpectedly short`,
  );
  assert.ok(
    /[\u3400-\u9fff]/u.test(slide.scriptZh),
    `slide ${expectedNumber} Chinese translation must contain Han characters`,
  );
  assert.ok(!slide.script.includes('**'), `slide ${expectedNumber} script must not leak Markdown bold markers`);
  assert.ok(!slide.scriptZh.includes('**'), `slide ${expectedNumber} Chinese script must not leak Markdown bold markers`);
  assert.ok(
    !slide.narrationScript.includes('**') &&
      !slide.narrationScript.includes('嚚') &&
      !slide.narrationScript.includes('\uFFFD'),
    `slide ${expectedNumber} narration script must be clean for TTS`,
  );
  assert.ok(!slide.script.includes('\\\\n'), `slide ${expectedNumber} script must not contain literal newline escapes`);
  assert.ok(!slide.scriptZh.includes('\\\\n'), `slide ${expectedNumber} Chinese script must not contain literal newline escapes`);
  assert.ok(!slide.scriptZh.includes('\u7b56\u7565\u8abf\u6574'), `slide ${expectedNumber} Chinese script appears corrupted`);
  assert.equal(
    scriptZhParagraphs.length,
    scriptParagraphs.length,
    `slide ${expectedNumber} English and Chinese paragraph counts must match`,
  );
});

console.log(`Validated ${talperPresentationSlides.length} TALPer slides in ${projectRoot}`);
