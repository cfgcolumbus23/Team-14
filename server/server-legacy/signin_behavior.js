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
                password: password,
                email: email
            }),
        };


    isValidStudentSignIn = fetch('/api/is-valid-student',request);
    isValidAdminSignIn = fetch('/api/is-valid-admin',request);

        // Check that it is a valid sign-in
        if (isValidStudentSignIn) {
            const request = {
                method: 'GET',
                headers: {'Content-Type':'application/json'},
                params: JSON.stringify({
                    isValidStudentSignIn: isValidStudentSignIn
                })
            }
    
            fetch('/api/go-to-student-page');
        } else if (isValidAdminSignIn) {
            const request = {
                method: 'GET',
                headers: {'Content-Type':'application/json'},
                params: JSON.stringify({
                    isValidAdminSignIn: isValidAdminSignIn
                })
            }    
            fetch('/api/go-to-admin-page');
        }
    };

    return handleClick;
}


export default SignInButton;
