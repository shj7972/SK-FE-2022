import { Component } from 'react';
import { InteractHeadline, A11yHidden } from 'components';
import { arrayOf, oneOfType, number, string } from 'prop-types';

class StatefulComponent extends Component {
  static defaultProps = {
    name: 'stateful',
  };
  static propTypes = {
    name: string,
  };

  state = {
    isShowChild: true,
    nickname: `__${this.props.name}__`,
    theme: 'dark',
    background: '#000',
    color: '#fff',
    containerStyle: {
      padding: 40,
    },
  };

  render() {
    const { isShowChild, containerStyle, color, background, theme } =
      this.state;

    return (
      <div
        id="stateful-component"
        style={{
          color,
          background,
          ...containerStyle,
        }}
      >
        <InteractHeadline
          theme={theme}
          onChangeTheme={this.handleChangeTheme}
          onToggleChild={this.handleToggleChild}
        />

        {isShowChild && <StatefulComponent.Child numbers={[20, 3034, '22']} />}
      </div>
    );
  }

  handleToggleChild = () => {
    this.setState(({ isShowChild }) => ({
      isShowChild: !isShowChild,
    }));
  };

  handleChangeTheme = () => {
    this.setState(({ theme, color, background }) => ({
      color: color.includes('000') ? '#fff' : '#000',
      background: background.includes('000') ? '#fff' : '#000',
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };
}

StatefulComponent.Child = class extends Component {
  clearId = null;

  static displayName = 'StatefulChild';
  static propTypes = {
    numbers: arrayOf(oneOfType([number, string])),
  };

  render() {
    const { numbers } = this.props;
    return (
      <>
        <A11yHidden as="h3">숫자 목록</A11yHidden>
        <ul>
          {numbers && numbers.length > 0 ? (
            numbers.map((number, index) => <li key={index}>{number}</li>)
          ) : (
            <li>출력할 숫자가 없습니다.</li>
          )}
        </ul>
      </>
    );
  }

  /* -------------------------------------------------------------------------- */

  componentDidMount() {
    // this.clearId = setInterval(() => console.log('this is child'), 1000);
  }
  componentWillUnmount() {
    // clearInterval(this.clearId);
  }
};

export default StatefulComponent;
