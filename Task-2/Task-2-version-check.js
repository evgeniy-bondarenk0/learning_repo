const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec); // without it does not work

const tools = ['docker', 'git', 'npm', 'nvm', 'node'] // List of tools
const promises = []

tools.forEach((element) => {
    promises.push(exec(element + ' --version'))
})

Promise.all(promises).then((results) => {
    results.forEach((element, index) => {
        console.log(tools[index]+':', element.stdout)
        })
    }).catch((error) => {
            const message = {
                Code: error.code,
                Error: error.stderr
            }
            console.error(message)
            process.exit(error.code)
        })