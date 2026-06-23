const getSpeechSynthesis = () => {
  if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
    throw new Error('Web Speech API is not available in this browser.');
  }

  return window.speechSynthesis;
};

const isEnglishVoice = (voice) => voice.lang?.toLowerCase().startsWith('en');

const pickDefaultVoice = (voices, lang, strictLang = false) => {
  const languagePrefix = lang.split('-')[0];
  const exactVoice =
    voices.find((voice) => voice.lang === lang && voice.name.includes('Google')) ||
    voices.find((voice) => voice.lang === lang);

  if (strictLang || exactVoice) {
    return exactVoice;
  }

  return (
    voices.find((voice) => voice.lang?.startsWith(languagePrefix))
  );
};

export const getEnglishVoices = () => {
  try {
    return getSpeechSynthesis()
      .getVoices()
      .filter(isEnglishVoice)
      .sort((a, b) => {
        const defaultWeight = Number(Boolean(b.default)) - Number(Boolean(a.default));
        if (defaultWeight !== 0) {
          return defaultWeight;
        }

        return a.name.localeCompare(b.name);
      });
  } catch {
    return [];
  }
};

export const subscribeToVoiceChanges = (callback) => {
  if (!window.speechSynthesis) {
    return () => {};
  }

  window.speechSynthesis.addEventListener('voiceschanged', callback);
  return () => {
    window.speechSynthesis.removeEventListener('voiceschanged', callback);
  };
};

// Web Speech API wrapper for Text-to-Speech
export const speakText = (text, options = {}) => {
  return new Promise((resolve, reject) => {
    let speechSynthesis;

    try {
      speechSynthesis = getSpeechSynthesis();
    } catch (error) {
      reject(error);
      return;
    }

    const normalizedOptions = typeof options === 'number' ? { rate: options } : options;
    const rate = normalizedOptions.rate ?? 0.9;
    const lang = normalizedOptions.lang ?? 'en-US';
    const voiceURI = normalizedOptions.voiceURI;
    const strictLang = normalizedOptions.strictLang ?? false;

    // If speaking, cancel
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate; // Slightly slower for language learners

    const voices = speechSynthesis.getVoices();
    const preferredVoice =
      voices.find((voice) => voice.voiceURI === voiceURI && isEnglishVoice(voice)) ||
      pickDefaultVoice(voices, lang, strictLang);
    
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
    
    speechSynthesis.speak(utterance);
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
