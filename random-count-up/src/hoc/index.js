import { Component } from 'react';

// 공유하고자 하는 로직(상태, 메서드) = 클래스 컴포넌트
class Sharable extends Component {
  state = {
    theme: 'light',
  };
  handleChangeTheme() {
    this.setState(({ theme }) => ({
      theme: theme.includes('light') ? 'dark' : 'light',
    }));
  }
  render() {
    const {
      state: { theme },
      handleChangeTheme,
    } = this;

    return this.props.children({ theme, setTheme: handleChangeTheme });
  }
}

// 고차 컴포넌트(HOC) - 고차 함수
// 일반 컴포넌트 → HOC → 향상된 컴포넌트
export function SharableHOC(Component) {
  // render props pattern
  return (
    <Sharable>
      {({ theme, setTheme }) => <Component theme={theme} setTheme={setTheme} />}
    </Sharable>
  );
}
