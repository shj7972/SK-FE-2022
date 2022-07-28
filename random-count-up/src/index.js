import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import 'styles/globals.css';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from 'app/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// 배포
if (process.env.NODE_ENV === 'production') {
  reportWebVitals(console.log);
}
