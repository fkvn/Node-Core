const fs = require('fs')
const blogs = require("./blogs.json")

blogs.users.forEach((ele, index) => {
    console.log(ele);
    fs.appendFile("./storage-files/users.md", `
        User: ${index}
        First Name: ${ele.firstName}
        Last Name:  ${ele.lastName}
        Email: ${ele.email}
    `, err => {
        if(err) throw err
    })
});