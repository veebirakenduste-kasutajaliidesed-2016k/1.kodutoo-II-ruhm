window.onload = function (){

var clock = document.getElementById('clock');


  //käivitan intervalli
window.setInterval(function(){
  //iga 500ms tagant käivitan writeDate'i
  writeDate();

}, 500);

writeDate();


};



//võtab aja ja kirjutab #clock elemendi siss
function writeDate(){

  var today = new Date();

  var year = today.getFullYear();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  var month = months[today.getMonth()];
  var day = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();


clock.innerHTML = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds) + "<br>" + (day) + "." + (month) + "." + (year);

}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}
