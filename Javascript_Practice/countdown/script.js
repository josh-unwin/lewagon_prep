const countdownDisplay = document.querySelector('[data-countdown]');
const startButton = document.querySelector('[data-start-button]');
const resetButton = document.getElementById('reset-button');
let secondsRemaining = 60;


let startCountdown = () => setInterval(countdown, 1000);


function countdown() {
	if (secondsRemaining === 0) {
		countdownDisplay.innerText = secondsRemaining.toString();
		window.setTimeout(() => {alert("Time out!")}, 500);
		reset();
		return;
	} else {
	countdownDisplay.innerText = secondsRemaining.toString();
	secondsRemaining = secondsRemaining - 1;
	}
}


function reset() {
	secondsRemaining = 60;
	clearInterval(startCountdown);
}

startButton.addEventListener('click', startCountdown);
resetButton.addEventListener('click',reset);