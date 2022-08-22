const fs = require('fs')
const readline = require('readline')
const cliProgress = require('cli-progress')
const process = require('node:process')

const file = './free_company_data.csv'
const file_size = fs.statSync(file).size // Size of readable file

let linecount = 0 // Counter of entered lines
let all_linecount = 0 // Counter of all lines
let process_size = 0 // Size of processed lines

const readable_stream = fs.createReadStream(file, 'binary') // Readable stream
const rl = readline.Interface(readable_stream) // Created readline interface

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic) // Create a new progress bar instance

bar1.start(file_size, 0) // Initialize the bar

rl.on('line', (line) => {
    // Read the lines and output only the name of the country with the line number

    process_size += line.length + 1 // count length of line with \n
    bar1.update(process_size) // Update the current value of progress
    all_linecount++

    const country = line.split(',')
    if (country[0] != '""') {
        linecount++
    }
})

rl.on('close', () => {
    bar1.stop() // Stop the bar and go to next line
    /*eslint-disable*/
    console.log('Total lines with country: ' + linecount + '\n') // Output the total number of entered lines
    console.log('Total lines: ' + all_linecount) // Output the total number of lines in file
    /*eslint-enable*/
    process.exit(0)
})
