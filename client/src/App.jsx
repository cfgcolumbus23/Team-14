import React from 'react'
import StudentHome from './/pages/StudentHome.jsx'
import './App.css'

function App() {
    
    return (
        <div className="App">
            <div className='header'>
                <h1>CTRL-R</h1>
                <h3>Welcome!</h3>
            </div>
            <div className='body'>
                <h1>Student Home Page</h1>
                <StudentHome />
            </div>
        </div>
    )
}

export default App;