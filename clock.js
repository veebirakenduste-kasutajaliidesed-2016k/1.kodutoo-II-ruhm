window.onload = function(){ //assign divs to variables after page has finished loading
		var d = new Date();
		var time = document.getElementById("time");
		var min = document.getElementById("min");
		var sec = document.getElementById("sec");
		var date = document.getElementById("date");
		//arrays for string values of dates
		var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	setInterval(function(){ //update every second
		d = new Date();
		time.innerHTML = '<p class="clock__number--nopadding">'+d.getHours()+'/'+d.getMinutes()+'/'+d.getSeconds()+'</p>';
		return d;
	},1000);
	date.innerHTML = day[d.getDay()]+'/'+month[d.getMonth()]+'/'+d.getFullYear();
}
