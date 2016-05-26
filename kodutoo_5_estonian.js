var ticker;
var strikeSound;
var strikeCount = 0;
var tickTime = 250;
var allMonths = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
var timeTalker = new Audio();
var timeWords = [];
var audioURL = 'http://www.cs.tlu.ee/~rinde/media/soundid/kellaheli/';


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
	//lööme kella
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
document.getElementById('paev').innerHTML = 'Täna on: ' + todayDate + '. ' + allMonths[todayMonth] + '. ' + todayYear;
}

function startTalking(){
	document.getElementById('lobise').removeEventListener('click',startTalking);
	var timeNow = new Date();
	//alustan ?¶eldavate s?µnade massiivi t?¤itmist
	//timeWords[0] = 'kellon';
	timeWords.push('kellon');
	numberToWords(timeNow.getHours());
	timeWords.push('ja');
	numberToWords(timeNow.getMinutes());
	if(timeNow.getMinutes() == 1){
		timeWords.push('minut');
	} else {
		timeWords.push('minutit');
	}
	console.log(timeWords);
	sayTime();
}

function numberToWords(timeValue){
	var tens = Math.floor(timeValue / 10);
	var ones = timeValue % 10;
	if(timeValue <= 10){
		timeWords.push(timeValue);
	}
	if(timeValue >= 11 && timeValue <= 19){
		timeWords.push(ones);
		timeWords.push('teist');
	}
	if(timeValue >= 20){
		timeWords.push(tens);
		timeWords.push('kymmend');
		if(ones > 0){
			timeWords.push(ones);
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
