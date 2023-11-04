import React, { useEffect, useState } from 'react';
import AdminStudentView from './pages/AdminStudentView';
import './App.css';

const App = ()=> {
  return (
    <div className="App">
      <div className="header">
        <h1>CTRL-R</h1>
        <h2>Welcome!</h2>
      </div>
      <div className="body">
        <AdminStudentView />
      </div>
    </div>
  );
}

export default App;