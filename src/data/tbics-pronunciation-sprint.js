export const sprintWordGroups = [
  {
    id: 'must-master',
    title: 'Level 1: Must master',
    description: 'These words appear repeatedly in the TBICS presentation.',
    words: [
      {
        id: 'fragmented',
        term: 'fragmented',
        slow: 'frag / men / tid',
        stress: 'FRAG',
        correctCue: 'FRAG-men-tid',
        avoid: ['frak-men-ted', 'frag-men-ded'],
        example: 'Low achievers showed a fragmented learning pathway.',
      },
      {
        id: 'pathway',
        term: 'pathway',
        slow: 'path / way',
        stress: 'PATH',
        correctCue: 'PATH-way',
        avoid: [],
        example: 'High achievers showed an integrated learning pathway.',
      },
      {
        id: 'integrated',
        term: 'integrated',
        slow: 'in / ti / gray / tid',
        stress: 'IN',
        correctCue: 'IN-ti-gray-tid',
        avoid: ['in-te-ger-ted'],
        example: 'High achievers showed an integrated learning pathway.',
      },
      {
        id: 'reflection',
        term: 'reflection',
        slow: 'ri / flek / shun',
        stress: 'FLEK',
        correctCue: 'ri-FLEK-shun',
        avoid: [],
        example: 'monitoring and reflection',
      },
      {
        id: 'monitoring',
        term: 'monitoring',
        slow: 'mon / i / ter / ing',
        stress: 'MON',
        correctCue: 'MON-i-ter-ing',
        avoid: [],
        example: 'goal setting, monitoring, and reflection',
      },
    ],
  },
  {
    id: 'japan-audience',
    title: 'Level 2: Avoid listener confusion',
    description: 'These words are easy to blur for Japanese conference listeners.',
    words: [
      {
        id: 'among',
        term: 'among',
        slow: 'a / mung',
        stress: 'MUNG',
        correctCue: 'uh-MUNG',
        avoid: ['a-mon'],
        example: 'the connection among cognitive processes',
      },
      {
        id: 'cognitive',
        term: 'cognitive',
        slow: 'kog / ni / tiv',
        stress: 'KOG',
        correctCue: 'KOG-ni-tiv',
        avoid: [],
        example: 'cognitive processes',
      },
      {
        id: 'processes',
        term: 'processes',
        slow: 'pro / sess / iz',
        stress: 'PRO',
        correctCue: 'PRO-sess-iz',
        avoid: [],
        example: 'cognitive processes',
      },
    ],
  },
];

export const sprintWords = sprintWordGroups.flatMap((group) =>
  group.words.map((word) => ({
    ...word,
    groupId: group.id,
    groupTitle: group.title,
    type: 'word',
  })),
);

export const sprintSentenceDrills = [
  {
    id: 'ena-connections',
    title: 'Sentence 1',
    text: 'ENA helped us see the connection among cognitive processes.',
    pauseText: 'ENA / helped us see / the connection / among cognitive processes.',
    watch: ['helped us', 'among', 'cognitive processes'],
  },
  {
    id: 'high-integrated-pathway',
    title: 'Sentence 2',
    text: 'High achievers showed an integrated learning pathway.',
    pauseText: 'High achievers / showed an integrated / learning pathway.',
    watch: ['integrated', 'learning pathway'],
  },
  {
    id: 'low-fragmented-pathway',
    title: 'Sentence 3',
    text: 'Low achievers showed a fragmented learning pathway.',
    pauseText: 'Low achievers / showed a fragmented / learning pathway.',
    watch: ['fragmented', 'learning pathway'],
  },
  {
    id: 'network-structures',
    title: 'Sentence 4',
    text: 'Their network structures were also different.',
    pauseText: 'Their network structures / were also different.',
    watch: ['network structures', 'also different'],
  },
  {
    id: 'closing-brings',
    title: 'Closing',
    text: 'This brings me to the end. Thank you very much for your attention.',
    pauseText: 'This brings me / to the end. // Thank you very much / for your attention.',
    watch: ['brings: keep the final s', 'attention'],
    avoid: ['This bring me to the end.'],
  },
];

export const dailySprintItems = [
  { id: 'daily-fragmented', type: 'word', text: 'fragmented', sourceId: 'fragmented' },
  { id: 'daily-integrated', type: 'word', text: 'integrated', sourceId: 'integrated' },
  { id: 'daily-pathway', type: 'word', text: 'pathway', sourceId: 'pathway' },
  { id: 'daily-monitoring', type: 'word', text: 'monitoring', sourceId: 'monitoring' },
  { id: 'daily-reflection', type: 'word', text: 'reflection', sourceId: 'reflection' },
  { id: 'daily-among', type: 'word', text: 'among', sourceId: 'among' },
  {
    id: 'daily-cognitive-processes',
    type: 'phrase',
    text: 'cognitive processes',
    sourceId: 'cognitive-processes',
  },
  {
    id: 'daily-high-pathway',
    type: 'sentence',
    text: 'High achievers showed an integrated learning pathway.',
    sourceId: 'high-integrated-pathway',
  },
  {
    id: 'daily-low-pathway',
    type: 'sentence',
    text: 'Low achievers showed a fragmented learning pathway.',
    sourceId: 'low-fragmented-pathway',
  },
  {
    id: 'daily-closing',
    type: 'sentence',
    text: 'This brings me to the end.',
    sourceId: 'closing-brings',
  },
];

export const diagnosticPrompts = [
  { id: 'stuck', label: 'Words I got stuck on' },
  { id: 'unclear', label: 'Words I could not hear clearly' },
  { id: 'tooFast', label: 'Places I spoke too fast' },
  { id: 'pauses', label: 'Places that need pauses' },
  { id: 'redo', label: 'Top 3 items for the next round' },
];

export const cleanSpeechText = (text = '') =>
  text
    .replace(/\/+/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.!?;:])/g, '$1')
    .trim();

export const getSprintSlowRate = (text = '') => {
  const letterCount = text.replace(/[^A-Za-z]/g, '').length;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  if (wordCount >= 6 || letterCount >= 36) {
    return 0.62;
  }

  if (wordCount >= 3 || letterCount >= 16) {
    return 0.58;
  }

  return 0.55;
};
