import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import FixedPara from './pages/FixedPara';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route exact path='/fixed-para'>
            <FixedPara />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
