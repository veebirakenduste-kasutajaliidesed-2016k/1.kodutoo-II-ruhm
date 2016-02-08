window.onload = function() {

  var clock = document.getElementById("clock");
  var barclock = document.getElementById("canvas");
  var roundclock = document.getElementById("roundclock");

  var secondbar = document.getElementById("secondbar");
  var minutebar = document.getElementById("minutebar");
  var hourbar = document.getElementById("hourbar");

  var roundhour = document.getElementById("roundhour");
  var roundminute = document.getElementById("roundminute");
  var roundsecond = document.getElementById("roundsecond");

  document.getElementById("toround").addEventListener("click", function() {
    var toleft = 0;
    var towidth = 165;
    var toheight = 100;
    var fromtop = 0;
    var boxtoround = 0;

    var leftinterval = setInterval(function() {
        toleft += 0.5;
        towidth += 0.35;
        toheight -= 0.7;
        fromtop += 0.08;
        boxtoround += 0.5;
        //console.log(boxtoround);

        barclock.style.width = towidth + "px";
        barclock.style.height = toheight + "%";
        barclock.style.left = toleft + "%";
        barclock.style.top = fromtop + "px";
        barclock.style.borderRadius = boxtoround + "%";

        if(toleft === 50) {
          var toopacity = 1;
          var fromopacity = 0;
          var opacityinterval = setInterval(function() {
            toopacity -= 0.05;
            fromopacity += 0.05;

            roundclock.style.display = "block";
            barclock.style.display = "none";

            barclock.style.opacity = toopacity;
            roundclock.style.opacity = fromopacity;

            setTimeout(function() { clearInterval(opacityinterval); }, 1000);

          }, 50);

          clearInterval(leftinterval);
        }

      }, 20);

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

function animateToRound() {

}

function addZeroBefore(number) {

  if(number < 10) {
    number = "0" + number;
  }

  return number;
}
