import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Numbers from './components/pages/Numbers.js';
import NumSequences from './components/pages/NumSequences.js';
import InitialFraud from './components/pages/InitialFraud.js';
import PasswordGen from './components/pages/PasswordGen.js';
import './App.css';
import { Fragment } from 'react';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/numbers' component={Numbers} />
          <Route exact path='/numSequences' component={NumSequences} />
          <Route exact path='/initialFraud' component={InitialFraud} />
          <Route exact path='/passwordGen' component={PasswordGen} />
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
