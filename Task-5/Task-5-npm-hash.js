const md5_file = require('md5-file');
const File_Path = process.argv[2];

if (!File_Path) throw new Error('The file path is not specified.'); // We throw an error if the file path is not specified
        
md5_file(File_Path).then(console.log); // Used async type of module