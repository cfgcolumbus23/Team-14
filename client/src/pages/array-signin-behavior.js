import React from 'react';
import readUserData from './read_user_data';

//Function to check if the user email and password exist in the database of students
//and that the password is correct for the user.
function SignInButton(email, password) {
    const database = readUserData('client/src/pages/Users.txt');
    for (const i = 0; i < database.length; i++) {
        if (database[i][7] === email && database[i][6] === password) {
            return true;
        } else {
            return false;
        }
    }
}
    
export { check_auth };
    