const fs = require('fs')

const readStream = fs.createReadStream("./blogs.json", "UTF-8")

// createWriteStream will (remove file if it exists) create a new file with  a given name (including path if needed)
const writeStream = fs.createWriteStream("./newBlogs.json", "UTF-8")

// copy content by writing whatever we read from readStream
readStream.pipe(writeStream)


// write another file
const writeStream2 = fs.createWriteStream("./myFile.txt", "UTF-8")
writeStream2.write("Reading from users: \n")

// create and write a new file with content from users
// because we use the same writeStream object, it will append to the exists file
process.stdin.pipe(writeStream2)

