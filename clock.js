
window.onload = function(){

  var clock = document.getElementById('clock');
  //Et ei oleks näha 00:00:00
  writeDate();


  document.getElementById("clock").style.color = "red";
  document.getElementById("clock").style.fontSize = "300%"

  //Käivitan intervalli-500ms = 0.5 sek
  window.setInterval(function(){
    //Iga 500ms tagant refresh põhimõtteliselt
    writeDate();
  }, 500);

};

document.write("Kevin Münter")
window.addEventListener('keyup', function(event){

  if(event.which == 107){
    console.log('Pluss');
    document.getElementById("clock").style.fontSize = document.getElementById("clock").style.fontSize + "5";
  }

  if(event.which == 109){
    console.log('Miinus');
    document.getElementById("clock").style.fontSize = document.getElementById("clock").style.fontSize - "5";
  }


});

window.addEventListener('keyup', function(event){

  if(event.which == 38){
    document.getElementById("clock").style.color = "green";
    
  }

  if(event.which == 40){
    document.getElementById("clock").style.color = "blue";
  }

  if(event.which == 39){
    document.getElementById("clock").style.color = "red";
  }

  if(event.which == 37){
    document.getElementById("clock").style.color = "black";
  }

});



// Võtab aja ja kirjutab clock elemendi sisse
function writeDate(){

  var today = new Date();
  
  var day = today.getDate();
  var year = today.getFullYear();
  var month = today.getMonth();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  //Kuupäeva õpetuse sain siit- http://www.w3schools.com/js/js_date_methods.asp

  clock.innerHTML = addZeroBefore(day) + '.' + addZeroBefore(month) + '.' + year + ' ' + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

}

function addZeroBefore(number){

  if(number < 10){

    number = "0" + number;
  }

  return number;


}
