const fs = require('fs')

// synchronous function
// UTF-8 -> encode it and read it as a text file
// without UTF-8 -> file will be encoded and read as a buffer of binary 
const text = fs.readFileSync("./blogs.txt", "UTF-8")
console.log(text);

fs.readFile("./blogs.txt", "UTF-8", (err, text) => {
    console.log("Asynchronous file contents read");
    console.log(text);

})

