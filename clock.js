window.onload = function(){
var clock= document.getElementById("clock").style.color = "yellow";



    //käivitan intervalli/500= 500 millisekundit = 0,5s
        writeDate();//et ära peita 0:0:0
    window.setInterval(function(){
        writeDate();
    }, 500);


    window.addEventListener('keyup', function(event){
     document.getElementById("clock").style.color = "red";
     if(event.which == 13){

       document.getElementById("clock").style.color = "yellow";
     }
     });
     document.body.style.background = "darkblue";
     document.body.style.backgroundAttachment = "center";
};

//võtab aja ja kirjutab aja clock elemendi sisse
function writeDate(){
  var today = new Date();
  var days = ["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
  var year=today.getFullYear();
  var day =today.getDate();
  var hours= today.getHours("H");
  var minutes= today.getMinutes("Min");
  var seconds = today.getSeconds("Sec");
  clock.innerHTML = addZeroBefore(hours) + ":" +addZeroBefore(minutes)+":"+addZeroBefore(seconds)+" <br> "+day+"."+ days[today.getDay()]+"."+year;


}
 function addZeroBefore(number){


  if (number<10){
    number= "0"+number;
}

   return number;
 }

 function event() {

 }
