 //ootan kuni leht on leatud
 window.onload = function(){

   var clock = document.getElementById('clock');

   writeDate(); // selleks, et ei oleks näha 0:0:0

   // käivitan intervalli | 500ms = 0.5s
   window.setInterval(function(){
     // iga 500ms tagant käivitan writeDate'i
     writeDate();

   }, 500);


   clock.addEventListener('click', function(event){
     console.log(event.x);
   });

   window.addEventListener('keyup', function(event){
     console.log(event.which);
     if(event.which == 13){

       console.log('vajutasid enterit');
     }
   });



 };

//võtab aja ja kirjutab #clock elemendi siss
function writeDate(){

  var today = new Date();

  var year = today.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[today.getMonth()];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day_of_week = days[today.getDay()];
  var day = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();


clock.innerHTML = (day_of_week) + "<br>" + addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds) + "<br>" + (day) + "." + (month) + "." + (year);
}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}