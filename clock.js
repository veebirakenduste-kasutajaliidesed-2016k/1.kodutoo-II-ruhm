window.onload = function() {

  var clock = document.getElementById("clock");
  var secondbar = document.getElementById("secondbar");


  writeDate();

  window.setInterval(function() {
    writeDate();

  }, 50);

};



function writeDate() {

  var d = new Date();
  var minute = d.getMinutes();
  var hour = d.getHours();
  var second = d.getSeconds();
  var millisecond = d.getMilliseconds();

  clock.innerHTML = ("Kell on: " + addZeroBefore(hour) + ":" + addZeroBefore(minute) + ":" + addZeroBefore(second));

  var secondloc = second * 10 + millisecond / 100;
  secondbar.style.marginTop = secondloc + "px";


}

function addZeroBefore(number) {

  if(number < 10) {
    number = "0" + number;
  }

  return number;
}
