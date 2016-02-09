
window.onload = function(){
  var clock = document.getElementById('clock');
  var date = document.getElementById('date');
  // selleks, et ei oleks näha 0:0:0-i
  writeDate();
  WriteCurrentDate();
  // käivitan intervalli / 500ms = 0.5s
  window.setInterval(function(){
    // iga 500ms tagant käivitan writeDate´i
    writeDate();
    WriteCurrentDate();
  }, 500);
};

function WriteCurrentDate(){
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  date.innerHTML = " " + addZeroBefore(day) + "/" + addZeroBefore(month) + "/" + year + " ";
}



// võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
}

function addZeroBefore(number){
  if (number < 10){
    number = '0' + number;
  }
  return number;
}

function switch_color() {
  var ear_1 = document.getElementById('ear_1');
  ear_1.style.background = "grey";
  var ear_2 = document.getElementById('ear_2');
  ear_2.style.background = "grey";
  var leg_1 = document.getElementById('leg_1');
  leg_1.style.background = "grey";
  var leg_2 = document.getElementById('leg_2');
  leg_2.style.background = "grey";
  var circle_1 = document.getElementById('circle_1');
  circle_1.style.background = "grey";
  var circle_2 = document.getElementById('circle_2');
  circle_2.style.background = "black";
  var clock = document.getElementById('clock');
  clock.style.color = "white";
  var date = document.getElementById('date');
  date.style.color = "white";
}

function play_music(){
  var music = new Audio('alarm.mp3');
  music.play();
}
