//ootan kuni leht on leatud
 window.onload = function(){

   var clock = document.getElementById('clock');

   writeDate(); // selleks, et ei oleks näha 0:0:0

   // käivitan intervalli | 500ms = 0.5s
   window.setInterval(function(){
     // iga 500ms tagant käivitan writeDate'i
     writeDate();

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

//võtab aja ja kirjutab #clock elemendi sisse
function writeDate(){

  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  seconds = addZeroBefore(seconds);
  // day, mount, year.
  var day = addZeroBefore(today.getDate());
  var month = addZeroBefore(today.getMonth());
  var year = addZeroBefore(today.getFullYear());


  //lisasin veel day, mounth, year.
  //clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
  clock.innerHTML ="<br>Clock</br>" +  hours + ':' + minutes +  ':' + seconds + "<br>Date</br>" + day + "." + month + "." + year;
}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}

//proovin lisada "change color nuppu"
function day(){
    document.getElementById("clock").style.color = "black"
    document.body.style.backgroundColor = "white"

}
function night(){

    document.getElementById("clock").style.color = "white"
    document.body.style.backgroundColor = "black"

    var image = document.getElementById('myImage');
    if (document.body.style.backgroundColor = "white") {
        document.getElementById("clock").style.color = "black";
    } else {
        document.getElementById("clock").style.color = "white";
    }
}
}

function glamour(){
  document.getElementById("clock").style.color = "#DDA0DD"
  document.getElementById("clock").style.color = "#DDA0DD"
  document.body.style.backgroundColor = "#FF00FF"
}

//lisasin texti muutumine
function Big() {
    document.getElementById("clock").style.fontSize = "110px";
}
function Medium() {
    document.getElementById("clock").style.fontSize = "70px";
}
function Small() {
    document.getElementById("clock").style.fontSize = "45px";
}

function style(){
    document.getElementById("clock").style.color = "black"
}

function soundClick() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'click.mp3'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

var mySubmit= document.getElementById("my_button";  //выбираем кнопку по id

functionvForm(eventObject) {
    var vDay = eventObject.vDay.value; // день
    var vMonth = eventObject.vMonth.value -1;// месяц
    var vYear = eventObject.vYear.value; // год

    var vHour = eventObject.vHour.value;// час
    var vMin = eventObject.vMin.value;// минута
    var vDate = vYear,vMonth,vDay,vHour,vMin,0;// параметр для объекта Date
    return vDate;
}
mySubmit.onclick = vForm(); //при клике на кнопку, значенияформы присваиваются соответствующим переменным
