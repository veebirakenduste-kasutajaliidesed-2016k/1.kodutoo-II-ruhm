window.onload = function(){

  var clock = document.getElementById('clock');

  writeDate(); //et ei oleks algul 0:0:0
  //käivitan intervalli
  window.setInterval(function(){

    writeDate();

  }, 500);

  writeDate();
};

function writeDate(){

  var today = new Date();
  var day = addZeroBefore(today.getDate());
  var month = addZeroBefore(today.getMonth()+1);
  var year = today.getFullYear();
  var hours = addZeroBefore(today.getHours());
  var minutes = addZeroBefore(today.getMinutes());
  var seconds = addZeroBefore(today.getSeconds());

  clock.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + day + '.' + month + '.' + year;
}



function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;


  function changeBackground1(){

    document.getElementById("body").style.backgroundImage = "url('wallpaper1.jpg')";

  }

  function changeBackground2(){

    document.getElementById("body").style.backgroundImage = "url('wallpaper2.jpg')";

  }
}
