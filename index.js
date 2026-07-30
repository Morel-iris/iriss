
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start');
    const timeSpans = document.querySelectorAll('.time span');

    // Set your countdown time here (hours, minutes, seconds)
    let countdownTime = {
        hours: 20,
        minutes: 20,
        seconds: 10
    };

    let totalSeconds = countdownTime.hours * 3600 + countdownTime.minutes * 60 + countdownTime.seconds;
    let intervalId = null;

    function updateDisplay(seconds) {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        timeSpans[0].textContent = String(hrs).padStart(2, '0');
        timeSpans[1].textContent = String(mins).padStart(2, '0');
        timeSpans[2].textContent = String(secs).padStart(2, '0');
    }

    function startCountdown() {
        if (intervalId) return; 

        intervalId = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(intervalId);
                intervalId = null;
                alert("Time's up!");
                return;
            }
            totalSeconds--;
            updateDisplay(totalSeconds);
        }, 1000);
    }

    updateDisplay(totalSeconds);

    startBtn.addEventListener('click', (e) => {
        e.preventDefault();
        startCountdown();
    });
});

