const fs = require('fs');
const crypto = require('node:crypto'); 
const process = require('node:process');
const stream = require('stream')  
const File_Path = process.argv[2];

    if (!File_Path) throw new Error('Error: The file path is not specified.'); // We throw an error if the file path is not specified
    if (!fs.existsSync(File_Path)) throw new Error('Error: The file path is not exist.'); // We throw an error if the file path is not exists.
        
        console.log('Reading file...');

        const hash = crypto.createHash('md5');
        const input = fs. createReadStream(File_Path);
        
        process.stdout.write('Hash: ');

        stream.pipeline(input, hash.setEncoding('hex'), process.stdout, (err) => {
            if (err) throw new Error(err);
        });

        input.on('end', () => {
            console.log(' File path:', File_Path);
        });
    


