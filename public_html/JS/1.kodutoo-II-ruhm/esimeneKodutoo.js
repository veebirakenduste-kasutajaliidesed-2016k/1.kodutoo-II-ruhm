window.onload = function(){

  var clock = document.getElementById('clock');
  writeDate(); //Selleks, et ei oleks näha esialgset 0:0:0, instant clock

  //window.setInterval(writeDate, 500);
  window.setInterval(function(){
    writeDate();
  }, 500);

  window.setInterval(function(){
    changeBackgroundColor();
  }, 10000);

  context = document.getElementById("canvas").getContext("2d");
  context.strokeStyle = "#FF000";
  radius = document.getElementById("canvas").height/2;
  context.translate(radius, radius);
  //console.log(radius);

  clockDial = document.getElementById("canvas").getContext("2d");
  clockDial.strokeStyle = "#000000";


  context.fillStyle = '#333';
  context.fill();
  drawIndicators();

  timer = window.setInterval(Ticking, 200);
};

function writeDate(){
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var day = today.getDate();
  var days = ["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"];
  //var month = today.getMonth();
  //var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = today.getFullYear();

  clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
  date.innerHTML = addZeroBefore(today.getDate()) + "/" + addZeroBefore((today.getMonth()+1)) + "/" + year;
  weekday.innerHTML = "Täna on " + days[today.getDay()];
}

function addZeroBefore(number){
  if(number >= 0 && number < 10){
    number = '0' + number;
  }
  return number;
}

function changeBackgroundColor(){
  var todayDate = new Date();
  var hoursColor = todayDate.getHours();
  if(hoursColor >= 7 && hoursColor < 12){
    document.body.style.backgroundColor = "PapayaWhip"; //7-12
  }
  if(hoursColor >= 12 && hoursColor < 15){
    document.body.style.backgroundColor = "PeachPuff"; //12-15
  }
  if(hoursColor >= 15 && hoursColor < 18){
    document.body.style.backgroundColor = "Coral"; //15-18
  }
  if(hoursColor >= 18 && hoursColor < 21){
    document.body.style.backgroundColor = "Plum"; //18-21
  }
  if(hoursColor >= 21 && hoursColor < 23){
    document.body.style.backgroundColor = "RoyalBlue"; //21-4
  }
  if(hoursColor >= 0 && hoursColor < 7){
    document.body.style.backgroundColor = "Midnightblue"; //4-7
  }
}

var context;
var clockDial;
var timer;
var radius;
var hourNumberRotation;
var hourNumbers;


function drawIndicators(){
	clockDial.save();
	clockDial.strokeStyle = "#000000";
	clockDial.lineWidth = radius * 0.025;
	clockDial.beginPath();
	clockDial.arc(0,0,140,140, Math.PI*2, true);
	clockDial.stroke();
	clockDial.closePath();
	for(var i = 0; i < 2; i ++){ //3, 6, 9, 12 markerid
		clockDial.fillRect(110, -3, 15, 6);
		clockDial.fillRect(-110, -3, -15, 6);

		clockDial.rotate(90 * Math.PI/180);
	}
	for(var m = 0; m < 6; m ++){ //Muud tunnimarkerid
		clockDial.fillRect(110, -3, 10, 6);
		clockDial.fillRect(-110, -3, -10, 6);

		clockDial.rotate(30 * Math.PI/180);
	}
	for(var j = 0; j < 24; j ++){ //Minutid
		clockDial.fillRect(110, -3, 5, 2);
		clockDial.fillRect(-110, -3, -5, 2);

		clockDial.rotate(7.5 * Math.PI/180);
	}
	for(hourNumbers = 0; hourNumbers < 13; hourNumbers++){
		context.font = radius*0.075 + "px arial";
		context.textBaseline="middle";
		context.textAlign="center";
		hourNumberRotation = hourNumbers * Math.PI / 6;
		context.rotate(hourNumberRotation);
		context.translate(0, -radius*0.875);
		context.rotate(-hourNumberRotation);
		context.fillText(hourNumbers.toString(), 0, 0);
		context.rotate(hourNumberRotation);
		context.translate(0, radius*0.875);
		context.rotate(-hourNumberRotation);
		clockDial.restore();
	}
	clockDial.restore();
}

	function Ticking(){
		context.clearRect(-150, -150, 300, 300);  //Muidu jääksid seierite eelmise asukohad kõik alles
		drawIndicators();

		context.save();
		context.strokeStyle = "#FF0000";
		var analogTime = new Date();
		var analogSecond = analogTime.getSeconds();
		var analogMinute = analogTime.getMinutes();
		var analogHour = analogTime.getHours();
		if (analogHour >= 12){
			analogHour = analogHour - 12;
		}
		context.save();
		//Tunniseier
		context.fillStyle = "#333333";
		context.rotate((analogHour * 30 + analogMinute / 2) * Math.PI / 180);
		context.fillRect(-4,4,8,-80);

		context.restore();
		context.save();

		//Minutiseier
		context.fillStyle = "#555555";
		context.rotate((analogMinute * 6 + analogSecond / 10) * Math.PI / 180);
		context.fillRect(-2,6,4,-120);

		context.restore();

		//Sekundiseier
		context.rotate(analogSecond * 6 * Math.PI / 180);
		context.fillStyle = "#FF0000";
		context.fillRect(-1,8,2,-135);

		context.restore();
}

function checkKey(e){
    e = e || window.event;
    var keyPressed = e.keyCode;
    //left arrow
    if (keyPressed == 37 ){
      document.body.style.color = "white";
    }
    //up arrow
    if (keyPressed == 38 ){
      document.body.style.backgroundImage = "url('6976138-wood-pattern-background.jpg')";
    }
    //right arrow
    if (keyPressed == 39 ){
      document.body.style.color = "black";
    }
    //down arrow
    if (keyPressed == 40 ){
      document.body.style.backgroundImage = "initial";
    }
}

document.onkeydown = checkKey;
