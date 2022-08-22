const process = require('process');

// Save task start time
const startTime = process.hrtime();

const DELAY_TIME = 10000; // Set timer delay

console.log('Hello world');
// Start timer
const time = setTimeout(() => {
    console.log('Goodbye world')
}, DELAY_TIME);

// Function for exit from task and print message
const endTask = () => {
    const endTime = process.hrtime(); // Save task end time
    const difference = (endTime[0] - startTime[0]) // difference calculating
    console.log('Stopped by user after '+ difference +' seconds')
    clearTimeout(time)
};
// Signal events handlers
process.on('SIGINT', endTask);
process.on('SIGQUIT', endTask);
process.on('SIGTERM', endTask)
