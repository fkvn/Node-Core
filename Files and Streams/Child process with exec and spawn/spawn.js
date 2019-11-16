// spawn function is used with child processes for executing external applications

const cp = require('child_process');

const questionApp = cp.spawn("node", ["questions.js"])

questionApp.stdin.write("Kevin \n")
questionApp.stdin.write("US \n")
questionApp.stdin.write("Fun \n")

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`)
})

questionApp.on("close", () =>{
    console.log(`questionApp process exited`);
})