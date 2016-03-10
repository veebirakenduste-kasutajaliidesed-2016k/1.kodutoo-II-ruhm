window.onload = function(){
//  var clock = document.getElementById('clock');
  writeDate();
};

function writeDate(){
  var today = new Date();
  var h = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  clock.innerHTML = check(h) + ":" + check(min) + ":" + check(sec);
}


function check(number) {
  if(number<10) {
    number = '0' + number;
  }
  return number;
}

//Invervall
window.setInterval(function(){
  writeDate();
}, 500);

function color(color) {
  var color = prompt('Sisesta värv \nValikud : red, blue, green')
  document.getElementById('clock').style.color = color
}

function zIn() {
  var x = document.getElementById('clock').style.fontSize
  document.getElementById('clock').style.fontSize = 'x-large'
}

function zOut() {
  document.getElementById('clock').style.fontSize = 'x-small'
}

function norm() {
  document.getElementById('clock').style.fontSize = 'medium'
}
var x = 0
function adv() {
  if(x===0) {
    document.getElementById('body').background = 'tumblr_o2mtxcTQNM1tsprlro1_500.gif'
    x=1
  } else {
    document.getElementById('body').background = ''
    x=0
  }
}
