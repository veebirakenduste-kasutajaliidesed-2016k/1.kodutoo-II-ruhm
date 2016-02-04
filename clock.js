window.onload = function(){ //assign divs to variables after page has finished loading
	var d = new Date();
	var time = document.getElementById('time');
	var min = document.getElementById('min');
	var sec = document.getElementById('sec');
	var date = document.getElementById('date');
	var dropDownBtn = document.getElementById('btn');
	//arrays for string values of dates
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	setInterval(function(){ //update every second
		d = new Date();
		time.innerHTML = '<p class="clock__number--nopadding">'+addZero(d.getHours())+'/'+addZero(d.getMinutes())+'/'+addZero(d.getSeconds())+'</p>';
	},1000);
	date.innerHTML = day[d.getDay()]+'/'+month[d.getMonth()]+'/'+d.getFullYear();

}

function addZero(number){
	if(number < 10){
		number = '0'+number;
	}
	return number;
}
function showOverlay() {
	document.getElementById('overlay').classList.toggle('overlay--show');
};
window.onclick = function(event) {
  if (!event.target.matches('.btn')) {
    var overlay = document.getElementsByClassName("overlay");
    var i;
    for (i = 0; i < overlay.length; i++) {
      var overlayShow = overlay[i];
      if (overlayShow.classList.contains('overlay--show')) {
      	document.getElementById('overlay').classList.toggle('disappear');
      	setTimeout(function(){overlayShow.classList.remove('overlay--show');overlayShow.classList.remove('disappear');}, 150);        
      }
    }
  }
}