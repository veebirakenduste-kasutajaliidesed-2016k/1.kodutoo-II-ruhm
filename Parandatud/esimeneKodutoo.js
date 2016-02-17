(function(){
  "use strict";


  var ClockApp = function(){

    // SINGLETON PATTERN (4 rida)
    if(ClockApp.instance){
      return ClockApp.instance;
    }
    ClockApp.instance = this; // this viitab moosipurgile

    console.log(this);
    //console.log('moosipurgi sees');

    // KÕIK MUUTUJAD, mis on üldised ja muudetavad
    this.clock = document.getElementById('clock');

    //panen rakenduse tööle
    this.init();
  };

  //kõik moosipurgi funktsioonid tulevad siia sisse
  ClockApp.prototype = {

    init: function(){
      console.log('rakendus käivitus');
      // Siia tuleb esialgne loogika

      this.writeDate(); // selleks, et ei oleks näha 0:0:0

      // käivitan intervalli | 500ms = 0.5s
      window.setInterval(this.writeDate.bind(this), 500);
      window.setInterval(this.changeBackgroundColor.bind(this), 10000);

      // hakka kuulama hiireklõpse
      this.bindMouseEvents();
    },

    bindMouseEvents: function(){
      this.clock.addEventListener('click', function(event){
        //console.log(event.x);
      });

      window.addEventListener('keyup', function(event){
        console.log(event.which);
        //left arrow
        if(event.which == 37){
          document.body.style.color = "white";
        }
        //up arrow
        if (event.which == 38 ){
          document.body.style.backgroundImage = "url('6976138-wood-pattern-background.jpg')";
        }
        //right arrow
        if (event.which == 39 ){
          document.body.style.color = "black";
        }
        //down arrow
        if (event.which == 40 ){
          document.body.style.backgroundImage = "initial";
        }
      });
    },

    writeDate: function(){
      var today = new Date();

      var hours = this.addZeroBefore(today.getHours());
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
      seconds = this.addZeroBefore(seconds);
      var day = today.getDate();
      var days = ["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"];
      var year = today.getFullYear();

      //muudan #clock elemendi htmli
      clock.innerHTML = hours + ':' + this.addZeroBefore(minutes) + ':' + seconds;
      date.innerHTML = this.addZeroBefore(today.getDate()) + "/" + this.addZeroBefore((today.getMonth()+1)) + "/" + year;
      weekday.innerHTML = "Täna on " + days[today.getDay()];
    },

    addZeroBefore: function(number){
      if(number >= 0 && number < 10){
        number = "0" + number;
      }
      return number;
    },

    changeBackgroundColor: function(){
      var todayDate = new Date();
      var hoursColor = todayDate.getHours();
      if(hoursColor >= 7 && hoursColor < 12){
        document.body.style.backgroundColor = "PapayaWhip"; //7-12
      }
      if(hoursColor >= 12 && hoursColor < 15){
        document.body.style.backgroundColor = "PeachPuff"; //12-15
      }
      if(hoursColor >= 15 && hoursColor < 18){
        document.body.style.backgroundColor = "Coral"; //15-18
      }
      if(hoursColor >= 18 && hoursColor < 21){
        document.body.style.backgroundColor = "Plum"; //18-21
      }
      if(hoursColor >= 21 && hoursColor < 23){
        document.body.style.backgroundColor = "RoyalBlue"; //21-4
      }
      if(hoursColor >= 0 && hoursColor < 7){
        document.body.style.backgroundColor = "Midnightblue"; //4-7
      }
    }
  };

  window.onload = function(){
    var app = new ClockApp();
  };

})();
