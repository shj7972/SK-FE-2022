import { Component } from 'react';
import { InteractHeadline } from 'components';

class StatefulComponent extends Component {
  static defaultProps = {
    name: 'stateful',
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

        {isShowChild && <StatefulComponent.Child />}
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

  render() {
    return <div>Child</div>;
  }

  /* -------------------------------------------------------------------------- */

  componentDidMount() {
    console.log('event subsription');
    this.clearId = setInterval(() => console.log('this is child'), 1000);
  }
  componentWillUnmount() {
    console.log('event unsubsription');
    clearInterval(this.clearId);
  }
};

export default StatefulComponent;
