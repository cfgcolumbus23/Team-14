// LoginForm.js
import React, { useState } from 'react';
import SignInButton from './array-signin-behavior';
import isAdmin from './data-functions';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the check_auth function with email and password
    setUser(SignInButton(email, password));
    setAdmin(isAdmin(email) === "true");
    if (admin) {
      navigate(AdminHome)
    }
    else if (!admin) {
      //navigate('/')
    }
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
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default LoginForm;
