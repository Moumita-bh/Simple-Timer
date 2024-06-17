let timer;
let isRunning = false;
let seconds = 0;

function updateTimerDisplay() {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${minutes}:${sec}`;
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
});

document.getElementById('stopButton').addEventListener('click', () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
});

document.getElementById('resetButton').addEventListener('click', () => {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    updateTimerDisplay();
});

// Initial display
updateTimerDisplay();
