import React, { useState } from 'react';
import WordDeconstructionVisualizer from '../components/WordDeconstructionVisualizer';
import WordFamilyGraph from '../components/WordFamilyGraph';
import { MorphologyEngine } from '../utils/morphologyEngine';
import { fetchMorphologyFromLLM } from '../services/llmService';
import { prefixes, suffixes } from '../data/morphology-data';

const MorphologyPage = () => {
  const [query, setQuery] = useState('');
  const [parsedParts, setParsedParts] = useState(null);
  const [familyData, setFamilyData] = useState(null);
  const [error, setError] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setError('');
    let parts = MorphologyEngine.parseWord(query);
    let rootText = '';
    
    if (parts.length === 1 && parts[0].type === 'unknown') {
      setIsGenerating(true);
      setError('Dynamically parsing word using AI...');
      
      const wordLower = query.trim().toLowerCase();
      const llmResult = await fetchMorphologyFromLLM(wordLower);
      setIsGenerating(false);

      if (llmResult && llmResult.breakdown && llmResult.breakdown.length > 0) {
        parts = llmResult.breakdown.map(partStr => {
          let type = 'root';
          let meaning = '';
          if (prefixes[partStr]) {
            type = 'prefix';
            meaning = prefixes[partStr].meaning;
          } else if (suffixes[partStr]) {
            type = 'suffix';
            meaning = suffixes[partStr].meaning;
          } else {
            type = 'root';
            meaning = llmResult.rootMeaning || 'Root part';
            rootText = partStr;
          }
          return { text: partStr, type, meaning };
        });
        setError('');
      } else {
        setParsedParts(null);
        setFamilyData(null);
        setError(`Sorry, "${query}" is not in our morphology database yet, and AI parsing failed. Try "predict" or "invisible".`);
        return;
      }
    } else {
      const rootPart = parts.find(p => p.type === 'root');
      if (rootPart) rootText = rootPart.text;
    }

    setParsedParts(parts);
    
    if (rootText) {
      const family = MorphologyEngine.getWordFamily(rootText);
      setFamilyData(family && family.words && family.words.length > 0 ? family : null);
    } else {
      const directFamily = MorphologyEngine.getWordFamily(query);
      setFamilyData(directFamily && directFamily.words && directFamily.words.length > 0 ? directFamily : null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-4 pb-24">
      <div className="max-w-4xl w-full mx-auto space-y-8 mt-6">
        
        {/* Header Area */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            Word Morphology
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            Discover the building blocks of English. Search a word to break it down into prefixes, roots, and suffixes, and explore its family tree.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative w-full max-w-xl mx-auto">
          <div className="relative flex items-center bg-gray-800/80 rounded-full border-2 border-gray-700/80 focus-within:border-blue-500/50 shadow-lg overflow-hidden transition-colors duration-300 backdrop-blur-md">
            <svg className="w-6 h-6 text-gray-400 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'unbelievable', 'predict', or 'vision'..."
              className="w-full bg-transparent border-none py-4 px-4 text-gray-200 focus:outline-none placeholder-gray-500 text-lg"
            />
            <button 
              type="submit"
              disabled={isGenerating}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full mr-1 transition-colors duration-300 disabled:opacity-50"
            >
              {isGenerating ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
          {error && <p className={`text-center mt-3 text-sm ${isGenerating ? 'text-blue-400' : 'text-red-400'}`}>{error}</p>}
        </form>

        {/* Results Area */}
        <div className="space-y-8 animate-fade-in-up">
          {parsedParts && (
            <WordDeconstructionVisualizer parts={parsedParts} />
          )}

          {familyData && (
            <WordFamilyGraph familyData={familyData} />
          )}
        </div>

      </div>
    </div>
  );
};

export default MorphologyPage;
