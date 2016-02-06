window.onload = function() {

  var clock = document.getElementById("clock");
  var secondbar = document.getElementById("secondbar");
  var minutebar = document.getElementById("minutebar");
  var hourbar = document.getElementById("hourbar");


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
  var minuteloc = minute * 10 + second / 7.5;
  var hourloc = hour * 25.95 + minute / 10;
  secondbar.style.marginTop = secondloc + "px";
  minutebar.style.marginTop = minuteloc + "px";
  hourbar.style.marginTop = hourloc + "px";


}

function addZeroBefore(number) {

  if(number < 10) {
    number = "0" + number;
  }

  return number;
}
