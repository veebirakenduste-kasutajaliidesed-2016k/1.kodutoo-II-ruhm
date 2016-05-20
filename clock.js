//ootan kuni leht on leatud
var audio = new Audio("thunder.mp3");
audio.loop=true;
audio.play();
window.onload = function(){
  document.getElementById('play').style.visibility = 'hidden';
  var clock = document.getElementById('clock');
  writeDate(); // selleks, et ei oleks näha 0:0:0

  // käivitan intervalli | 500ms = 0.5s
  window.setInterval(function(){
    // iga 500ms tagant käivitan writeDate'i
    writeDate();
    document.getElementById('changebg').addEventListener('click', backColor);
    document.getElementById('changebg2').addEventListener('click', backColor2);
    document.getElementById('mute').addEventListener('click', mute);
    document.getElementById('play').addEventListener('click', playagain);
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
function mute(){
        audio.pause();
        audio.currentTime = 0;
        document.getElementById('mute').style.visibility = 'hidden';
        document.getElementById('play').style.visibility = 'visible';

}
function playagain(){
        audio.loop=true;
        audio.play();
        document.getElementById('mute').style.visibility = 'visible';
        document.getElementById('play').style.visibility = 'hidden';

}
function backColor(){
  document.bgColor='blue';
}
function backColor2(){
  document.bgColor='white';
}

//võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){

 var today = new Date();

 var hours = addZeroBefore(today.getHours());
 var minutes = today.getMinutes();
 var seconds = today.getSeconds();
 seconds = addZeroBefore(seconds);


 //muudan #clock elemendi htmli

 clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;


}

function addZeroBefore(number){

 if(number < 10){
   number = "0" + number;
 }

 return number;
}
