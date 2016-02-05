writeTime();
window.onload = function(){ //assign divs to variables after page has finished loading
	var d = new Date(),
	time = document.querySelector('#time'),
	min = document.querySelector('#min'),
	sec = document.querySelector('#sec'),
	date = document.querySelector('#date');
	//arrays for string values of dates
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	setInterval(function(){ //update every second
		writeTime();
	},1000);
	date.innerHTML = day[d.getDay()]+'/'+month[d.getMonth()]+'/'+d.getFullYear();
}
document.addEventListener("click", function(){
	if (event.target.matches('.btn--close') || event.target.matches('.overlay.is-visible')) {
		var overlay = document.getElementsByClassName("overlay");
		var i;
		for (i = 0; i < overlay.length; i++) {
			var overlayShow = overlay[i];
			if (overlayShow.classList.contains('is-visible')) {
				document.querySelector('#overlay').classList.toggle('disappear');
				setTimeout(function(){overlayShow.classList.remove('is-visible');overlayShow.classList.remove('disappear');}, 150);
			}
		}//end overlay close
	};
	if (event.target.matches('#darkscheme')){
		if(document.querySelector('.container').style.backgroundColor == 'rgb(33, 33, 33)'){
			document.querySelector('.container').style.backgroundColor = '#FAFAFA';
			document.querySelector('.btn--overlay').style.backgroundColor = '#448AFF';
			document.querySelector('.clock').style.backgroundColor = '#FFFFFF'
			document.querySelector('body').style.color = 'rgba(0, 0, 0, 0.87)';
			document.querySelector('.overlay__options').style.backgroundColor = '#FFFFFF';
			document.querySelector('#darkscheme').innerHTML = 'Dark';
			var x = document.querySelectorAll('.btn--scheme');
			var i;
			for (i = 0; i < x.length; i++) {
			    x[i].style.backgroundColor = "#FFFFFF";
			};
		}else{
			document.querySelector('.container').style.backgroundColor = '#212121';
			document.querySelector('.btn--overlay').style.backgroundColor = '#D50000';
			document.querySelector('.clock').style.backgroundColor = '#424242'
			document.querySelector('body').style.color = 'rgba(255, 255, 255, 0.87)';
			document.querySelector('.overlay__options').style.backgroundColor = '#424242';
			var x = document.querySelectorAll('.btn--scheme');
			var i;
			for (i = 0; i < x.length; i++) {
			    x[i].style.backgroundColor = "#424242";
			};
			document.querySelector('#darkscheme').innerHTML = 'Light';
		};
	};
	if (event.target.matches('.btn--overlay')){
		showOverlay();
	};
});
function addZero(number){ //format numbers
	if(number < 10){
		number = '0'+number;
	}
	return number;
};
function showOverlay() {
	document.querySelector('#overlay').classList.toggle('is-visible');
};
function writeTime(){
	d = new Date();
	time.innerHTML = addZero(d.getHours())+'/'+addZero(d.getMinutes())+'/'+addZero(d.getSeconds());
};

