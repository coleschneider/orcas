import * as React from 'react';

interface ErrorState {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

interface ErrorProps {
  children: React.ReactElement | React.ReactElement[];
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }
  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div>
          <h2>Oh-no! Something went wrong</h2>
          <p test-id="text-error">{error && error.toString()}</p>
          <div>
            <p>{errorInfo.componentStack}</p>
          </div>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
