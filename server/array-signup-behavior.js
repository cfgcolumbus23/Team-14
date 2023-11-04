import React from 'react';
import readUserData from './read_user_data.js';
const fs = require('fs');

//Adds a new student to the user database assuming their email is not
//already associated with another user.
// Pushes new Data into Function
function arraySignupBehavior(firstName, lastName, email, password) {
    // Read existing user data from the Users database file
    const database = readUserData('Users.txt');
  
    // Check if the email or password already exist in the database
    if (isDuplicateEmailOrPassword(database, email, password)) {
      console.error('Invalid Credentials. Email or password already exists.');
      return null;
    }
  
    // Create a new data point
    const newData = [firstName, lastName, false, 0, 0, 0, password, email];
    
    // Append the new data to the file
    const newDataString = newData.join(',') + '\n'; // Convert to a comma-separated string with a newline
    fs.appendFile('Users.txt', newDataString, (err) => {
      if (err) {
        console.error('Error appending to the file.', err);
      } else {
        console.log('Data Appended to File.');
      }
    });
  }

  function isDuplicateEmailOrPassword(database, email, password) {
    const isDuplicate = false;
    for (const data of database) {
      if (data[6] === password || data[7] === email) {
        return isDuplicate = true; // Email or password already exists
      }
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
    

    return !isDuplicate && isValidPassword; // No duplicates found and valid password
  }

export default arraySignupBehavior;