const path = require("path");

const dirUploads = path.join(__dirname, 'www', 'files', 'uploads');

// display the full path for "uploads directory"
console.log(dirUploads);

const util = require('util');

// display the file name with log information (date + time)
util.log(path.basename(__filename));

// display the message with log information (date + time)
util.log(" ^ The name of the current file");


const v8 = require('v8');
// with v8 modules, it helps us to display log of memory 
util.log(v8.getHeapStatistics());

// ******** destructure from the modules
const { log } = require('util') // destructure only the log function of 'util' module
const { getHeapStatistics } = require('v8') // the same like log

log(getHeapStatistics()); // the same result like previous codes.