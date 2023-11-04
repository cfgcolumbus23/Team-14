// LoginForm.js
import React, { Component } from 'react';
import SignUpButton from '../signup_behavior';
import SignInButton
 from '../signin_behavior';
import './Login.css'
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    SignInButton();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form">
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button id="submit" type="submit">Sign In</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
