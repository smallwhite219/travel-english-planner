// Web Speech API wrapper for Text-to-Speech
export const speakText = (text, options = {}) => {
  return new Promise((resolve, reject) => {
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
      reject(new Error('Web Speech API is not available in this browser.'));
      return;
    }

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

    utterance.onerror = (event) => {
      if (event.error === 'interrupted' || event.error === 'canceled') {
        resolve();
        return;
      }

      reject(event);
    };
    
    window.speechSynthesis.speak(utterance);
  });
};

export const pauseSpeech = () => {
  if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
  }
};

export const resumeSpeech = () => {
  if (window.speechSynthesis?.paused) {
    window.speechSynthesis.resume();
  }
};

export const cancelSpeech = () => {
  if (window.speechSynthesis?.speaking || window.speechSynthesis?.paused) {
    window.speechSynthesis.cancel();
  }
};
