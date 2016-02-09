 window.onload = function(){
  loadClock();
  window.setInterval(function(){loadClock();}, 100);

  var scroll = document.getElementById("page");
  if (scroll.addEventListener) {
    scroll.addEventListener("mousewheel", MouseWheelHandler, false);
    scroll.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  }
  else scroll.attachEvent("onmousewheel", MouseWheelHandler);

  var fsize = 10;
  function MouseWheelHandler(e) {
  	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    fsize = Math.max(10, Math.min(400, fsize + (10 * delta)));
    //console.log(fsize);
    document.getElementById("clock-div").style.fontSize = fsize + "px";
    divPlacing();
    return false;
  }

  var x = event.keyCode;
  console.log(x);

};

function loadClock(){
  var clock = new Date();
  var hour = addZero(clock.getHours());
  var minute = addZero(clock.getMinutes());
  var second = addZero(clock.getSeconds());
  var clockDiv = document.getElementById('clock-div');
  clockDiv.innerHTML = hour + ":" + minute + ":" + second;
  divPlacing();
}

function addZero(number){
  if (number < 10){
    number = "0" + number;
  } return number;
}


function divPlacing(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  var clockDiv = document.getElementById('clock-div');
  var divw = clockDiv.offsetWidth;
  var divh = clockDiv.offsetHeight;
  clockDiv.style.position = "absolute";
  clockDiv.style.left = (w / 2) - (divw / 2) + "px";
  clockDiv.style.top = (h / 2) - (divh / 2) + "px";
}

var counter = 0;
function mouseClick(){
  var fonts = ["Comic Sans MS", "Courier New", "Arial", "Georgia"];
  counter++;
  document.getElementById("clock-div").style.fontFamily = '"' + fonts[counter] + '"';
  if(counter == 4){counter = 0;}
}
