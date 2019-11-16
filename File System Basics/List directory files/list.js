const fs = require('fs')

console.log("started reading files");
// readdirSync is synchronous function to make sure we get all files before doing anything else
const files = fs.readdirSync('./../../Node Modules');
console.log("complete")
console.log(files)



console.log("using asynchronous function: readdir");
// readdir is asynchronous function (non-blocking)
fs.readdir('./../../Node Modules', (err, files) => {
    if (err) {
        throw err;
    }
    console.log("complete")
    console.log(files)
});