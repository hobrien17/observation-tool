var timing = false;
var mins = 0;
var secs = 0;

var typing = false;
var recordedMins = 0;
var recordedSecs = 0;

function doubleDigit(n){
    return n > 9 ? "" + n: "0" + n;
}

function start() {
	timing = true;
}

function stop() {
	timing = false;
}

function reset() {
	mins = 0;
	secs = 0;

	document.getElementById("timer").innerHTML = "Timer: " + doubleDigit(mins) + ":" + doubleDigit(secs);
}

function increment() {
	if(timing) {
		secs += 1
		if(secs >= 60) {
			mins += 1
			secs = 0
		}
	
		document.getElementById("timer").innerHTML = "Timer: " + doubleDigit(mins) + ":" + doubleDigit(secs);
	}
}

setInterval(increment, 1000);

function inputType(event) {
	if(event.keyCode == 13) {
		buttonPress();
	} else if(!typing) {
		typing = true;
		recordedMins = mins;
		recordedSecs = secs;
	}
}

function buttonPress() {
	if(document.getElementById("inp").value.length > 0) {
		document.getElementById("out").value += doubleDigit(recordedMins) + ":" + doubleDigit(recordedSecs) + " | " + document.getElementById("inp").value + "\n";
		document.getElementById("inp").value = "";
	}
	typing = false;
}

function clear() {
	typing = false;
	document.getElementById("inp").value = "";
}

function downloadData() {
	var data = document.getElementById("out").value

	var hiddenElement = document.createElement('a');

	hiddenElement.href = 'data:attachment/text,' + encodeURI(data);
	hiddenElement.target = '_blank';
	hiddenElement.download = 'output.txt';
	hiddenElement.click();
}

function clearData() {
	document.getElementById("out").value = "";
}