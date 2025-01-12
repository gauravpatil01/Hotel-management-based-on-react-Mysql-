import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information (optional)
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
