import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import SentenceDisplay from './components/SentenceDisplay'
import QuizMode from './components/QuizMode'
import FilterControls from './components/FilterControls'
import { germanSentences } from './data/sentences'
import { getSentenceMetadata } from './utils/genderDetection'

function App() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filters, setFilters] = useState({
    cases: [], // Empty array means "all cases"
    genders: [] // Empty array means "all genders"
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Filter sentences based on selected cases and genders
  const filteredSentences = useMemo(() => {
    return germanSentences.filter(sentence => {
      const metadata = getSentenceMetadata(sentence);
      
      // If no filters are set, show all sentences
      const casesMatch = filters.cases.length === 0 || 
        filters.cases.some(caseFilter => metadata.cases.includes(caseFilter));
      
      const gendersMatch = filters.genders.length === 0 || 
        filters.genders.some(genderFilter => metadata.genders.includes(genderFilter));
      
      return casesMatch && gendersMatch;
    });
  }, [filters]);

  // Reset current sentence index when filters change
  useEffect(() => {
    setCurrentSentenceIndex(0);
  }, [filteredSentences]);

  const nextSentence = () => {
    setCurrentSentenceIndex((prev) => 
      prev < filteredSentences.length - 1 ? prev + 1 : 0
    );
  };

  const previousSentence = () => {
    setCurrentSentenceIndex((prev) => 
      prev > 0 ? prev - 1 : filteredSentences.length - 1
    );
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const resetFilters = () => {
    setFilters({ cases: [], genders: [] });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            German Case Learner
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Learn German grammatical cases with color-coded examples
          </p>
        </header>
        
        <main className="w-full max-w-4xl">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">German Cases</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
              <div className="legend-item">
                <span className="nominative">Nominative</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Subject</div>
              </div>
              <div className="legend-item">
                <span className="accusative">Accusative</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Direct object</div>
              </div>
              <div className="legend-item">
                <span className="dative">Dative</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Indirect object</div>
              </div>
              <div className="legend-item">
                <span className="genitive">Genitive</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Possession</div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 text-center">Noun Genders</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="legend-item">
                <span className="gender-masculine px-3 py-1 rounded">Masculine</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Blue underline</div>
              </div>
              <div className="legend-item">
                <span className="gender-feminine px-3 py-1 rounded">Feminine</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Red underline</div>
              </div>
              <div className="legend-item">
                <span className="gender-neuter px-3 py-1 rounded">Neuter</span>
                <div className="text-sm text-gray-600 dark:text-gray-400">Green underline</div>
              </div>
            </div>
          </div>

          <FilterControls
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={resetFilters}
          />
          
          {filteredSentences.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                No sentences found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No sentences match your current filter selection.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  Practice Sentences
                </h2>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsQuizMode(!isQuizMode)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isQuizMode 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-red-500 hover:bg-red-600 text-white'
                    }`}
                  >
                    {isQuizMode ? 'Study Mode' : 'Quiz Mode'}
                  </button>
                  <div className="text-gray-600 dark:text-gray-400">
                    {currentSentenceIndex + 1} of {filteredSentences.length}
                  </div>
                </div>
              </div>
              
              {isQuizMode ? (
                <QuizMode 
                  sentence={filteredSentences[currentSentenceIndex]} 
                  onNext={nextSentence}
                />
              ) : (
                <SentenceDisplay sentence={filteredSentences[currentSentenceIndex]} />
              )}
              
              <div className="flex justify-between mt-8">
                <button 
                  onClick={previousSentence} 
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                  disabled={filteredSentences.length <= 1}
                >
                  ← Previous
                </button>
                <button 
                  onClick={nextSentence} 
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                  disabled={filteredSentences.length <= 1}
                >
                  Next →
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
