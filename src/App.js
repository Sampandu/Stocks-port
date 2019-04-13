import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signin}/>
        <Route path="/register" component={Register}/>
      </Switch>
    )
  }
}

export default App;
