
window.onload = function(){
  var clock = document.getElementById('clock');


  // selleks, et ei oleks näha 0:0:0-i
  writeDate();

  // käivitan intervalli / 500ms = 0.5s
  window.setInterval(function(){
    // iga 500ms tagant käivitan writeDate´i
    writeDate();
  }, 500);


};

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
  ear_1.style.background = "black";
  var ear_2 = document.getElementById('ear_2');
  ear_2.style.background = "black";
  var leg_1 = document.getElementById('leg_1');
  leg_1.style.background = "black";
  var leg_2 = document.getElementById('leg_2');
  leg_2.style.background = "black";
  var circle_1 = document.getElementById('circle_1');
  circle_1.style.background = "black";
  var circle_2 = document.getElementById('circle_2');
  circle_2.style.background = "grey";
  var clock = document.getElementById('clock');
  clock.style.color = "white";
}
