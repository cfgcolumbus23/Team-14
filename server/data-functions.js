import React from 'react';

function isAdmin(email) {
    const database = readUserData('server/Users.txt');
    for (let i = 0; i < database.length; i++) {
        if (database[i][7] === email) {
            return database[i][2];
        }
    }
}

export default isAdmin;