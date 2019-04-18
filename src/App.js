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
    join: ''
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {...this.state.user, data}
    })
    console.log('app.js----',this.state.user)
  }

  render() {
    const { isSignin } = this.state

    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Signin {...props} loadUser={this.loadUser} />}/>
          <Route path="/register" render={(props) => <Register {...props} loadUser={this.loadUser} />}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/transactions" component={Transactions}/>
          {/* Routes placed here are only available after logging in */}
          {isSignin &&
            <Redirect to="/portfolio"/>
          }
          {/* Displays our Login component as a fallback */}
          <Route component={Signin}/>
        </Switch>
      </div>
    )
  }
}

export default App;
