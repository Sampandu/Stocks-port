import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import Transactions from './components/Transactions';
import Navigation from './components/Navigation';
import './App.css';
import 'tachyons';

const initialState = {
  isSignin: false,
  user: {
    id: '',
    name: '',
    email: '',
    join: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = data => {
    this.setState({
      isSignin: !this.state.isSignin,
      user: { ...this.state.user, ...data },
    });
  };

  render() {
    const { isSignin } = this.state;

    return (
      <div>
        <Navigation isSignin={this.state.isSignin} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Signin {...props} loadUser={this.loadUser} />}
          />
          <Route
            path="/register"
            render={props => <Register {...props} loadUser={this.loadUser} />}
          />
          <Route
            path="/portfolio"
            render={props => (
              <Portfolio {...props} name={this.state.user.name} />
            )}
          />
          <Route
            path="/transactions"
            render={props => (
              <Transactions {...props} name={this.state.user.name} />
            )}
          />

          {/* Routes placed here are only available after logging in */}
          {isSignin && <Redirect to="/portfolio" />}
          {/* Displays our Login component as a fallback */}
          <Route component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default App;
