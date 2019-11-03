const http = require('http')
const url = 'http://google.com/kevin'
http.get(url, (response) => {
    let buff = ''
    let c = 0
    response.on('data', (chunk) => {
        ++c
        buff += chunk
    })
    response.on('end', () => {
        console.log(buff)
        console.log(`Number of time visited: ${c}`)
    })
    response.on('error', () => {
        console.error('second error', error)
    })
}).on('error', (error) => {
    console.error(`Got error: ${error.message}`)
})