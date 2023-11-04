import React from 'react';
import {database} from './data.js';
const fs = require('fs');

//Pushes new Data into Function
function arraySignupBehavior(firstName,lastName,email,password){
    const isValidPassword = isValidPassword(password);
    //Creates New DataPoint with default functions
    const newData = [firstName,lastName,false,0,0,0,password,email];

    // Ensure that the newData argument is an array with the expected format
  if (isValidPassword) {
    //Appends to "Database" file
    fs.appendFile('Users.txt',newData,(err)=>{
        if(err){
            console.error('Error Appending to the file.',err);
        }else{
            console.log('Data Appended to File.');
        }
    })
    console.log('New data added to the database:', newData);
  } else {
    console.error('Invalid data format. The newData should be an array with 8 elements.');
  }

}

function isValidPassword(password){
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

}
export default arraySignupBehavior;