import React from 'react';
// import './App.css';
import { Switch, Route } from 'react-router-dom';

import InitPage from './pages/InitPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={InitPage} />
      </Switch>
    </div>
  );
}

export default App;
