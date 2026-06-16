import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  talperPresentationMeta,
  talperPresentationSlides,
} from '../src/data/talper-presentation.js';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const deckPdfPath = new URL(
  '../src/assets/talper-presentation/TBICS2026_TALPer_SRL4L_15min.pdf',
  import.meta.url,
);

assert.equal(talperPresentationMeta.deckTitle, 'TBICS2026_TALPer_SRL4L_v13_20260616');
assert.equal(talperPresentationSlides.length, 15);
assert.ok(existsSync(deckPdfPath), 'expected TALPer slide PDF asset to exist');

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
  assert.ok(slide.script?.split(/\s+/).length > 20, `slide ${expectedNumber} script is unexpectedly short`);
  assert.ok(slide.scriptZh?.length > 20, `slide ${expectedNumber} Chinese translation is required`);
  assert.ok(
    slide.narrationScript?.split(/\s+/).length > 20,
    `slide ${expectedNumber} narration script is unexpectedly short`,
  );
  assert.ok(
    /[\u3400-\u9fff]/u.test(slide.scriptZh),
    `slide ${expectedNumber} Chinese translation must contain Han characters`,
  );
  assert.ok(!slide.script.includes('**'), `slide ${expectedNumber} script must not leak Markdown bold markers`);
  assert.ok(!slide.scriptZh.includes('**'), `slide ${expectedNumber} Chinese script must not leak Markdown bold markers`);
  assert.ok(
    !slide.narrationScript.includes('**') && !/[｜/]{1,3}/u.test(slide.narrationScript),
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
