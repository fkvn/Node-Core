const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    
    // Math.floor() will create a decimal value to calculate current %
    const p = Math.floor((currentTime / waitTime) * 100);

    // clear the current line
    process.stdout.clearLine();

    // set the cursor of the current line to 0 (start again from the beginning)
    process.stdout.cursorTo(0);

    // write a new content to the current Line
    process.stdout.write(`waiting .... ${p}%`);
}

console.log(`setting a ${waitTime / 1000} second delay`);

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("done");
}

// the setInterval funtion should go with setTimeout 
// because the function incTime will run forever without stopping if we don't use setTimeout
// the setInterval call incTime every 5 seconds by increasing waitInterval += 500
const interval = setInterval(incTime, waitInterval);

// setInterval will report how long you have been waiting to stop
// setTimeout will be executed after waiting (delay) "waitTime" = 5 seconds (5000)
setTimeout(timerFinished, waitTime);