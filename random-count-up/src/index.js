import 'react-app-polyfill/stable';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'styles/globals.css';
import App from 'app/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* 배포 시 처리 ------------------------------------------------------------------ */

// 동적 호출 (dynamic import('path') => Promise)
// 오류 메시지: babel-loader: experiments.topLevelAwait 활성
// 해결 방법: Babel 플러그인 babel-plugin-syntax-top-level-await 활용
// 참고: https://babeljs.io/docs/en/babel-plugin-syntax-top-level-await
if (process.env.NODE_ENV === 'production') {
  try {
    const { reportWebVitals } = await import('./reportWebVitals');
    reportWebVitals(console.log);
  } catch (error) {
    console.error(error.message);
  }
}
