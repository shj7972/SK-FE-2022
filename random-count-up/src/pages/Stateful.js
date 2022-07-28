import { Component } from 'react';
import { InteractHeadline } from 'components';

// Vue 컴포넌트의 라이프 사이클 훅
// - beforeCreate
// - created
// - beforeMount
// - mounted
// - beforeUpdate
// - updated
// - beforeUnmount
// - unmounted

// React 클래스 컴포넌트의 라이프 사이클 (메서드)
// RENDER ------------------------------
// - constructor
// - static getDerivedStateFromProps
// - static getDerivedStateFromError
// - shouldComponentUpdate
// - render
// PRE COMMIT --------------------------
// - getSnapshotBeforeUpdate
// COMMIT ------------------------------
// - componentDidMount
// - componentDidUpdate
// - componentWillUnmount
// - componentDidCatch

class StatefulComponent extends Component {
  static displayName = 'STATEFUL';
  static defaultProps = {
    name: 'stateful',
  };

  // mount (1)
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

  // mount (1) | update (N)
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     // 파생된 상태 반환
  //     // state 병합(합성)
  //   }
  // }

  // 성능 최적화
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.name === this.props.name ? false : true;
  // }

  // static getDerivedStateFromError(error) {
  //   return {
  //     hasError: !!error,
  //     error,
  //   };
  // }

  render() {
    // this.checkRender();

    const {
      isShowChild,
      containerStyle,
      content,
      button,
      color,
      background,
      theme,
    } = this.state;

    // const domNode = document.getElementById('stateful-component');
    // console.log(domNode);

    return (
      <div
        id="stateful-component"
        style={{
          color,
          background,
          ...containerStyle,
        }}
      >
        <InteractHeadline content={content} />
        <button
          type={button.type}
          // onClick={this.handleChangeThemeAndHeadline.bind(this)}
          // onClick={() => this.handleChangeThemeAndHeadline()}
          onClick={this.handleChangeThemeAndHeadline}
        >
          {button.content} : {theme}
        </button>

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

  componentDidCatch(error, info) {
    // error object
    // info = error stack
  }

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

// Compound Component Pattern
// - React.StrictMode
// - React.Fragment
StatefulComponent.Child = class extends Component {
  // RENDER PHASE
  clearId = null;

  static displayName = 'StatefulChild';

  render() {
    return <div>Child</div>;
  }

  /* -------------------------------------------------------------------------- */

  // COMMIT PHASE

  componentDidMount() {
    // 이벤트 연결
    console.log('event subsription');
    this.clearId = setInterval(() => console.log('this is child'), 1000);
  }
  componentWillUnmount() {
    // 이벤트 연결 해제
    console.log('event unsubsription');
    clearInterval(this.clearId);
  }
};

export default StatefulComponent;
