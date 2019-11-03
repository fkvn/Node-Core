const EventEmitter = require('events')

class Job extends EventEmitter {
    constructor(props) {
        super(props)
        this.on('start', () => {
            // process method
            this.process()
        })
    }
    process() {
        setTimeout(() => {
            this.emit('done1', {completedOn: new Date()})
        }, 700)
    }
}

module.exports = Job