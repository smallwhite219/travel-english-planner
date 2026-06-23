import { sprintWords } from './tbics-pronunciation-sprint.js';
import { talperPresentationSlides } from './talper-presentation.js';

const normalizeTermKey = (value = '') =>
  value
    .toLowerCase()
    .replace(/[\u2019]/g, "'")
    .replace(/[^a-z0-9'-]+/g, ' ')
    .trim();

const getTermParts = (term = '') =>
  normalizeTermKey(term)
    .split(/\s+/)
    .filter(Boolean);

const scriptSentences = talperPresentationSlides.flatMap((slide) => {
  const sentences =
    slide.narrationScript
      ?.replace(/\s+/g, ' ')
      .match(/[^.!?]+[.!?]+|[^.!?]+$/g)
      ?.map((sentence) => sentence.trim())
      .filter(Boolean) ?? [];

  return sentences.map((sentence) => ({
    slideNumber: slide.number,
    slideTitle: slide.title,
    sentence,
    normalized: normalizeTermKey(sentence),
  }));
});

const appearsInScript = (term) => {
  const parts = getTermParts(term);

  if (parts.length === 0) {
    return false;
  }

  return scriptSentences.some(({ normalized }) => parts.every((part) => normalized.includes(part)));
};

const findScriptSentence = (term, fallback = '') => {
  const parts = getTermParts(term);
  const match = scriptSentences.find(({ normalized }) => parts.every((part) => normalized.includes(part)));

  return {
    slideNumber: match?.slideNumber ?? null,
    slideTitle: match?.slideTitle ?? null,
    sentence: match?.sentence ?? fallback,
  };
};

export const speechPronunciationTerms = sprintWords
  .filter((word) => appearsInScript(word.term))
  .map((word) => {
    const scriptMatch = findScriptSentence(word.term, word.example);

    return {
      id: `speech-${word.id}`,
      term: word.term,
      translation: word.meaningZh,
      pronunciation: word.correctCue,
      syllables: word.slow,
      stress: word.stress,
      practice_sentence: scriptMatch.sentence,
      practiceCue: 'listen-read -> mark stress -> shadow 3x -> record once',
      learningSteps: [
        'Listen-read once for meaning.',
        'Say the stressed syllable clearly.',
        'Shadow the full script line three times.',
        'Record once and check pauses.',
      ],
      section: 'Latest Speech Core Words',
      slide: scriptMatch.slideNumber,
      slideTitle: scriptMatch.slideTitle,
      source: 'speech-script',
      itemType: 'word',
      groupTitle: word.groupTitle,
    };
  });

const stressEntryPairs = speechPronunciationTerms.flatMap((entry) => {
  const parts = getTermParts(entry.term);

  if (parts.length === 1) {
    return [[parts[0], entry]];
  }

  return parts
    .filter((part) => part.length > 3)
    .map((part) => [part, entry]);
});

const stressEntryByToken = new Map(stressEntryPairs);

export const getSpeechStressEntry = (token = '') => stressEntryByToken.get(normalizeTermKey(token));
