import { Component } from 'react';
import { Button } from 'components';

// stateless → stateful
export class InteractHeadline extends Component {
  state = {
    headline: 'Stateless Component',
    buttonInfo: {
      type: 'button',
      content: 'change interactive headline',
    },
  };

  render() {
    const { headline, buttonInfo } = this.state;

    return (
      <>
        <h2>{headline}</h2>
        <Button
          lang="en"
          data-theme={this.props.theme}
          onClick={() => console.log('clicked button')}
        >
          Save
        </Button>
        <InteractHeadline.Button
          theme={this.props.theme}
          onClick={this.handleClick}
          buttonInfo={buttonInfo}
        />
      </>
    );
  }

  handleClick = () => {
    // 부모의 부모에서 받은 props (메서드)
    this.props.onChangeTheme();
    this.props.onToggleChild();
    // 부모의 메서드
    this.handleChangeHeadline();
  };

  handleChangeHeadline = () => {
    this.setState(({ headline }) => ({
      headline: headline.replace(/(less|ful)/, ($1) =>
        $1.includes('less') ? 'ful' : 'less'
      ),
    }));
  };
}

/* -------------------------------------------------------------------------- */

InteractHeadline.Button = ({ buttonInfo, theme, ...restProps }) => (
  <button
    type={buttonInfo.type}
    style={{ padding: '8px 16px', marginBottom: 12 }}
    {...restProps}
  >
    {buttonInfo.content} : {theme}
  </button>
);

InteractHeadline.Button.displayName = 'InteractHeadlineButton';
