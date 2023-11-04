import React, { useEffect, useState } from 'react';
import signUp from './pages/signUp';
import SignUpForm from './pages/SignUpForm';



function App() {
    
    return (
        <div className="App">
            <div className='header'>
                <h1>CTRL-R</h1>
                <h3>Welcome!</h3>
            </div>
            <div className='body'>
                <h1>Student Home Page</h1>
                <signUp />
            </div>
        </div>
    )
}

export default App;