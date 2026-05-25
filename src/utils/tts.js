// Web Speech API wrapper for Text-to-Speech
export const speakText = (text, options = {}) => {
  return new Promise((resolve) => {
    const normalizedOptions = typeof options === 'number' ? { rate: options } : options;
    const rate = normalizedOptions.rate ?? 0.9;
    const lang = normalizedOptions.lang ?? 'en-US';

    // If speaking, cancel
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate; // Slightly slower for language learners

    // Find a matching voice if available
    const voices = window.speechSynthesis.getVoices();
    const languagePrefix = lang.split('-')[0];
    const preferredVoice =
      voices.find(v => v.lang === lang && v.name.includes('Google')) ||
      voices.find(v => v.lang === lang) ||
      voices.find(v => v.lang?.startsWith(languagePrefix));
    
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    utterance.onend = () => {
      resolve();
    };
    
    window.speechSynthesis.speak(utterance);
  });
};
