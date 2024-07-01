let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
    //this will add the leading 0 on timer when less than 2 digits.  We specified we want 2, and that 0 is the "pad" at the start, when necessary
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    // % gives us remainder after subtracking 60 (this removes elapsed full minutes), this is the modules operator
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) stopClock ()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}