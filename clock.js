window.onload = function() {

  var clock = document.getElementById("clock");
  var barclock = document.getElementById("canvas");
  var roundclock = document.getElementById("roundclock");
  var rounddesign = document.getElementById("clickclock"); // rounddesign.src = "images/clock.png";

  var secondbar = document.getElementById("secondbar");
  var minutebar = document.getElementById("minutebar");
  var hourbar = document.getElementById("hourbar");

  var roundhour = document.getElementById("roundhour");
  var roundminute = document.getElementById("roundminute");
  var roundsecond = document.getElementById("roundsecond");

  //Colors for barclock
  var pink = document.getElementById("pink");
  var turq = document.getElementById("turquoise");
  var orange = document.getElementById("orange");
  var transparent = document.getElementById("transparent");

  pink.addEventListener("click", function() {
    barclock.style.backgroundColor = "#FF00C8";
  });

  turq.addEventListener("click", function() {
    barclock.style.backgroundColor = "#00F3FF";
  });

  orange.addEventListener("click", function() {
    barclock.style.backgroundColor = "#FF8100";
  });

  transparent.addEventListener("click", function() {
    barclock.style.backgroundColor = "rgba(0,0,0,0)";
  });

  roundclock.addEventListener("click", function() {
    var x = event.offsetX;
    var y = event.offsetY;

    if(x > 130 && x < 140 && y > 15 && y < 40) {
      roundclock.style.backgroundImage = "url('images/1.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 60 && x < 175 && y > 50 && y < 70) {
      roundclock.style.backgroundImage = "url('images/2.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 175 && x < 195 && y > 90 && y < 110) {
      roundclock.style.backgroundImage = "url('images/3.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 165 && x < 180 && y > 130 && y < 155) {
      roundclock.style.backgroundImage = "url('images/4.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 130 && x < 150 && y > 160 && y < 180) {
      roundclock.style.backgroundImage = "url('images/5.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 90 && x < 110 && y > 170 && y < 195) {
      roundclock.style.backgroundImage = "url('images/6.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 55 && x < 70 && y > 155 && y < 180) {
      roundclock.style.backgroundImage = "url('images/7.jpg')";
      rounddesign.src = "images/clock.png";
    }

    if(x > 20 && x < 35 && y > 130 && y < 150) {
      roundclock.style.backgroundImage = "url('images/8.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 5 && x < 20 && y > 90 && y < 110) {
      roundclock.style.backgroundImage = "url('images/9.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 15 && x < 40 && y > 15 && y < 70) {
      roundclock.style.backgroundImage = "url('images/10.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    if(x > 50 && x < 75 && y > 20 && y < 40) {
      roundclock.style.backgroundImage = "url('images/11.jpg')";
      rounddesign.src = "images/clock.png";
    }

    if(x > 88 && x < 120 && y > 10 && y < 30) {
      roundclock.style.backgroundImage = "url('images/12.jpg')";
      rounddesign.src = "images/clockwhite.png";
    }

    });


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

        barclock.style.width = towidth + "px";
        barclock.style.height = toheight + "%";
        barclock.style.left = toleft + "%";
        barclock.style.top = fromtop + "px";

        if(toleft === 50) {
          clearInterval(leftinterval);
          var radiusinterval = setInterval(function() {
            boxtoround += 2.5;
            barclock.style.borderRadius = boxtoround + "%";
            setTimeout(function() { clearInterval(radiusinterval); }, 1000);

            if(boxtoround === 50) {
              var toopacity = 1;
              var fromopacity = 0;
              var opacityinterval = setInterval(function() {
                toopacity -= 0.05;
                fromopacity += 0.05;

                roundclock.style.display = "block";
                setTimeout(function() {
                  barclock.style.display = "none";
                }, 1000);


                barclock.style.opacity = toopacity;
                roundclock.style.opacity = fromopacity;

                setTimeout(function() { clearInterval(opacityinterval); }, 1000);

              }, 50);
            }



          }, 50);



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
  var roundhourloc = hour * 30 + minute / 2.5;

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
