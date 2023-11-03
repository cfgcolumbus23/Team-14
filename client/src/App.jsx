import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm';


function App() {
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])
    return (
        <div className="App">
            <h1>Login Form</h1>
            <LoginForm />
        </div>
    )
}

export default App