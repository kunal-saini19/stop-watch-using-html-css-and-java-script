let timer;
let isRunning = false;
let elapsedTime = 0;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime += 10;
            displayTime();
            rotateHand();
        }, 10);
    }
}

function pauseStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = 0;
    displayTime();
    document.getElementById("laps").innerHTML = "";
    document.getElementById("hand").style.transform = "rotate(0deg)";
}

function lapStopwatch() {
    const laps = document.getElementById("laps");
    const lapTime = document.createElement("div");
    lapTime.textContent = formatTime(elapsedTime);
    laps.appendChild(lapTime);
}

function displayTime() {
    document.getElementById("display").textContent = formatTime(elapsedTime);
}

function rotateHand() {
    const hand = document.getElementById("hand");
    const rotation = (elapsedTime / 1000) * 6; // 6 degrees per second
    hand.style.transform = `rotate(${rotation}deg)`;
}

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = Math.floor((ms % 1000) / 10);
    return `${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

function pad(number) {
    return number < 10 ? "0" + number : number;
}
