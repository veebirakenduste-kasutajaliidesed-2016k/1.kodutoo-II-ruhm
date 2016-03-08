window.onload = function(){

var clock = document.getElementById('clock');
writeDate();//selleks et poleks näha 00:00:00
//käivitan intervalli
window.setInterval(function(){
  writeDate();

}, 500);

};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = addZeroBefore(today.getMinutes());
  var seconds = addZeroBefore(today.getSeconds());
  var days = today.getDay();
  var months = today.getMonth();
  var years = today.getFullYear();

clock.innerHTML ='<p class = "hours">'+ hours + '</p>:<p class = "minutes">' + minutes + '</p>:<p class = "seconds">'+ seconds + '</p><br><p class = "days">'+ days + '</p>:<p class = "months">' + months + '</p>:<p class = "years">'+ years + '</p>';


}

function addZeroBefore(number){

if(number < 10){
  number = "0" + number;
}

  return number;
}
