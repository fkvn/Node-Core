const fs = require('fs')

fs.copyFileSync("./blogs.json", "blogs1.json")

// rename and move file to new dir
fs.rename("./blogs.json", "./renamed files/newBloginNewDir.json", err => {
    console.log("Done renaming and moving blogs.json")
    console.log("Loading ........");
    if (err) throw err;
})


// setimeout for 5 seocnds to make sure every fucntion above is performed.
setTimeout(() => {
    
    // rename blogs1.json to blog.json
    fs.renameSync("./blogs1.json", "./blogs.json", err => {
        console.log("Rename blogs1.json to blogs.json");
        if (err) throw err;
    })

    // remove newBloginNewDir in renamed files dir
    fs.unlink("./renamed files/newBloginNewDir.json", err => {if (err) throw err})

}, 5000)



