const EventEmitter = require('events')

class Emitters extends EventEmitter {}
emitter = new Emitters()

emitter.on('knock', function() {
    console.log('Who\'s there?')
})

emitter.on('knock', function() {
    console.log('Go away!')
})

emitter.emit('knock')
// because we remove the event listener, 
// so even if in line 17, we emitted 'knock' event again, it won't be triggered 
// because there is no listener to listen to the emitted event.
emitter.removeAllListeners()
emitter.emit('knock')


emitter.once('knock-once', function() {
    console.log('Who\'s there once?')
})

emitter.once('knock-once', function() {
    console.log('Go away once!')
})

// overhere, we don't need removeAllListeners() method 
// because we define that emmiter class only emit and trigger the knock-once only once.
emitter.emit('knock-once')
emitter.emit('knock-once')