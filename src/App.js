import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signin}/>
      </Switch>
    )
  }
}

export default App;
