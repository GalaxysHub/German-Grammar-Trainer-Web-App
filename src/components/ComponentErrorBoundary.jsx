import React from 'react';

class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Error in ${this.props.componentName || 'Component'}:`, error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 m-4">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <h3 className="font-medium text-red-800 dark:text-red-200">
              {this.props.componentName || 'Component'} Error
            </h3>
          </div>
          <p className="text-red-700 dark:text-red-300 text-sm">
            This component encountered an error and couldn't render properly.
          </p>
          {this.props.fallback && (
            <div className="mt-3">
              {this.props.fallback}
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ComponentErrorBoundary;