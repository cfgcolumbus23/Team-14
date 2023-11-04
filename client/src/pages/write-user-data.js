const fs = require('fs');
var Buffer = require('buffer/').Buffer;

//Will write all of the user info to the file to store it
function writeArrayToFile(arrayOfArrays, filename) {
  let csvData = '';

  for (let i = 0; i < arrayOfArrays.length; i++) {
    const row = arrayOfArrays[i];
    csvData += row.join(',');

    if (i < arrayOfArrays.length - 1) {
      csvData += '\n'; // Add a newline character if it's not the last row
    }
  }

  csvData = Buffer.from(csvData).toString('base64');

  // Write the CSV data to a file
  fs.writeFileSync(filename, csvData, 'utf8');
}
const data = [["Jane","Doe",false,101,"Math",95,"Apple123","janedoe@gmail.com"],
["Steve","Jobs",true,0,"No Courses",0,"Apple1234","stevejobs@gmail.com"]];
writeArrayToFile(data, 'src/pages/Users.txt');
//export default writeArrayToFile;