// Header 컴포넌트 (함수)
import logoPath from 'assets/logo.svg';
import { getPublicAsset } from 'utils';

export function Header(props) {
  return (
    <header className="App-header">
      <img
        src={getPublicAsset('logo512.png')}
        className="App-logo"
        alt="React"
      />
      <img src={logoPath} className="App-logo" alt="React" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
