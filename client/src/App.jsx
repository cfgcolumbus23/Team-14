import React, { useEffect, useState } from 'react'
import AdminHome from './/pages/AdminHome';
import './App.css'

function App() {

    return (
        <div className="App">
            <div className="header">
                <h1>CTRL-R</h1>
                <h3>Welcome!</h3>
            </div>
            <div className="body">
                <h1>Home</h1>
                <AdminHome />
            </div>
        </div>
    )
}

export default App