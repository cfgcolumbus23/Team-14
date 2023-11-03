const signupButton = document.getElementById('sign-in-button');

signupButton.onclick() = () =>{
    //Gets Element From Button Form
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const password = document.getElementById('passwordInput').value;
    const email = document.getElementById('emailInput').value;
    const isValidPassword = false;

    const request = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},

        params: JSON.stringify({
            firstName : firstName,
            lastName : lastName,
            email: email,
            Admin: false,
            Tokens: 0,
            Courses: [],
            password: password
        })
    }
    
    //Function to determine if password is valid (at least 8 characters with a number, uppercase
    //and lowercase letter)
    const hasUppercase = false;
    const hasLowercase = false;
    const hasDigit = false;
    for (const i = 0; i < password.length; i++) {
        const currentChar = password[i];
        if (!hasUppercase && /^[A-Z]$/.test(currentChar)) { hasUppercase = true; }
        else if (!hasLowercase && /^[a-z]$/.test(currentChar)) { hasLowercase = true; }
        else if (!hasDigit && /^[0-9]$/.test(currentChar)) { hasDigit = true; }
    }
    isValidPassword = hasUppercase && hasLowercase && hasDigit && (i >= 8);
    
    if(isValidPassword){
        // send the request to the server
        fetch('/api/send-password', request);
    }

}