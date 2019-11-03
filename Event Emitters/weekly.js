var Job = require('./job')
var job = new Job()

job.on('done1', (details) => {
    console.log('Weekly email job was completed at', details.completedOn)
})

// job.process()
job.emit('start')