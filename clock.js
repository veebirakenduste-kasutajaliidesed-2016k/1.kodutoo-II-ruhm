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

  window.addEventListener('keyup', function(event){
    console.log(event.which);
    if(event.which == 32){

      document.body.style.backgroundColor ='black';
      document.body.style.textShadow ='0px 0px 15px green';
    }
    if(event.which == 13){

      document.body.style.backgroundColor ='white';
      document.body.style.textShadow ='0px 0px 0px green';
    }
    if(event.which == 38 ){

      //document.body.style.backgroundColor ='white';
      document.body.style.fontSize ='2em';
      //document.body.style.textShadow ='0px 0px 0px green';
    }
    if(event.which == 40 ){
      document.body.style.fontSize ='1em';
    }
  });

  document.getElementById("author").addEventListener("mouseenter", mouseEnter);
  function mouseEnter() {
      document.getElementById("author").style.color = "green";
  }
  document.getElementById("author").addEventListener("mouseleave", mouseLeave);
  function mouseLeave() {
      document.getElementById("author").style.color = "black";
  }


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
  //clock.style.backgroundColor = randomColor;
  console.log('EEEEEEEEEE');
}
