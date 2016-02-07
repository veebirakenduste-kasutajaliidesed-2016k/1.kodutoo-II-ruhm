window.onload = function (){

var clock = document.getElementById('clock');


  //käivitan intervalli
window.setInterval(function(){
  //iga 500ms tagant käivitan writeDate'i
  writeDate();

}, 500);

 clock.addEventListener('click', function(){
   var today = new Date();
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var day_of_week = days[today.getDay()];
    alert("Today is " + day_of_week);
});


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
