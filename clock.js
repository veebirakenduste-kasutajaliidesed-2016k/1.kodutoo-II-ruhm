window.onload = function(){
writeDate();
   var clock = document.getElementById('clock');
   window.setInterval(function(){
writeDate();

   }, 1000 //millisekundid
 );


 };

function writeDate(){

  //Kellaaeg arvutist
  var today = new Date();

  var hours = setZeroBefore(today.getHours());
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = setZeroBefore(today.getSeconds());

  clock.innerHTML = hours + ':'+ minutes + ':' + seconds;

}


//funktsioon 0-i lisamiseks
function setZeroBefore(number){
  if(number < 10){
number = '0' + number;

  }
return number;
}


window.addEventListener('keypress', function(event){

     if(event.keyCode == 32){
       clock.style.color = "red";

     }

   });