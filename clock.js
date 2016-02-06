window.onload = function() {

  var clock = document.getElementById("clock");

  var secondbar = document.getElementById("secondbar");
  var minutebar = document.getElementById("minutebar");
  var hourbar = document.getElementById("hourbar");

  var roundhour = document.getElementById("roundhour");
  var roundminute = document.getElementById("roundminute");
  var roundsecond = document.getElementById("roundsecond");

  document.getElementById("canvas").addEventListener("drag", function() {
    console.log("klick");
  });

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
  var isactive = false;

  clock.innerHTML = ("Kell on: " + addZeroBefore(hour) + ":" + addZeroBefore(minute) + ":" + addZeroBefore(second));

  var secondloc = second * 10 + millisecond / 100;
  var minuteloc = minute * 10 + second / 7.5;
  var hourloc = hour * 25.95 + minute / 2.5;
  secondbar.style.marginTop = secondloc + "px";
  minutebar.style.marginTop = minuteloc + "px";
  hourbar.style.marginTop = hourloc + "px";

  var roundsecondloc = second * 6;
  var roundminuteloc = minute * 6;
  var roundhourloc = hour * 10 + minute / 2.5;

  roundsecond.style.transform = "rotate(" + roundsecondloc + "deg)";
  roundminute.style.transform = "rotate(" + roundminuteloc + "deg)";
  roundhour.style.transform = "rotate(" + roundhourloc + "deg)";

}

function addZeroBefore(number) {

  if(number < 10) {
    number = "0" + number;
  }

  return number;
}
