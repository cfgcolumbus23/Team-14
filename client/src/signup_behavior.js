const signupButton = document.getElementById('sign-up-button');

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

        body: JSON.stringify({
            firstName : firstName,
            lastName : lastName,
            email: email,
            Admin: false,
            Tokens: 0,
            Courses: [],
            password: password
        })
    }
    //Do function for checking if password is valid

    if(isValidPassword){
        // send the request to the server
        fetch('/api/send-password', request);
    }

}