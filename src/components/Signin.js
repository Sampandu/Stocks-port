import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onSigninSubmit = () => {
    axios.post('http://localhost:3001/signin', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        if(response.data.id) {
          this.props.loadUser(response.data)
          this.props.history.push('/portfolio')
        }
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <article className="br2 ba br3 shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main className="pa4 black-80 center">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  onChange={this.onInputChange}
                  className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  onChange={this.onInputChange}
                  className="b br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSigninSubmit}
                className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <Link to="/register">
                <p className="f5 link dim black db pointer">Register</p>
              </Link>
            </div>
          </div>
        </main>
      </article>
    )
  }
}

export default Signin;
