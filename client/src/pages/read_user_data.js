import React from 'react';
var Buffer = require('buffer/').Buffer;

//Reads User Data from File, Reading from File User.txt and storing into a Database Array of Arrays
function readUserData(filePath){

    console.log(filePath);

    try{
        const data = fs.readFileSync(filePath, 'utf-8');
        data = Buffer.from(data, 'base64').toString('ascii').split();

        const database = [];
        //Reads Each Value split by a comma
        for(const line of data){
            const values = line.split(',');
            database.push(values);
        }
        return database;
    }catch(err){
        console.error('Error reading from file',err);
        return null;
    }

}

//Export Function
export default readUserData;