//ootame kuni leht on laetud
window.onload = function(){

  var clock = document.getElementById('clock');
  writeDate();//selleks et lehe laadimisel oleks kohe kell näha
  //käivitan invervalli
  window.setInterval(function(){
    writeDate();
  }, 1000);

  clock.addEventListener('click', function(event){
    console.log(event.x);
  });

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

  window.addEventListener('keyup', function(event){
     console.log(event.which);
     if(event.which == 49){
       console.log('vajutasid 1');
     }
   });

   window.addEventListener('wheel', function(event){
      console.log(event.deltaY);
      if(event.deltaY == 100){
        document.getElementById("clock").style.fontSize = "40px";
      }
      if(event.deltaY == -100){
        document.getElementById("clock").style.fontSize = "20px";
      }
    });

   //muudab tausta värvi
   window.addEventListener('click', function(event){
      console.log(event.which);
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
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  //#clock element htmli
  clock.innerHTML=addZeroBefore(h)+":"+addZeroBefore(m)+":"+addZeroBefore(s);
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
