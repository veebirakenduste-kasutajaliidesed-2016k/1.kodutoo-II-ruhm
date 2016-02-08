//ootan kuni leht on laetud

window.onload = function(){


var clock = document.getElementById('clock');
writeDate();  //selleks, et ei oleks näha 0:0:0
//käivitan intervalli /500ms on 0.5s
window.setInterval(function(){

writeDate();

}, 500);



};


  function writeDate(){

    var today = new Date();

    var hours = addZeroBefore(today.getHours());
    var minutes = addZeroBefore(today.getMinutes());
    var seconds = addZeroBefore(today.getSeconds());

      //muudan #clock elemendi htmli
      clock.innerHTML = hours + ':' + minutes +  ':' + seconds;
  }

  function addZeroBefore(number){

if(number < 10){
  number = "0" + number;
}

    return number;
  }
