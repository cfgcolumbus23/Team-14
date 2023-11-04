const fs = require('fs');

//Reads User Data from File, Reading from File User.txt and storing into a Database Array of Arrays
function readUserData(filePath){
    try{
        const data = fs.readFileSync(filePath, 'utf-8').split('\n');
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

export default readUserData;