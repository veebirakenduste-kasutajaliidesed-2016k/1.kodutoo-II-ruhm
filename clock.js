//ootan kuni leht on laetud

window.onload= function(){

  var clock = document.getElementById('clock').style.color="Blue";

  window.setInterval(function(){
//iga 500ms tagant käivitan writeDate´i
    writeDate();


  }, 500);


};
//võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){
  var today = new Date();

  var hours = today.getHours();

  var minutes = today.getMinutes();

  var seconds = today.getSeconds();

  //muudan #clock elemendi hmtli
    clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

}


function addZeroBefore(number){
  if(number < 10){
    number = "0" + number;



  }

  return number;


}
