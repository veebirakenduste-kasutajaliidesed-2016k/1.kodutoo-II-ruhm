window.onload = function(){
var clock= document.getElementById("clock").style.color = "white";
var color = document.getElementById("color").style.color="white";


    //käivitan intervalli/500= 500 millisekundit = 0,5s
        writeDate();//et ära peita 0:0:0
    window.setInterval(function(){
        writeDate();
    }, 500);



      window.addEventListener('keyup', function(event){
        document.getElementById("clock").style.color = "red";
      });
      window.addEventListener('click', function(event){
        document.getElementById("clock").style.color = "white";
      });


      var big = document.getElementById("big");
      var small= document.getElementById("small");
      var same= document.getElementById("same");
      //lisan nuppudele kuularid

      document.getElementById("bigger").addEventListener("click",bigger);
      document.getElementById("smaller").addEventListener("click",function(){
        document.getElementById("clock").style.fontSize = "medium";
      });
      document.getElementById("same").addEventListener("click",function(){
        document.getElementById("clock").style.fontSize = "x-large";
      });






     document.body.style.background = "darkblue";

     document.getElementById("name").style.fontFamily = "Verdana";
     document.getElementById("name").style.fontSize = "large";
     document.getElementById("name").style.textAlign = "center";

     document.getElementById("clock").style.borderWidth = "inherit";
     document.getElementById("color").style.fontFamily = "Verdana";
     document.getElementById("color").style.fontSize = "large";
     document.getElementById("color").style.textAlign = "center";



     document.getElementById("clock").style.borderRadius = "25px";
     document.getElementById("clock").style.border = "thick solid #0000FF";
     document.getElementById("clock").style.borderWidth = "5px 20px 20px 20px";
     document.getElementById("clock").style.borderColor="yellow";
     document.getElementById("clock").style.textAlign = "center";
     document.getElementById("clock").style.fontFamily = "Impact,Charcoal,sans-serif";
     document.getElementById("clock").style.fontSize = "x-large";

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


 function bigger(){

     document.getElementById("clock").style.fontSize = "xx-large";
 }
