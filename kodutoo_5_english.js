var ticker;
var strikeSound;
var strikeCount = 0;
var tickTime = 250;
var allMonths=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var timeTalker = new Audio();
var timeWords = [];
var audioURL='http://www.cs.tlu.ee/~rinde/media/soundid/clock_sound/';


window.onload = function(){
	strikeSound = document.getElementById('strike');
	//strikeSound.play();
	ticTac();
	checkForDay(new Date());
	ticker = setInterval(ticTac, tickTime);
	document.getElementById('lobise').addEventListener('click',startTalking);
};

function ticTac(){
	var timeNow = new Date();
	//document.getElementById('digiClock').innerHTML = timeNow;
	var secondNow = timeNow.getSeconds();
	//console.log(secondNow);
	var hourNow = timeNow.getHours();
	var minuteNow = timeNow.getMinutes();
	document.getElementById('digiClock').innerHTML = hourNow + ':' + minuteNow + ':' + secondNow;
	document.getElementById('handS').style.transform = 'rotate(' + (secondNow * 6) + 'deg)';
	//document.getElementById('handS').setAttribute('style', 'transform: rotate('  + (secondNow * 6) + 'deg)');
	document.getElementById('handM').style.transform = 'rotate(' + (minuteNow * 6 + secondNow * 0.1) + 'deg)';
	document.getElementById('handH').style.transform = 'rotate(' + (hourNow * 30 + minuteNow / 2) + 'deg)';
	//l?¶?¶me kella
	if(minuteNow === 0 && secondNow === 0 && timeNow.getMilliseconds() < tickTime){
		if(document.getElementById('kasTiliseb').checked){
			strikeCount = hourNow;
			if(strikeCount > 12){
				strikeCount -= 12;
			}
		strikeBell();
		}//if checked
	}//if aeg
	if(minuteNow === 0 && secondNow === 0 && hourNow === 0){
		checkForDay(timeNow);
	}
}

function strikeBell(){
	if(strikeCount > 0){
		strikeSound.addEventListener('ended', strikeBell);
		strikeSound.play();
		strikeCount --;
	} else {
		strikeSound.removeEventListener('ended', strikeBell);
	}
}

function checkForDay(timeNow){
	var todayDate = timeNow.getDate();
	var todayMonth = timeNow.getMonth();
	var todayYear = timeNow.getFullYear();
	var todayWeekday = timeNow.getDay();
	//console.log('n?¤dalap?¤ev: ' + allDays[todayWeekday]);
	//document.getElementById('paev').innerHTML = 'Täna on: ' + todayDate + '. ' + todayMonth + '. ' + todayYear;
	document.getElementById('paev').innerHTML = 'Today is: ' + todayDate + ' ' + allMonths[todayMonth] + ' ' + todayYear;
}

function startTalking(){
	document.getElementById('lobise').removeEventListener('click',startTalking);
	var timeNow = new Date();
	//alustan ?¶eldavate s?µnade massiivi täitmist
	//timeWords[0] = 'kellon';
	timeWords.push('timeis');
	numberToWords(timeNow.getHours());
	if(timeNow.getMinutes()<10){
		timeWords.push(0);
	}
	numberToWords(timeNow.getMinutes());
	console.log(timeWords);
	sayTime();
}

function numberToWords(timeValue){
	var ten = Math.floor(timeValue / 10)* 10;
	var one = timeValue % 10;
	var teen = timeValue;
	if(timeValue < 10){
		timeWords.push(one);
	}
	if(timeValue >= 10 && timeValue <= 19){
		timeWords.push(teen);
	}
	if(timeValue >= 20){
		timeWords.push(ten);
		if(one > 0){
			timeWords.push(one);
		}
	}
}

function sayTime(){
	if(timeWords.length > 0){
		timeTalker.src = audioURL + timeWords[0] + '.mp3';
		timeTalker.addEventListener('ended', sayTime);
		timeWords.shift();
		timeTalker.play();
	} else {
		timeTalker.removeEventListener('ended', sayTime);
		document.getElementById('lobise').addEventListener('click',startTalking);
	}
}
