import { useState } from 'react';
import { detectGender } from '../utils/genderDetection';

const SentenceDisplay = ({ sentence }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const renderGermanText = () => {
    return sentence.german.map((part, index) => {
      if (part.case) {
        const gender = part.gender || detectGender(part.text);
        const genderClass = gender ? `gender-${gender}` : '';
        return (
          <span key={index} className={`${part.case} ${genderClass}`}>
            {part.text}
          </span>
        );
      }
      return <span key={index}>{part.text}</span>;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="text-2xl text-center mb-6 text-gray-800 dark:text-white leading-relaxed">
        {renderGermanText()}
      </div>
      
      <div className="flex justify-center gap-4 mb-4">
        <button 
          onClick={() => setShowTranslation(!showTranslation)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {showTranslation ? 'Hide' : 'Show'} Translation
        </button>
        <button 
          onClick={() => setShowExplanation(!showExplanation)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          {showExplanation ? 'Hide' : 'Show'} Cases
        </button>
      </div>

      {showTranslation && (
        <div className="text-center text-gray-600 dark:text-gray-300 italic text-lg mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          {sentence.english}
        </div>
      )}

      {showExplanation && (
        <div className="text-left text-gray-700 dark:text-gray-200 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-400">
          <strong>Case Analysis:</strong> {sentence.explanation}
        </div>
      )}
    </div>
  );
};

export default SentenceDisplay;