window.onload = function(){

  var clock = document.getElementById('clock');
  var date = document.getElementById('date');
  document.getElementById('slider').addEventListener("click", Change);


  writeTime();
  writeDate(); //selleks, et ei oleks alguses näha nulle näha
  Change();

  window.setInterval(function(){
    writeDate();
    writeTime();
  }, 500);

};
function Change() {
  var fontslider = document.getElementById('slider');
  clock.style.fontSize = fontslider.value*window.innerWidth*0.1 + 'px';
  date.style.fontSize = fontslider.value*window.innerWidth*0.1 + 'px';
}

function writeTime(){
  var time = new Date();

  var hour = addZeroBefore(time.getHours());
  var min = addZeroBefore(time.getMinutes());
  var sec = addZeroBefore(time.getSeconds());

  clock.innerHTML = hour + ':'+ min + ':' + sec;

}

function writeDate(){
  var time = new Date();
  var fontslider = document.getElementById('slider');

  var month = addZeroBefore(time.getMonth());
  var year = addZeroBefore(time.getFullYear());
  var day = addZeroBefore(time.getDate());

  date.innerHTML = day + '/' + month + '/' + year;
}

function addZeroBefore(number){
  if(number < 10){
    number = "0" + number;
  }

  return number;

}
