const readline = require('readline');

const questions = [ 
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with node js? "
];


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) ;

// collectAnswers function
// take 'questions' as input and 'done' as a callback function (return after the function is done)

// f => f is default callback function if the callers don't define callback function
module.exports = (questions, done = f => f) => {
    const answers = [];
    // shortcut to deconstruct questions array and assign the first one to firstQ
    const [firstQ] = questions;

    // questionAnswered is also an function with 'answer' as an input 
    const questionAnswered = answer => {
        answers.push(answer)

        // check if users has answered all questions or not
        if (answers.length < questions.length) {
            // if not, then ask another question from 'questions' list
            rl.question(questions[answers.length], questionAnswered)
        } else {
            //  done will be a callback function which will return the answers back
            done(answers)
        }
    }

    // ask the first question and trigger a callback function - questionAnswered.
    rl.question(firstQ, questionAnswered);
}