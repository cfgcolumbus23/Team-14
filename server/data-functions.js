import React from 'react';


// Given the email of a user this function will return true if this user is an admin
// and false otherwise
function isAdmin(email) {
    const database = readUserData('server/Users.txt');
    for (let i = 0; i < database.length; i++) {
        if (database[i][7] === email) {
            return database[i][2];
        }
    }
}

export default isAdmin;