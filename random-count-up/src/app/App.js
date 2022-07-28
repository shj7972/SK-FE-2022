import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JsxInAction from 'pages/JsxInAction';
import StatelessComponent from 'pages/SFC';
import RandomCountUp from 'pages/RandomCountUp/RandomCountUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div children="this is home page" />} />
          <Route path="/jsx-in-action" element={<JsxInAction />} />
          <Route path="/random-count-up" element={<RandomCountUp />} />
          <Route path="/stateless-function-component" element={<StatelessComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
