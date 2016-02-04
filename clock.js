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

  clock.addEventListener('click', function(event){
      document.getElementById("clock").style.color = "red";
  });

  window.addEventListener('keyup', function(event){
     console.log(event.which);
     if(event.which == 49){
       console.log('vajutasid 1');
     }
   });

   //muudab tausta värvi
   window.addEventListener('click', function(event){
      console.log(event.which);
      if(event.which){
        var num = getRandomInt(1, 5);
        if (num == 1){
          document.body.style.backgroundColor = "red";
        }
        if (num == 2){
          document.body.style.backgroundColor = "blue";
        }
        if (num == 3){
          document.body.style.backgroundColor = "green";
        }
        if (num == 4){
          document.body.style.backgroundColor = "yellow";
        }
        if (num == 5){
          document.body.style.backgroundColor = "brown";
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
