const events = require('events');

// create new instance of event 
const emitter = new events.EventEmitter();

// handle events if this even is raised later
emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`)
})

// raise events - customEvent
    // first arg: event's name
    // following args: the data we want to pass to the event callback function in event handler 
emitter.emit("customEvent", "Hello World", "Computer") 
emitter.emit("customEvent", "That's pretty cool huh?", "Alex")


// handle events of raising events from users' input
// read the data by listening "data" event
process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {
        emitter.emit("customEvent", "Goodbyte!", "process");
        process.exit();
    }
    // raise customEvent to the whatever event handler who takes care of 'customEvent
    emitter.emit("customEvent", input, "terminal");
})
