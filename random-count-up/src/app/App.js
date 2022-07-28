import './App.css';
import logoPath from '../assets/logo.svg';
import { getPublicAsset } from '../utils';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
