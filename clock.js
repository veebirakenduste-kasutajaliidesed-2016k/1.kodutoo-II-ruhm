window.onload = function(){

  var clock = document.getElementById('clock');
  var back = document.body.style.background;
  var sample = document.getElementById("music");


  window.setInterval(function(){
    writeDate();


    //iga 500millisekundi tagant k2ivitab writedate
  }, 500);
// et ei tekiks alguses 0:0:0

  writeDate();
  window.setInterval(function(){
    document.body.style.background = randomColors();
}, 2000);

};

function writeDate(){

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }
  return number;
}
function randomize() {
  document.getElementById('clock').style.color = randomColors();
}


// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


window.addEventListener('keyup', function(event){
  console.log(event.which);
  if(event.which == 13){
    document.getElementById("music");
    music.play();
    window.setInterval(function(){

      document.body.style.background = randomColors();
      document.getElementById('clock').style.color = randomColors();

      //iga 500millisekundi tagant k2ivitab writedate
    }, 100);
  }
});

document.onclick = function(e) {
	clock.style.top = e.offsetY + "px";
	clock.style.left = e.offsetX + "px";
}
