window.onload = function(){

  var clock = document.getElementById('clock');

    writeDate(); //selleks, et ei oleks näha 0:0:0

  window.setInterval(function(){
    //iga 500 sekundi tagant writeDate
    writeDate();
  }, 500);

};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  seconds = addZeroBefore(seconds);

  clock.innerHTML ="Current time: </br>" + hours + ':' + addZeroBefore(minutes) + ':' + seconds;
}

function addZeroBefore(number){

  if(number<10){
    number = "0" + number;
  }
  return number;
}

/*--------------------------------------------*/
function txtLarge() {
     document.getElementById("clock").style.fontSize = "150px";
 }
 function txtMedium() {
     document.getElementById("clock").style.fontSize = "70px";
 }
 function txtSmall() {
     document.getElementById("clock").style.fontSize = "30px";
 }

function ColorToGreen(){

  document.getElementById("clock").style.color = "green";
}

function ColorToRed(){

  document.getElementById("clock").style.color = "red";
}

function ColorToOrange(){

  document.getElementById("clock").style.color = "orange";
}

function ColorToLightBlue(){

  document.getElementById("clock").style.color = "blue";
}
