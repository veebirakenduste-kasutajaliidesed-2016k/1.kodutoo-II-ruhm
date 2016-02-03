window.onload= function(){
  var clock= document.getElementById('clock');
  var date= document.getElementById('date');
  var myVar = setInterval(writeDate, 1000);






};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  seconds = addZeroBefore(seconds);
  var day = today.getDate();
  var month = today.getMonth()+1;
  var year = today.getFullYear();
  clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
  date.innerHTML = addZeroBefore(day) + '.' + addZeroBefore(month) + '.' + year;
}

function addZeroBefore(number){
  if(number < 10){
    number = "0" + number;
  }

  return number;
}
function colorChange(){
    document.getElementById("date").style.color = "red";
}
function changeBackground(){
  document.getElementById("body").style.backgroundImage = "url('doge.jpg')";

}
function changeLocation(){
  document.getElementById("clock").style.textAlign="right";

}
function changeSize(){
  document.getElementById("clock").style.fontSize="xx-large";
}
