const cp = require('child_process')

// execute a new child process
cp.exec("open -a Terminal .")

// execute a new child process
cp.exec("open http://google.com")

// execute a new child process
// err -> node js command error
// stderr -> terminal error
cp.exec("ls", (err, data, stderr) => {
    if (err) throw err;
    
    console.log("ls: " + data)
})