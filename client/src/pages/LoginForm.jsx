// LoginForm.js
import React, { useState } from 'react';
import SignUpButton from '../signup_behavior';
import SignInButton from './array-signin-behavior';
import isAdmin from './data-functions';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidUser, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the check_auth function with email and password
    setUser(SignInButton(email, password));
    setAdmin(isAdmin(email) === "true");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
