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

  clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
}

function addZeroBefore(number){

  if(number<10){
    number = "0" + number;
  }
  return number;
}
