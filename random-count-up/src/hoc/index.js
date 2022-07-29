import React from 'react';

// 고차 컴포넌트(HOC) - 고차 함수
// 일반 컴포넌트(함수) → HOC → 향상된 컴포넌트(클래스)
export function SharableHOC(Component) {
  return class SharableHOC extends React.Component {
    state = {
      theme: 'light',
    };

    handleChangeTheme() {
      this.setState(({ theme }) => ({
        theme: theme.includes('light') ? 'dark' : 'light',
      }));
    }

    render() {
      return (
        <Component theme={this.state.theme} setTheme={this.handleChangeTheme} />
      );
    }
  };
}
