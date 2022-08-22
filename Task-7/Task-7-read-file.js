const fs = require('fs');
const readline = require('readline');

const file = './free_company_data.csv';

let linecount = 0; // Counter of entered lines
let all_linecount = 0; // Counter of all lines

const readable_stream = fs.createReadStream(file, 'utf8'); // Readable stream
const rl = readline.Interface(readable_stream) // Created readline interface

rl.on('line', (line) => {   // Read the lines and output only the name of the country with the line number
    
    all_linecount ++; 
    
    const country = line.split(',');

    if (country[0] != '""') {
        linecount ++;
        
        console.log( linecount, country[0]);
    }
});

rl.on('close', () => {
    console.log('Total lines with country:', linecount); // Output the total number of entered lines
    console.log('Total lines: ', all_linecount); // Output the total number of lines in file
    process.exit(0);
});




