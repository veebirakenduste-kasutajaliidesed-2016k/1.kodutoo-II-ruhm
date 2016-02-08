<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kell</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="clock.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
</head>
<body>
<div id="clock" style="position: absolute; z-index: 1;"></div>
<!-- BARCLOCK -->
<div id="canvas">
  <i id="toround" class="fa fa-clock-o fa-2x"></i>
  <div id="hourclock">
    <img src="images/hour.png">
  </div>

  <div id="minuteclock">
    <img src="images/secmin.png">
  </div>

  <div id="secondclock">
    <img src="images/secmin.png">
  </div>

  <div id="hourbar"></div>
  <div id="minutebar"></div>
  <div id="secondbar"></div>

</div>

<!-- ROUNDCLOCK -->
<div id="roundclock">

  <img id="clickclock" src="images/clock.png">

  <div id="innerclock">
    <i class="fa fa-bars"></i>
  </div>

  <div id="roundhour">
  </div>
  <div id="roundminute">
  </div>
  <div id="roundsecond">
  </div>

</div>

</body>
</html>
