import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/globals.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'app/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

const { NODE_ENV } = process.env;

// 배포
// dynamic import('path') => Promise
// babel-loader: experiments.topLevelAwait 활성
if (NODE_ENV === 'production') {
  import('./reportWebVitals')
    .then(({ reportWebVitals }) => reportWebVitals(console.log))
    .catch((error) => console.error(error.message));
}
