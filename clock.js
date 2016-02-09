//ootan kuni leht on leatud
window.onload = function(){


  var clock = document.getElementById('clock');


  writeDate(); // selleks, et ei oleks näha 0:0:0


  // käivitan intervalli | 500ms = 0.5s
  window.setInterval(function(){
    // iga 500ms tagant käivitan writeDate'i
    writeDate();


  }, 300);


};
//Tausta värv
function changeBGC(color){
document.bgColor = color;
}
//Kella värv
function randcolor(){
document.getElementById('clock').style.color = "#"+((1<<24)*Math.random()|0).toString(16);
}
//võtab aja ja kirjutab #clock elemendi sisse
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
