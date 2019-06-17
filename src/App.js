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
        <footer className="fixed left-0 bottom-0 w-100 h2 bg-near-black white-80 ph4">
          <p className="f6">
            <span className="dib mr4 mr5-ns">©2019 Developed by Zhenyu</span>
            <a
              className="link white-80 hover-light-purple"
              href="https://iexcloud.io"
            >
              Data provided by IEX Cloud
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
