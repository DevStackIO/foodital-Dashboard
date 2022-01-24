import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Manage from './components/pages/Manage';
import FAQ from './components/pages/FAQ';
import Form from './form/Form';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Manage' component={Manage} />
          <Route path='/FAQ' component={FAQ} />
          <Route path='/Form' component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
