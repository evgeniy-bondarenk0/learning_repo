const fs = require('fs');
const crypto = require('node:crypto'); 
const process = require('node:process');  
const File_Path = process.argv[2];

try {
    if (!File_Path) throw new Error('Error: The file path is not specified.'); // We throw an error if the file path is not specified
    if (!fs.existsSync(File_Path)) throw new Error('Error: The file path is not exist.'); // We throw an error if the file path is not exists.
      
        const hash = crypto.createHash('md5');
        const read_stream = fs.createReadStream(File_Path); // Create stream
        console.log('Reading file... ')

        read_stream.on('readable', () => { // Open stream and read file
            const data = read_stream.read();
            
            if (data){
                hash.update(data);
            }
        });
        
        read_stream.on('error', () => {
            read_stream.destroy();
            throw new Error('Error: An error occurred reading the file.')
        });
         
        read_stream.on('end', () => {
            console.log('Hash:', hash.digest('hex'),'File path:', File_Path);
        });
        
}catch(e){
    console.error(e.message); // Throw an error messages.
}


