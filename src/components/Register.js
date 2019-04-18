import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      email:'',
      password:''
    }
  }

  onInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  onRegisterSubmit = () => {
    axios.post('http://localhost:3001/register', {
      name: this.state.name,
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
                <legend className="f2 fw6 ph0 mh0 center">Register</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input
                    onChange={this.onInputChange}
                    className="br3 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                  />
                </div>
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
              <div className="">
                <input
                  onClick={this.onRegisterSubmit}
                  className="b br3 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib center"
                  type="submit"
                  value="Register" />
              </div>
            </div>
          </main>
        </article>
    )
  }
}

export default Register
