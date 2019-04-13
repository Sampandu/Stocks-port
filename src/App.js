import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import Transactions from './components/Transactions';
import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Signin}/>
        <Route path="/register" component={Register}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/transactions" component={Transactions}/>
      </Switch>
    )
  }
}

export default App;
