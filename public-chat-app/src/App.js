import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        < Route path="/">
          <Redirect to="/login" />
        </ Route>
      </Switch>
    </Router>
  );
};

export default App;
