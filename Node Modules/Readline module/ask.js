const readline = require('readline');

const rl = readline.createInterface({
    // process.stdin will read from console
    input: process.stdin,

    // process.stdout will display to console
    output: process.stdout
})

// question is asynchronous function with a callback function
// a callback function will wait for the answer from users

// due to process.stdout from rl -> "How do you like Node?" will be displayed first
// then the call back will wait until process.stdin can read something as an answer
rl.question("How do you like Node? ", answer => {
    console.log(`Your answer:  ${answer}`);
})
