const crypto = require('node:crypto');
const process = require('node:process');  
const argument = process.argv[2];

if (!argument) { // If the argument is empty, stop the process and issue an error
        console.error('Please. Write a string as an argument. `node Task-3-create-hash.js <argument>`');
        process.exit(1);
}
    const hash = crypto.createHash('md5'); // Use method to create hash. Set the type of hashing
    hash.update(argument); // If an argument is present, we calculate the hash and output the result
    const message = {
        Input: argument,
        Hash: hash.digest('hex')
    }
console.log(message);
    