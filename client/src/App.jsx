import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import './App.css';

const App = ()=> {
  
  return (
    <div className="App">
      <div className="header">
        <h1>CTRL-R</h1>
        <h2>Welcome!</h2>
      </div>
      <div className="body">
        <h1>Home</h1>
        <Login />
      </div>
    </div>
  );
}

export default App;