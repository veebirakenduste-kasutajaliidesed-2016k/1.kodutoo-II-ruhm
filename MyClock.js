window.onload=function clock(){

   var clock = document.getElementById("clock");

writeDate();

  clock.addEventListener("click", function(){

    console.log('klikk');

    document.getElementById("clock").style.color= "rgb(192,192,192)";
    document.getElementById("date").style.color= "rgb(192,192,192)";


  });

window.addEventListener('keypress', function(){
  console.log(event);

  if(event.charCode == 13){

    document.getElementById("clock").style.color="rgb(0,0,0)";
    document.getElementById("date").style.color= "rgb(0,0,0)";

  }

});

   window.setInterval(function(){
     // iga ooteaja järel käivitatakse
      writeDate();

   },100);

//   function background(){
//     back.addEventListener("click", function(){
//    console.log("klikkkkkk");
//     document.getElementById("body").style.backgroundColor = "rgb(0,0,0)";

//     });

//   }
 };



function writeDate(){

  var today = new Date();

  var year = today.getYear();
  var month = today.getMonth() +1;
  var day = today.getDay();
  console.log(month);
  var month1;
  var year1;

  if(month == 1){

    month1 = 'Jaanuar';

  }

  if(month == 2){

    month1 = "Veebruar";

  }

  if(month == 3){

    month1 = "Märts";

  }

  if(month == 4){

    month1 = "Aprill";

  }

  if(month == 5){

    month1 = "Mai";

  }

  if(month == 6){

    month1 = "Juuni";

  }

  if(month == 7){

    month1 = "Juuli";

  }

  if(month == 8){

    month1 = "August";

  }

  if(month == 9){

    month1 = "September";

  }

  if(month == 10){

    month1 = "Oktoober";

  }

  if(month == 11){

    month1 = "November";

  }

  if(month == 12){

    month1 = "Detsember";

  }

  if(year == 116){

    year1 = 2016;

  }

  var hours = today.getHours();
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = today.getSeconds();

  second = setZeroBefore(seconds);

  clock.innerHTML = setZeroBefore(hours) + ":" + minutes + ":" + second;
  date.innerHTML = day + " " + month1 + " " + year1;
}

//lisab nulli kui arv on kümnest väiksem

function setZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }
  return number;

}

function backtoblack(){

  document.getElementById("background").style.backgroundColor = "#404040";

}
function backtolight(){

  document.getElementById("background").style.backgroundColor = "white";

}
