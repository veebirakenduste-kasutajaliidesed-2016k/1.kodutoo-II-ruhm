window.onload = function(){

  var clock = document.getElementById('clock');
  var date = document.getElementById('date');
  var sizeText = document.getElementById('sizeText');
  var colorText = document.getElementById('colorText');
  document.getElementById('fontSlider').addEventListener("click", changeFontSize);
  document.getElementById('colorSlider').addEventListener("click", changeBackColor);


  writeTime();
  writeDate(); //selleks, et ei oleks alguses näha nulle näha
  changeFontSize();
  changeBackColor();

  window.setInterval(function(){
    writeDate();
    writeTime();
    changeFontSize();
    changeBackColor();
  }, 100);

};
function changeFontSize(){
  var fontslider = document.getElementById('fontSlider');
  clock.style.fontSize = fontslider.value*window.innerWidth*0.1 + 'px';
  date.style.fontSize = fontslider.value*window.innerWidth*0.1 + 'px';
}

function changeBackColor(){
    var colorslider = document.getElementById('colorSlider');
    var red = colorslider.value;
    var green = colorslider.value;
    var blue = colorslider.value;

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
    if (colorslider.value < 50){
      clock.style.color = "white";
      date.style.color = "white";
      clock.style.textShadow = "-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black";
      date.style.textShadow = "-3px 0 black, 0 3px black, 3px 0 black, 0 -3px black";
      sizeText.style.color = "white";
      colorText.style.color = "white";

    }else {
      clock.style.color = "black";
      date.style.color = "black";
      clock.style.textShadow = "-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white";
      date.style.textShadow = "-3px 0 white, 0 3px white, 3px 0 white, 0 -3px white";
      sizeText.style.color = "black";
      colorText.style.color = "black";
    }
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
  var fontslider = document.getElementById('fontSlider');

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
