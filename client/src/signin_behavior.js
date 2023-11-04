const signinButton = document.getElementById('sign-in-button');

signinButton.onclick() = ()=>{
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;
    const isValidStudentSignIn = false;
    const isValidAdminSignIn = false;

    const request = {
        method: 'GET',
        headers: {'Content-Type':'application/json'},
        params: JSON.stringify({
            firstName : firstName
        })
    }

    
    //Check that it is a valid sign in 
    if(isValidSignStudentIn){
        fetch('/api/go-to-student-page');
    }else if(isValidAdminSignIn){
        fetch('api/go-to-admin-page');
    }

}