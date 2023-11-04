import React from 'react';
import readUserData from './read_user_data';
import Users from './Users.txt'

//Function to check if the user email and password exist in the database of students
//and that the password is correct for the user.
function SignInButton(email, password) {
    const database = readUserData(Users);
    
    if (Array.isArray(database)) {
        for (let i = 0; i < database.length; i++) {
          if (database[i][7] === email && database[i][6] === password) {
            return true;
          }
        }
    }
}
    
export default SignInButton;
    