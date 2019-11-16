const EvenEmitter = require('events')

class Job extends EvenEmitter {}

job = new Job()

job.on('done1', function(timeDone) {
    console.log('Job was pronounced done at', timeDone)
})

job.emit('done1', new Date())
job.removeAllListeners()