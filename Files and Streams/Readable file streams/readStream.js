// **** read data with fs module
const fs = require('fs')

// blogs.json as text stream
const readStream = fs.createReadStream("./blogs.json", "UTF-8");

// read data by listening data event
console.log("Reading by stream: ");
readStream.on("data", data => {
    console.log(`I read ${data.length - 1} characters of text` );  
});

readStream.once("data", data => {
    console.log(`${data}` );  
});

readStream.on("end",() => {
    console.log("Finished reading ");
})


