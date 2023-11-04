import React from 'react';

function SignUpButton() {
    const handleClick = () => {
        const firstName = document.getElementById('firstNameInput').value;
        const lastName = document.getElementById('lastNameInput').value;
        const password = document.getElementById('passwordInput').value;
        const email = document.getElementById('emailInput').value;
        let isValidPassword = false;

        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                Admin: false,
                Tokens: 0,
                Courses: [],
                password: password,
            }),
        };

        // Function to determine if password is valid (at least 8 characters with a number, uppercase and lowercase letter)
        let hasUppercase = false;
        let hasLowercase = false;
        let hasDigit = false;
        for (let i = 0; i < password.length; i++) {
            const currentChar = password[i];
            if (!hasUppercase && /^[A-Z]$/.test(currentChar)) {
                hasUppercase = true;
            } else if (!hasLowercase && /^[a-z]$/.test(currentChar)) {
                hasLowercase = true;
            } else if (!hasDigit && /^[0-9]$/.test(currentChar)) {
                hasDigit = true;
            }
        }
        isValidPassword = hasUppercase && hasLowercase && hasDigit && (password.length >= 8);

        if (isValidPassword) {
            // Send the request to the server
            fetch('/api/send-password', request);
        }
    };

    return (
        <button id="sign-up-button" onClick={handleClick}>
            Sign Up
        </button>
    );
}

export default SignUpButton;