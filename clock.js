window.onload = function() {

  var clock = document.getElementById("clock");

  var roundhour = document.getElementById("roundhour");
  var roundminute = document.getElementById("roundminute");
  var roundsecond = document.getElementById("roundsecond");

  writeDate();

  window.setInterval(function() {
    writeDate();

  }, 500);

};


function writeDate() {

  var d = new Date();
  var minute = d.getMinutes();
  var hour = d.getHours();
  var second = d.getSeconds();

  clock.innerHTML = ("Kellaaeg on: " + addZeroBefore(hour) + ":" + addZeroBefore(minute) + ":" + addZeroBefore(second));

  var roundsecondloc = second * 6;
  var roundminuteloc = minute * 6;
  var roundhourloc = hour * 30 + minute / 2.5;

  roundsecond.style.transform = "rotate(" + roundsecondloc + "deg)";
  roundminute.style.transform = "rotate(" + roundminuteloc + "deg)";
  roundhour.style.transform = "rotate(" + roundhourloc + "deg)";
  roundclock.addEventListener("click", function(){
  roundclock.style.display = "none"});

}



function addZeroBefore(number) {

  if(number < 10) {
    number = "0" + number;
  }

  return number;
}

setInterval(function () {
    var now = new Date();
    document.getElementById('hours').style.width = ((now.getHours() / 24) * 100) + 'px';
    document.getElementById('minutes').style.width = ((now.getMinutes() / 60) * 100) + 'px';
    document.getElementById('seconds').style.width = ((now.getSeconds() / 60) * 100) + 'px';
}, 1000);
