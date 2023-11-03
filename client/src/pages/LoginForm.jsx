// LoginForm.js
import React, { Component } from 'react';

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
    // Handle the form submission here
    console.log('Email:', this.state.email);
    console.log('Password:', this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
