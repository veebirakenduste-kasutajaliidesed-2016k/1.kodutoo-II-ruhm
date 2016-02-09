//ootan kuni leht on leatud
window.onload = function(){


  var clock = document.getElementById('clock');


  writeDate(); // selleks, et ei oleks n�ha 0:0:0


  // k�ivitan intervalli | 500ms = 0.5s
  window.setInterval(function(){
    // iga 500ms tagant k�ivitan writeDate'i
    writeDate();


  }, 300);


};
//Tausta v�rv
function changeBGC(color){
document.bgColor = color;
}
//Kella v�rv
function randcolor(){
document.getElementById('clock').style.color = "#"+((1<<24)*Math.random()|0).toString(16);
}
//v�tab aja ja kirjutab #clock elemendi sisse
function writeDate(){


 var today = new Date();


 var hours = addZeroBefore(today.getHours());
 var minutes = today.getMinutes();
 var seconds = today.getSeconds();
 var day = today.getDate();
 var month = today.getMonth();
 var year = today.getFullYear();
 seconds = addZeroBefore(seconds);


 //muudan #clock elemendi htmli
clock.innerHTML=(hours)+":"+addZeroBefore(minutes)+":"+(seconds)+'<br> <br>'+addZeroBefore(day)+"."+addZeroBefore(month+1)+"."+year;
}


function addZeroBefore(number){
 if(number < 10){
   number = "0" + number;
 }


return number;
}
