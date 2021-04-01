import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Numbers from './components/pages/numbers/Numbers.js';
// import NumSequences from './components/pages/numSequences/NumSequences.js';
// import RefundCal from './components/pages/RefundCal/RefundCal.js';
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
              <Numbers />
            </Fragment>
          )} />
          <Route exact path='/numbers' component={Numbers} />
          <Route exact path='/passwordGen' component={PasswordGen} />
          {/* <Route exact path='/refund' component={RefundCal} />
          <Route exact path='/numSequences' component={NumSequences} /> */}
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
