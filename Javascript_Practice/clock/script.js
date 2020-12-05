setInterval(setClock, 60);

const hourHand = document.querySelector('[data-hour-hand');
const minuteHand = document.querySelector('[data-minute-hand');
const secondHand = document.querySelector('[data-second-hand');
const digitalClock = document.querySelector('[data-digital-clock]');

function setClock() {
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds()/60
	const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
	const hoursRatio = (minutesRatio + currentDate.getHours())/12

	const currentTime = [currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds()];

	setRotation(hourHand,hoursRatio);
	setRotation(minuteHand,minutesRatio);
	setRotation(secondHand,secondsRatio);
	setTime(currentTime, digitalClock);
};


function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation',rotationRatio * 360);
}

function setTime(currentTime, digitalClock) {
	if (currentTime[0].toString().length < 2) {
		digitalClock.textContent = `0${currentTime[0]}`
	} else {
		digitalClock.textContent = `${currentTime[0]}`
	}
	if (currentTime[1].toString().length < 2) {
		digitalClock.textContent = digitalClock.textContent + (`:0${currentTime[1]}`);
	} else {
		digitalClock.textContent = digitalClock.textContent + (`:${currentTime[1]}`);
	}
	if (currentTime[2].toString().length < 2) {
		digitalClock.textContent = digitalClock.textContent + (`:0${currentTime[2]}`);
	} else {
		digitalClock.textContent = digitalClock.textContent + (`:${currentTime[2]}`);
	}

};

setClock();