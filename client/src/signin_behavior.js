import React from 'react';

function SignInButton() {
    const handleClick = () => {
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;
        const isValidStudentSignIn = false;
        const isValidAdminSignIn = false;

        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify({
                firstName: firstName,
            }),
        };

        // Check that it is a valid sign-in
        if (isValidStudentSignIn) {
            fetch('/api/go-to-student-page');
        } else if (isValidAdminSignIn) {
            fetch('/api/go-to-admin-page');
        }
    };

    return (
        <button id="sign-in-button" onClick={handleClick}>
            Sign In
        </button>
    );
}

export default SignInButton;