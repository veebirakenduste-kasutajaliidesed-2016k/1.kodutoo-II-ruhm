
window.onload = function(){
  var clock = document.getElementById('clock');

  // selleks, et ei oleks näha 0:0:0-i
  writeDate();

  // käivitan intervalli / 500ms = 0.5s
  window.setInterval(function(){
    // iga 500ms tagant käivitan writeDate´i
    writeDate();
  }, 500);


};

// võtab aja jakirjutab #clock elemendi sisse
function writeDate(){
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
}

function addZeroBefore(number){
  if (number < 10){
    number = '0' + number;
  }
  return number;
}
