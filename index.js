const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const next = document.getElementById('next');
const results = document.getElementById('results');

// load sounds
const chime = new Audio('sounds/chime.wav');
const gong = new Audio('sounds/gong.wav');

const WARNING_TIME_SECONDS = 30;
const BUZZER_TIME_SECONDS = 45;

// timeout
let t;

// simple clock
let seconds = 0;
function tick() {
    seconds++;

		if (seconds === WARNING_TIME_SECONDS) {
			chime.play();
		} else if (seconds === BUZZER_TIME_SECONDS) {
			gong.play();
		}

		// update text
    time.textContent = seconds > 9 ? seconds : "0" + seconds;
		t = setTimeout(tick, 1000);
}

function endCurrentTimer() {
	clearTimeout(t);

	// add seconds to list
	var div = document.createElement("div");
	div.textContent = seconds;
	results.appendChild(div)
}

function nextPerson() {
	endCurrentTimer();

	seconds = 0;
	tick();
}


/* Start button */
start.onclick = tick;

/* Stop button */
stop.onclick = endCurrentTimer;

/* next person */
next.onclick = nextPerson;
