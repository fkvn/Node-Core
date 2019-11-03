const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url, (response) => {
    let c = 0
    response.on('data', (chunk) => {
        c++
        console.log(chunk.toString('utf8'))
    })
    response.on('end', () => {
        console.log(`response has ended with ${c} chuck(s)`)
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})