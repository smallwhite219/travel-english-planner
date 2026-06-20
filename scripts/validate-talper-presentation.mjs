import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
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

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const deckPdfPath = new URL(
  '../src/assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min.pdf',
  import.meta.url,
);

assert.equal(talperPresentationMeta.deckTitle, 'TBICS2026_TALPer_SRL4L_v14_20260617');
assert.equal(talperPresentationMeta.speaker, 'zong-en bai');
assert.equal(talperPresentationSlides.length, 16);
assert.ok(existsSync(deckPdfPath), 'expected TALPer slide PDF asset to exist');
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

const slide8 = talperPresentationSlides[7];
assert.match(slide8.script, /The process has \/ three parts\./);
assert.match(slide8.script, /Post class, \/ students do workbook exercises \/ for review\./);

const slide14 = talperPresentationSlides[13];
assert.equal(slide14.title, 'Discussion: Findings in Relation to Prior Literature');
assert.match(slide14.script, /I compare our findings \/ with prior literature/);
assert.match(slide14.script, /students need regulatory awareness \/ when they use TALPer/);

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
  assert.ok(!slide.scriptZh.includes('????'), `slide ${expectedNumber} Chinese script appears corrupted`);
  assert.equal(
    scriptZhParagraphs.length,
    scriptParagraphs.length,
    `slide ${expectedNumber} English and Chinese paragraph counts must match`,
  );
});

console.log(`Validated ${talperPresentationSlides.length} TALPer slides in ${projectRoot}`);
