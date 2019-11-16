
const questions = [ 
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

const collectAnswers = require('./Event_collectAnswers')

const answerEvents = collectAnswers(questions)

answerEvents.on("answer", answer => {
    console.log(`question answered: ${answer}`)
})

// complete handler will process in-order
answerEvents.on("complete", answers => {
    console.log("Complete: Thank you for your answers");
    console.log(answers);
    process.exit()
})

answerEvents.on("complete", () => process.exit())