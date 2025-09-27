const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              German Case Learner
            </h1>
          </div>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <span className="text-xl">
              {isDarkMode ? '☀️' : '🌙'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;