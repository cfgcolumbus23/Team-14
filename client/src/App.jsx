import React, { useEffect, useState } from 'react'
import AdminHome from './/pages/AdminHome';
import SignInButton from './signin_behavior';
import SignUpButton from './signup_behavior';
import Login from './/pages/Login';

function App() {
    
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/login' component={Login} />
            </Routes>
        </Router>
    );
}

export default App;