import axios from 'axios';

function SignInButton() {
  const handleClick = () => {
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    const requestData = {
      password: password,
      email: email,
    };

    axios.post('/api/signin', requestData)
      .then((response) => {
        if (response.data.isValidStudentSignIn) {
          // Redirect to the student page in your React application
          window.location.href = '/student-page';
        } else if (response.data.isValidAdminSignIn) {
          // Redirect to the admin page in your React application
          window.location.href = '/admin-page';
        } else {
          console.log('Invalid sign-in');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return handleClick;
}

export default SignInButton;