import { Component } from 'react';
import { InteractHeadline } from 'components';

class StatefulComponent extends Component {
  static displayName = 'STATEFUL';
  static defaultProps = {
    name: 'stateful',
  };

  state = {
    isShowChild: true,
    nickname: `__${this.props.name}__`,
    theme: 'dark',
    background: '#000',
    color: '#fff',
    content: {
      headline: 'Stateless Component',
      button: 'Change Headline',
    },
    containerStyle: {
      padding: 40,
    },
    button: {
      type: 'button',
      content: 'change interactive headline',
    },
  };

  render() {
    const {
      isShowChild,
      containerStyle,
      content,
      button,
      color,
      background,
      theme,
    } = this.state;

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
          content={content}
          buttonInfo={button}
          theme={theme}
          onChangeTheme={this.handleChangeThemeAndHeadline}
        />

        {isShowChild && <StatefulComponent.Child />}
      </div>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      snapshot: Math.random() > 0.5 ? 100 : 1,
    };
  }

  componentDidMount() {
    const domNode = document.getElementById('stateful-component');
    console.log(domNode);
  }

  componentDidUpdate(prevProps, prevState, { snapshot }) {
    console.log('snapshot = ', snapshot);
  }

  componentWillUnmount() {
    console.log('will unmount');
  }

  componentDidCatch(error, info) {}

  checkRender() {
    console.log(this);
  }

  handleChangeThemeAndHeadline = () => {
    this.setState(({ isShowChild, content }) => ({
      isShowChild: !isShowChild,
      content: {
        ...content,
        headline: content.headline.replace(/(less|ful)/, ($1) =>
          $1.includes('less') ? 'ful' : 'less'
        ),
      },
    }));

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
