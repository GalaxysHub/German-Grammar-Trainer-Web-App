import { useState } from 'react';
import { detectGender } from '../utils/genderDetection';

const QuizMode = ({ sentence, onNext }) => {
  const [selectedCases, setSelectedCases] = useState({});
  const [showResult, setShowResult] = useState(false);

  const wordsWithCases = sentence.german.filter(part => part.case);

  const handleCaseSelection = (wordIndex, selectedCase) => {
    setSelectedCases(prev => ({
      ...prev,
      [wordIndex]: selectedCase
    }));
  };

  const checkAnswers = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedCases({});
    setShowResult(false);
  };

  const getScore = () => {
    let correct = 0;
    wordsWithCases.forEach((word, index) => {
      if (selectedCases[index] === word.case) {
        correct++;
      }
    });
    return { correct, total: wordsWithCases.length };
  };

  const renderQuizSentence = () => {
    let wordIndex = 0;
    return sentence.german.map((part, index) => {
      if (part.case) {
        const currentWordIndex = wordIndex++;
        const isCorrect = showResult && selectedCases[currentWordIndex] === part.case;
        const isIncorrect = showResult && selectedCases[currentWordIndex] && selectedCases[currentWordIndex] !== part.case;
        
        const gender = part.gender || detectGender(part.text);
        const genderClass = gender ? `gender-${gender}` : '';
        
        return (
          <span key={index} className="relative inline-block mx-1">
            <span 
              className={`px-2 py-1 rounded transition-colors ${genderClass} ${
                showResult 
                  ? isCorrect 
                    ? 'bg-green-200 dark:bg-green-800 text-green-800 dark:text-green-200' 
                    : isIncorrect 
                    ? 'bg-red-200 dark:bg-red-800 text-red-800 dark:text-red-200' 
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              {part.text}
            </span>
            {!showResult && (
              <select
                value={selectedCases[currentWordIndex] || ''}
                onChange={(e) => handleCaseSelection(currentWordIndex, e.target.value)}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-1 border-2 border-blue-500 rounded bg-white dark:bg-gray-700 dark:text-white text-sm min-w-12"
              >
                <option value="">?</option>
                <option value="nominative">Nom</option>
                <option value="accusative">Acc</option>
                <option value="dative">Dat</option>
                <option value="genitive">Gen</option>
              </select>
            )}
            {showResult && (
              <span className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 rounded text-sm font-bold text-center min-w-12 ${part.case === 'nominative' ? 'bg-red-500 text-white' : part.case === 'accusative' ? 'bg-blue-500 text-white' : part.case === 'dative' ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'}`}>
                {part.case.slice(0, 3)}
              </span>
            )}
          </span>
        );
      }
      return <span key={index}>{part.text}</span>;
    });
  };

  const score = getScore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Quiz Mode</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Select the correct case for each highlighted word:</p>
      
      <div className="text-2xl text-center mb-6 leading-loose text-gray-800 dark:text-white">
        {renderQuizSentence()}
      </div>

      {!showResult ? (
        <div className="flex justify-center">
          <button 
            onClick={checkAnswers} 
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              Object.keys(selectedCases).length === wordsWithCases.length
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={Object.keys(selectedCases).length !== wordsWithCases.length}
          >
            Check Answers
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-xl font-bold text-gray-800 dark:text-white mb-6">
            Score: {score.correct}/{score.total}
            {score.correct === score.total && <span className="text-green-500"> Perfect! 🎉</span>}
          </div>
          <div className="flex justify-center gap-4">
            <button 
              onClick={resetQuiz} 
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
            <button 
              onClick={onNext} 
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              Next Sentence
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizMode;