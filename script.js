// Get button and display elements
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');

let timer;
let seconds = 0;
let isRunning = false;

// Function to update the time display
function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    
    if (hrs < 10) hrs = '0' + hrs;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;
    
    display.textContent = `${hrs}:${mins}:${secs}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
}

// Event listeners for button clicks
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
