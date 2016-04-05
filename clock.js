window.onload = function(){

  var clock = document.getElementById('clock');
  var date = document.getElementById('date');

  writeDate(); //selleks, et ei oleks alguses näha 0:0:0-i
  writeTime();

  window.setInterval(function(){
    writeDate();
  }, 500);

};

function writeTime(){
  var time = new Date();
  var hour = addZeroBefore(time.getHours());
  var min = addZeroBefore(time.getMinutes());
  var sec = addZeroBefore(time.getSeconds());


  clock.innerHTML = hour + ':'+ min + ':' + sec;

}

function writeDate(){
  var time = new Date();
  var month = addZeroBefore(time.getMonth());
  var year = addZeroBefore(time.getFullYear());
  var day = addZeroBefore(time.getDate());
  var hour = addZeroBefore(time.getHours());
  var min = addZeroBefore(time.getMinutes());
  var sec = addZeroBefore(time.getSeconds());
  date.innerHTML = day + '/' + month + '/' + year;
}

function addZeroBefore(number){
  if(number < 10){
    number = "0" + number;
  }

  return number;

}
