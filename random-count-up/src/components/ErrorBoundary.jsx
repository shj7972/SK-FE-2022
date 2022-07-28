import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {};

  static getDerivedStateFromError(error) {
    return {
      hasError: !!error,
      error,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      errorInfo: info,
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundary.DisplayError message={this.state.error.message} />;
    }

    return this.props.children;
  }
}

ErrorBoundary.DisplayError = ({ message }) => <div role="alert">{message}</div>;
