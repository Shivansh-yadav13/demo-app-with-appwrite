<<<<<<< HEAD
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
=======
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
    </div>
>>>>>>> parent of 85a4b97 (Added user auth using appwrite)
  );
}

export default App;
