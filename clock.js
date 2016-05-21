
window.onload = function(){


var clock = document.getElementById('clock');
writeDate();//selleks et poleks näha 00:00:00
//käivitan intervalli
window.setInterval(function(){
  writeDate();

}, 500);

};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = addZeroBefore(today.getMinutes());
  var seconds = addZeroBefore(today.getSeconds());
  var days = today.getDay();
  var months = today.getMonth();
  var years = today.getFullYear();

clock.innerHTML ='<p class = "hours">'+ hours + '</p>:<p class = "minutes">' + minutes + '</p>:<p class = "seconds">'+ seconds + '</p><br><p class = "days">'+ days + '</p>:<p class = "months">' + months + '</p>:<p class = "years">'+ years + '</p>';


}

function addZeroBefore(number){

if(number < 10){
  number = "0" + number;
}

  return number;
}

$(document).ready(function(){
    animateDiv();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - ($(window).height()*0.3);
    var w = $(window).width() - ($(window).width()*0.3);

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.clock').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.clock').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

function change(){
$("body").css("background-color", "rgb("+Math.floor(Math.random() * (255 - 0)) + 0 + "," + Math.floor(Math.random() * (255 - 0)) + 0 + "," + Math.floor(Math.random() * (255 - 0)) + 0 + ")");


}
