import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      copyButtonText: 'Copy Error Details'
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Capture error details
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // Log to console for development
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  getErrorDetails = () => {
    const { error, errorInfo } = this.state;
    const timestamp = new Date().toISOString();
    const userAgent = navigator.userAgent;
    const url = window.location.href;

    return `German Grammar Trainer - Error Report
=======================================

Timestamp: ${timestamp}
URL: ${url}
User Agent: ${userAgent}

Error Message:
${error?.message || 'Unknown error'}

Error Stack:
${error?.stack || 'No stack trace available'}

Component Stack:
${errorInfo?.componentStack || 'No component stack available'}

Error Details:
${JSON.stringify({
  name: error?.name,
  message: error?.message,
  fileName: error?.fileName,
  lineNumber: error?.lineNumber,
  columnNumber: error?.columnNumber
}, null, 2)}

React Error Info:
${JSON.stringify(errorInfo, null, 2)}
`;
  };

  copyErrorToClipboard = async () => {
    try {
      const errorDetails = this.getErrorDetails();
      await navigator.clipboard.writeText(errorDetails);
      this.setState({ copyButtonText: 'Copied! ✓' });
      
      // Reset button text after 2 seconds
      setTimeout(() => {
        this.setState({ copyButtonText: 'Copy Error Details' });
      }, 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = this.getErrorDetails();
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      this.setState({ copyButtonText: 'Copied! ✓' });
      setTimeout(() => {
        this.setState({ copyButtonText: 'Copy Error Details' });
      }, 2000);
    }
  };

  reloadPage = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { error } = this.state;
      
      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            {/* Error Icon and Title */}
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mb-4">
                <svg 
                  className="w-8 h-8 text-red-600 dark:text-red-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                The German Grammar Trainer encountered an unexpected error.
              </p>
            </div>

            {/* Error Message */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                Error Details:
              </h3>
              <p className="text-red-700 dark:text-red-300 font-mono text-sm break-words">
                {error?.message || 'An unknown error occurred'}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button
                onClick={this.reloadPage}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                🔄 Reload Page
              </button>
              
              <button
                onClick={this.copyErrorToClipboard}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                📋 {this.state.copyButtonText}
              </button>
            </div>

            {/* Help Text */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                What you can do:
              </h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Try reloading the page to see if the error persists</li>
                <li>• Copy the error details to share with support</li>
                <li>• Check your internet connection</li>
                <li>• Try using a different browser</li>
              </ul>
            </div>

            {/* Technical Details (Collapsible) */}
            <details className="mt-4">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                🔧 Technical Details (Click to expand)
              </summary>
              <div className="mt-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <pre className="text-xs text-gray-800 dark:text-gray-200 overflow-auto whitespace-pre-wrap">
                  {this.getErrorDetails()}
                </pre>
              </div>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;