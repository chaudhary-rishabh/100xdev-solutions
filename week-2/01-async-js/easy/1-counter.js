// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

function createCounter() {
    var seconds = 0;
    setInterval(function () {
        seconds = seconds + 1;
        console.log(seconds);
    }, 1000)
    return seconds;
}

const ans = createCounter();
console.log(ans)