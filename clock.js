//ootame kuni leht on laetud
window.onload = function(){

  var clock = document.getElementById('clock');
  var fontSize = 30;
  writeDate();//selleks et lehe laadimisel oleks kohe kell näha
  //käivitan invervalli
  window.setInterval(function(){
    writeDate();
  }, 1000);

  /*clock.addEventListener('click', function(event){
    console.log(event.x);
  });*/

  //kella värv
  clock.addEventListener('click', setInterval(function(){
      var num_clock = getRandomInt(1, 5);
      if (num_clock == 1){
        document.getElementById("clock").style.color = "red";
      }
      if (num_clock == 2){
        document.getElementById("clock").style.color = "blue";
      }
      if (num_clock == 3){
        document.getElementById("clock").style.color = "green";
      }
      if (num_clock == 4){
        document.getElementById("clock").style.color = "yellow";
      }
      if (num_clock == 5){
        document.getElementById("clock").style.color = "black";
      }
  }, 500));

  /*window.addEventListener('keyup', function(event){
     console.log(event.which);
     if(event.which == 49){
       console.log('vajutasid 1');
     }
   });*/

   window.addEventListener('wheel', function(event){
      if(event.deltaY == 100){
        fontSize = fontSize - 10;
        document.getElementById("clock").style.fontSize = fontSize + 'px';
      }
      if(event.deltaY == -100){
        fontSize = fontSize + 10;
        document.getElementById("clock").style.fontSize = fontSize + 'px';
      }
    });

   //muudab tausta värvi
   window.addEventListener('click', function(event){
      //console.log(event.which);
      if(event.which){
        var num_backg = getRandomInt(1, 5);
        if (num_backg == 1){
          document.body.style.backgroundColor = "red";
        }
        if (num_backg == 2){
          document.body.style.backgroundColor = "blue";
        }
        if (num_backg == 3){
          document.body.style.backgroundColor = "green";
        }
        if (num_backg== 4){
          document.body.style.backgroundColor = "yellow";
        }
        if (num_backg == 5){
          document.body.style.backgroundColor = "black";
        }
      }
    });


};

//võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){

  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var day = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();

  //#clock element htmli
  clock.innerHTML=addZeroBefore(hour)+":"+addZeroBefore(min)+":"+addZeroBefore(sec)+'<br>'+addZeroBefore(day)+"."+addZeroBefore(month+1)+"."+year;
}

function addZeroBefore(number){
  if(number<10){
    number="0"+number;
  }
  return number;
}

//võetud: https://gist.github.com/kerimdzhanov/7529623
function getRandomInt(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
