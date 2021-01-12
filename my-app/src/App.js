import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/login/Login.js';
import Numbers from './components/pages/numbers/Numbers.js';
import NumSequences from './components/pages/numSequences/NumSequences.js';
import InitialFraud from './components/pages/initialFraud/InitialFraud.js';
import PasswordGen from './components/pages/passwordGen/PasswordGen.js';
import './App.css';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Login />
            </Fragment>
          )} />
          <Route exact path='/fraud' component={InitialFraud} />
          <Route exact path='/numbers' component={Numbers} />
          <Route exact path='/numSequences' component={NumSequences} />
          <Route exact path='/passwordGen' component={PasswordGen} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
