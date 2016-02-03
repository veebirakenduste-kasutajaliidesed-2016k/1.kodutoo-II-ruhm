
window.onload = function(){

  var clock = document.getElementById('clock');
  //Et ei oleks näha 00:00:00
  writeDate();

  //Käivitan intervalli-500ms = 0.5 sek
  window.setInterval(function(){
    //Iga 500ms tagant refresh põhimõtteliselt
    writeDate();
  }, 500);

};
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
