import React, { useEffect, useState } from 'react'
import AdminHome from './/pages/AdminHome';
import Rewards from './/pages/Rewards'
import SignInButton from './signin_behavior';
import SignUpButton from './signup_behavior';
import Login from './/pages/Login';

function App() {
    
    return (
        <div className="App">
            <div className='header'>
                <h1>CTRL-R</h1>
                <h3>Welcome!</h3>
            </div>
            <div className='body'>
                <h1>Student Home Page</h1>
                <Rewards />
            </div>
        </div>
    )
}

export default App;