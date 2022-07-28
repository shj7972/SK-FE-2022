import { Component } from 'react';
import { InteractHeadline } from 'components';

export default class StatefulComponent extends Component {
  constructor(props) {
    super(props);

    // 컴포넌트 상태
    // 읽기/쓰기
    // 단, 해당 컴포넌트에서만!
    this.state = {
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
  }

  render() {
    const { containerStyle, content, button, color, background, theme } =
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
        <InteractHeadline content={content} />
        <button
          type={button.type}
          onClick={() => {
            // 상태 변경
            // this.state.content.headline = 'changed headline';

            this.setState(
              // function
              ({ content }) => ({
                content: {
                  ...content,
                  headline: content.headline.replace(/less/, 'ful'),
                },
              }),

              // object
              /* merge|combine new state */
              // {
              //   content: {
              //     ...this.state.content,
              //     headline: 'Stateful Component',
              //   },
              // },
              /* callback */
              () => {
                console.log('callback: ', this.state.content.headline);
              }
            );

            this.setState(
              ({ theme, color, background }) => ({
                color: color.includes('000') ? '#fff' : '#000',
                background: background.includes('000') ? '#fff' : '#000',
                theme: theme === 'light' ? 'dark' : 'light',
              })
              // () => alert('changed theme')
            );

            // console.log('sync code: ', this.state.content.headline);

            // 재조정 알로리즘 비교 (이전 VDOM, 현재 VDOM)
            // 변경 감지
            // UI 업데이트
          }}
        >
          {button.content} : {theme}
        </button>
      </div>
    );
  }
}
