import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import { account } from './Services/appwriteConfig';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        < Route path="/">
        {account.get() ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </ Route>
      </Switch>
    </Router>
  );
};

export default App;
