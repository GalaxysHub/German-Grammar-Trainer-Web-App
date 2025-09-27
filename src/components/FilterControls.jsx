const FilterControls = ({ filters, onFilterChange, onReset }) => {
  const handleCaseChange = (caseType) => {
    const newCases = filters.cases.includes(caseType)
      ? filters.cases.filter(c => c !== caseType)
      : [...filters.cases, caseType];
    onFilterChange({ ...filters, cases: newCases });
  };

  const handleGenderChange = (gender) => {
    const newGenders = filters.genders.includes(gender)
      ? filters.genders.filter(g => g !== gender)
      : [...filters.genders, gender];
    onFilterChange({ ...filters, genders: newGenders });
  };

  const allCasesSelected = filters.cases.length === 0;
  const allGendersSelected = filters.genders.length === 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Practice Filters
        </h3>
        <button
          onClick={onReset}
          className="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded transition-colors"
        >
          Reset All
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Case Filters */}
        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
            Filter by Cases:
          </h4>
          <div className="space-y-2">
            {[
              { key: 'nominative', label: 'Nominative', color: 'text-red-600' },
              { key: 'accusative', label: 'Accusative', color: 'text-blue-600' },
              { key: 'dative', label: 'Dative', color: 'text-green-600' },
              { key: 'genitive', label: 'Genitive', color: 'text-purple-600' }
            ].map(({ key, label, color }) => (
              <label key={key} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allCasesSelected || filters.cases.includes(key)}
                  onChange={() => handleCaseChange(key)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`font-medium ${color}`}>{label}</span>
                {allCasesSelected && (
                  <span className="text-xs text-gray-500">(all)</span>
                )}
              </label>
            ))}
          </div>
        </div>

        {/* Gender Filters */}
        <div>
          <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
            Filter by Genders:
          </h4>
          <div className="space-y-2">
            {[
              { key: 'masculine', label: 'Masculine (der)', color: 'text-blue-600' },
              { key: 'feminine', label: 'Feminine (die)', color: 'text-red-600' },
              { key: 'neuter', label: 'Neuter (das)', color: 'text-green-600' }
            ].map(({ key, label, color }) => (
              <label key={key} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allGendersSelected || filters.genders.includes(key)}
                  onChange={() => handleGenderChange(key)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`font-medium ${color}`}>{label}</span>
                {allGendersSelected && (
                  <span className="text-xs text-gray-500">(all)</span>
                )}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border-t pt-4">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
          Quick Filters:
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFilterChange({ cases: ['nominative'], genders: [] })}
            className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
          >
            Nominative Only
          </button>
          <button
            onClick={() => onFilterChange({ cases: ['accusative'], genders: [] })}
            className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
          >
            Accusative Only
          </button>
          <button
            onClick={() => onFilterChange({ cases: ['dative'], genders: [] })}
            className="px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors"
          >
            Dative Only
          </button>
          <button
            onClick={() => onFilterChange({ cases: ['genitive'], genders: [] })}
            className="px-3 py-1 text-sm bg-purple-100 hover:bg-purple-200 text-purple-700 rounded transition-colors"
          >
            Genitive Only
          </button>
          <button
            onClick={() => onFilterChange({ cases: [], genders: ['masculine'] })}
            className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
          >
            Masculine Only
          </button>
          <button
            onClick={() => onFilterChange({ cases: [], genders: ['feminine'] })}
            className="px-3 py-1 text-sm bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
          >
            Feminine Only
          </button>
          <button
            onClick={() => onFilterChange({ cases: [], genders: ['neuter'] })}
            className="px-3 py-1 text-sm bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors"
          >
            Neuter Only
          </button>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        {allCasesSelected && allGendersSelected
          ? "Showing all sentences"
          : `Filtered: ${filters.cases.length || 4} case${(filters.cases.length || 4) !== 1 ? 's' : ''}, ${filters.genders.length || 3} gender${(filters.genders.length || 3) !== 1 ? 's' : ''}`
        }
      </div>
    </div>
  );
};

export default FilterControls;