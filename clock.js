
window.onload = function(){

  var clock = document.getElementById('clock');
  //Et ei oleks näha 00:00:00
  writeDate();
  document.getElementById("clock").style.color = "red";

  //Käivitan intervalli-500ms = 0.5 sek
  window.setInterval(function(){
    //Iga 500ms tagant refresh põhimõtteliselt
    writeDate();
  }, 500);

};

window.addEventListener('keyup', function(event)){

  if(event.onkeyup == 38){
    clock.fontsize
  }

  if(event.onkeyup == 40){
    clock.fontsize
  }

});
// Võtab aja ja kirjutab clock elemendi sisse
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
