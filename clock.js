 //ootan kuni leht on leatud
 var language = "eng";
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
bground.addEventListener('click', function(event){
      //console.log(event.which);
      if(event.which){
        var randNumber = getRandom(1, 7);
        if (randNumber == 1){
			document.body.style.backgroundImage = "";
          document.body.style.backgroundColor = "blue";
		  document.getElementById("footer").style.color = "yellow";
        }
        if (randNumber == 2){
			document.body.style.backgroundImage = "";
          document.body.style.backgroundColor = "red";
		  document.getElementById("footer").style.color = "blue";
        }
        if (randNumber == 3){
		  document.body.style.backgroundImage = "url(boo.png)";
		  document.getElementById("footer").style.color = "white";
        }
        if (randNumber == 4){
		  document.body.style.backgroundImage = "";
          document.body.style.backgroundColor = "yellow";
		  document.getElementById("footer").style.color = "black";
        }
        if (randNumber == 5){
		  document.body.style.backgroundImage = "";	
          document.body.style.backgroundColor = "green";
		  document.getElementById("footer").style.color = "pink";
        }
		if (randNumber == 6){
			document.body.style.backgroundImage = "";
          document.body.style.backgroundColor = "lime";
		  document.getElementById("footer").style.color = "black";
        }
		if (randNumber == 7){
			document.body.style.backgroundImage = "";
          document.body.style.backgroundColor = "brown";
		  document.getElementById("footer").style.color = "white";
        }
      }
    });
est.addEventListener('click', function(event){
	language = "est";
});
eng.addEventListener('click', function(event){
	language = "eng";
});
function getRandom(){
	return Math.floor((Math.random() * 7) + 1);
}
	


 };

//võtab aja ja kirjutab #clock elemendi siss
function writeDate(){

  var today = new Date();

  var year = today.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var month = months[today.getMonth()];
  var months_est = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
  var month_est = months_est[today.getMonth()];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var day_of_week = days[today.getDay()];
  var days_est = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
  var day_of_week_est = days_est[today.getDay()];
  var day = today.getDate();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  if (language == "eng"){
	  
	clock.innerHTML = (day_of_week) + "<br>" + addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds) + "<br>" + (day) + "." + (month) + "." + (year);
	
	}
  else{
	clock.innerHTML = (day_of_week_est) + "<br>" + addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds) + "<br>" + (day) + "." + (month_est) + "." + (year);
  }
}
function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }

  return number;
}