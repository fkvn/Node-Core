const fs = require('fs')

if (fs.existsSync("storage")) {
    console.log("removed old storage ");
    // remove file async
    // this one won't work if the folder is not empty
    //  rmdir only work when the folder is empty
    fs.rmdir("./storage", err => {if (err) throw err})
}

if (fs.existsSync("storage-files")) {
    console.log("Already there");
}
else {
    console.log("directory created");
    fs.mkdirSync("storage-files", err => {if (err) {throw err;}})
}
 
fs.renameSync("./storage-files", "./storage")
console.log("renamed directory");
