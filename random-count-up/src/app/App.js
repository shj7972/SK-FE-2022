import './App.css';
import { WithoutFooterLayout } from 'components';

function App() {
  return (
    <div className="App">
      <WithoutFooterLayout>
        <h2>레이아웃 컴포넌트</h2>
        <ul lang="en">
          <li>Base Layout</li>
          <li>without Footer Layout</li>
        </ul>
      </WithoutFooterLayout>
    </div>
  );
}

export default App;
