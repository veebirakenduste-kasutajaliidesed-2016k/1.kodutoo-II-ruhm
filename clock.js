
window.onload = function (){

var clock=document.getElementById("clock");

writeDate();

window.setInterval(function(){
  writeDate();
}, 500);


};

function writeDate(){

  var date=new Date();
  
  var hours=date.getHours();
  var minutes=date.getMinutes();
  var seconds=date.getSeconds();
clock.innerHTML =addZeroBefore(hours)+ ":" +addZeroBefore(minutes)+ ":" +addZeroBefore(seconds);

}

function addZeroBefore(number){

  if(number<10){
    number="0" + number;
  }

  return number;
}


clock.addEventListener('click', function(event){
     console.log(event.x);
   });
   
   
   
   
     function textBig() {
      document.getElementById("clock").style.fontSize = "120px";
     }
	  
	  function textSmall() {
		  document.getElementById("clock").style.fontSize = "40px";
	  }
   
bground.addEventListener('click', function(event){
      console.log(event.which);
      
      if(event.which){
        var randNumber = getRandom(1, 3);
        if (randNumber == 1){
			document.body.style.backgroundImage = "url(1.jpg)";
        }
        
        if (randNumber == 2){
			document.body.style.backgroundImage = "url(2.jpg)";
		  document.getElementById("footer").style.color = "blue";
        }
        if (randNumber == 3){
		  document.body.style.backgroundImage = "url(3.jpg)";
		  document.getElementById("footer").style.color = "white";
      }
      }
    });
	function getRandom(){
	return Math.floor((Math.random() * 3) + 1);
}