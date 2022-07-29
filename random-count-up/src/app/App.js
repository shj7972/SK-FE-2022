import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import JsxInAction from 'pages/JsxInAction';
import StatelessComponent from 'pages/Stateless';
import StatefulComponent from 'pages/Stateful.class';
import RandomCountUp from 'pages/RandomCountUp/RandomCountUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div children="this is home page" />} />
        <Route path="/jsx-in-action" element={<JsxInAction />} />
        <Route path="/random-count-up" element={<RandomCountUp />} />
        <Route path="/stateless" element={<StatelessComponent />} />
        <Route path="/stateful" element={<StatefulComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
