window.onload = function(){ //assign divs to variables after page has finished loading
		var hr = document.getElementById("hr");
		var min = document.getElementById("min");
		var sec = document.getElementById("sec");
	setInterval(function(){ //update every second
		var d = new Date();
		hr.innerHTML = '<p class="clock__inner--number">'+d.getHours()+'</p>';
		min.innerHTML = '<p class="clock__inner--number">'+d.getMinutes()+'</p>';
		sec.innerHTML = '<p class="clock__inner--number">'+d.getSeconds()+'</p>';
	},1000);
}