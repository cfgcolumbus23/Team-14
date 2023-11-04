import React from 'react';
import {database} from './data.js';
function SignInButton(email, password) {
        for (const i = 0; i < database.length; i++) {
            if (database[i][7] === email && database[i][6] === password) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    
    export default SignInButton;
    