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
  <p style="position:absolute; left: 175px;">Rauno Kosula</p>
<div id="clock" style="left: 175px; position: absolute;"></div>
<!-- BARCLOCK -->
<div id="canvas">
  <div id="colors">

    <span id="toround" class="fa-stack">
      <i class="fa fa-square-o fa-stack-2x"></i>
      <i id="toround" class="fa fa-clock-o fa-stack-1x"></i>
    </span>

    <span class="fa-stack">
      <i class="fa fa-square-o fa-stack-2x"></i>
      <i id="pink" class="fa fa-paint-brush fa-stack-1x"></i>
    </span>

    <span class="fa-stack">
      <i class="fa fa-square-o fa-stack-2x"></i>
      <i id="turquoise" class="fa fa-paint-brush fa-stack-1x"></i>
    </span>

    <span class="fa-stack">
      <i class="fa fa-square-o fa-stack-2x"></i>
      <i id="orange" class="fa fa-paint-brush fa-stack-1x"></i>
    </span>

    <span id="transparent" class="fa-stack">
      <i class="fa fa-paint-brush fa-stack-1x"></i>
      <i style="color: #d9534f;" class="fa fa-ban fa-stack-2x text-danger fa-flip-horizontal"></i>
    </span>

    <!--<div class="color" id="pink"></div>
    <div class="color" id="turquoise"></div>
    <div class="color" id="orange"></div>
    <div class="color" id="transparent"></div>-->

  </div>
  <!--<i id="toround" class="fa fa-clock-o fa-2x"></i>-->

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

  <a id="innerclock" href="clock.php">
    <i class="fa fa-bars"></i>
  </a>

  <div id="roundhour">
  </div>
  <div id="roundminute">
  </div>
  <div id="roundsecond">
  </div>

</div>

</body>
</html>
