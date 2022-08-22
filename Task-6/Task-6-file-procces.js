const fs = require('fs');

const file = './free_company_data.csv'; // Path to large file
let data = '';

const file_stream = fs.createReadStream(file); // Create readable stream.

file_stream.on('error', (err) => console.error(err));

file_stream.on('data', (chunk) => data += chunk); // Readed data to variable.

file_stream.on('end', () => console.log('Reading completed.'));

