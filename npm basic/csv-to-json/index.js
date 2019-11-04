const fs = require('fs')
const csv = require('csvtojson/v1')
const path = require('path')

const csvFilePath =  './customer-data.csv';
let arr = []
console.log(csvFilePath)
csv()
    .fromFile(csvFilePath)
    .on('json',(jsonObj) => {
        console.log(jsonObj)
        arr.push(jsonObj)
    })
    .on('done',(error)=>{
        if (error) return process.exit(1)
        console.log(arr)
        fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error)=>{
            if (error) return process.exit(1)
            console.log('done')
            process.exit(0)
        })
    })