const fs = require('fs');

function writeArrayToFile(arrayOfArrays, filename) {
  let csvData = '';

  for (let i = 0; i < arrayOfArrays.length; i++) {
    const row = arrayOfArrays[i];
    csvData += row.join(',');

    if (i < arrayOfArrays.length - 1) {
      csvData += '\n'; // Add a newline character if it's not the last row
    }
  }

  // Write the CSV data to a file
  fs.writeFileSync(filename, csvData, 'utf8');
}

export default writeArrayToFile;