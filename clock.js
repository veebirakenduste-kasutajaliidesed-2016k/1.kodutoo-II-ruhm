window.onload = function(){
  var clock = document.getElementById('clock');

  writeDate();

  window.setInterval(function(){

    writeDate();

  }, 500);

  var months = new Array('jaanuar','veebruar','märts','aprill','mai','juuni','juuli','august','september','oktoober','november','detsember');
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  document.getElementById('date').innerHTML = day+'.'+months[month]+' '+year;

  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

  clock.addEventListener('click', changeColor);

};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();

  var seconds= today.getSeconds();
  seconds = addZeroBefore(seconds);
  clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
}

function addZeroBefore(number){

  if(number<10){
    number="0"+number;
  }

  return number;
}

function changeColor(){
  clock.style.backgroundColor =randomColor;
  console.log('EEEEEEEEEE');
}
