// Web Speech API wrapper for Text-to-Speech
export const speakText = (text, rate = 0.9) => {
  return new Promise((resolve) => {
    // If speaking, cancel
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = rate; // Slightly slower for language learners

    // Find a good Google/US voice if available
    const voices = window.speechSynthesis.getVoices();
    const usVoice = voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) || 
                    voices.find(v => v.lang === 'en-US');
    
    if (usVoice) {
      utterance.voice = usVoice;
    }

    utterance.onend = () => {
      resolve();
    };
    
    window.speechSynthesis.speak(utterance);
  });
};
