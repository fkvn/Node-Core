const http = require('http')
const fs = require('fs')
const path = require('path')
const uuidv1 = require('uuid/v1')
const url = 'http://nodeprogram.com'

// url is set to default in case users didn't give the url -> downloadPage(process.argv[2])
const downloadPage = (url) => {
    console.log('downloading ', url)

    // fetchPage is a function take url and a callback function as input and makes get request
    const fetchPage = (urlF, callback) => {
        http.get(urlF, (res) => {
            let buff = ''
            res.on('data', (chunk) => {
                buff += chunk
            })
            res.on('end', () => {
                // after the response is end, we call a callback function and send html page as second input.
                // we we don't call the callback function, this get request will never finish  (just timeout)
                callback(null, buff)
            })
        }).on('error', (error) => {
            console.error(`Got error: ${error.message}`)
            callback(error)
        })
    }

    // create a unique folder name using module uuid -> always create a new folder
    const folderName = uuidv1()

    // create a folder by the created folder name
    // mkdirSync is synchronous, because we actually run this code by ourselves, not by multipe clients
    fs.mkdirSync(folderName)

    // call fetchPage function with url and a callback function
    fetchPage(url, (error, data) => {
        // because the get method is asynchronous, we can create the files url.txt and file.html inside the callback function
        if (error) return console.log(error)

        // writeFileSync is synchronous, it will wait until Get method return a callback function at line 19
        fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)
        
        fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
        console.log('downloading is done in folder', folderName)
    })
}


downloadPage(process.argv[2])
// refesh your directory to see a new folder with 2 files inside