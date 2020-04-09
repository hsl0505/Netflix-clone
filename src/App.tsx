import React from 'react';
import { Switch, Route } from 'react-router-dom';

import InitPage from './pages/InitPage';
import LoginPage from './pages/LoginPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={InitPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
