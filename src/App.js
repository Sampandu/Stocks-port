import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Signin from './components/Signin';
import Register from './components/Register';
import Portfolio from './components/Portfolio';
import Transactions from './components/Transactions';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './App.css';
import 'tachyons';

const initialState = {
  isSignin: false,
  user: {
    id: '',
    name: '',
    email: '',
    balance: 0,
    join: '',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleSignout = () => {
    this.setState(initialState);
  };

  loadUser = data => {
    this.setState({
      isSignin: !this.state.isSignin,
      user: { ...this.state.user, ...data },
    });
  };

  render() {
    const { isSignin, user } = this.state;

    return (
      <div>
        <Navigation
          isSignin={this.state.isSignin}
          handleSignout={this.handleSignout}
        />
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
              <Portfolio {...props} name={user.name} balance={user.balance} />
            )}
          />
          <Route
            path="/transactions"
            render={props => <Transactions {...props} name={user.name} />}
          />

          {/* Routes placed here are only available after logging in */}
          {isSignin && <Redirect to="/portfolio" />}
          {/* Displays our Login component as a fallback */}
          <Route component={Signin} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
