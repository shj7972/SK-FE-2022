import { Component } from 'react';
import { InteractHeadline, A11yHidden } from 'components';
import { arrayOf, oneOfType, number, string, exact } from 'prop-types';

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
    members: [
      { id: 'user-1', name: '해오랑', age: 23 },
      { id: 'user-2', name: '김이박', age: 45 },
      { id: 'user-3', name: '박현식', age: 39 },
      { id: 'user-4', name: '최연지', age: 28 },
      // new user
      { id: 'user-5', name: '박사랑', age: 19, gender: 'female' },
    ],
  };

  render() {
    const { isShowChild, containerStyle, color, background, theme, members } =
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

        {isShowChild && (
          <StatefulComponent.Child numbers={[20, 3034, '22']} users={members} />
        )}
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

const UserType = exact({
  id: string.isRequired,
  name: string.isRequired,
  age: number.isRequired,
});

StatefulComponent.Child = class extends Component {
  clearId = null;

  static displayName = 'StatefulChild';
  static propTypes = {
    numbers: arrayOf(oneOfType([number, string])),
    users: arrayOf(UserType),
  };

  render() {
    const { numbers, users } = this.props;
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
        <A11yHidden as="h3">사용자 목록</A11yHidden>
        <ul>
          {users && users.length > 0 ? (
            users.map(({ id, name, age }, index) => (
              <li key={id}>
                <span className="user-name">{name}</span> |{' '}
                <span className="user-age">{age}</span>
              </li>
            ))
          ) : (
            <li>사용자가 없습니다.</li>
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
