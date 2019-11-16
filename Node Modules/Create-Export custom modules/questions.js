
const questions = [ 
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];

const collectAnswers = require('./collectAnswers')

// this will trigger the collectAnswers function
// this fucnction will take questions as the input
// and return asnwers as result of its call back function
// after answers are returned, then it will process display in console for all answers has been entered.
collectAnswers(questions);