(function(){
  "use strict";

  var ClockApp = function(){

    // SINGLETON PATTERN (4 rida)
    if(ClockApp.instance){
      return ClockApp.instance;
    }
    ClockApp.instance = this; // this viitab moosipurgile

    console.log(this);


    // KÕIK MUUTUJAD, mis on üldised ja muudetavad
    this.clock = document.getElementById('clock');
    this.author = document.getElementById('author');

    //panen rakenduse tööle
    this.init();
  };

  ClockApp.prototype = {

    init: function(){
      console.log('rakendus käivitus');
      // Siia tuleb esialgne loogika

      this.writeDate(); // selleks, et ei oleks näha 0:0:0

      // käivitan intervalli | 500ms = 0.5s
      window.setInterval(this.writeDate.bind(this), 500);


      this.mouseEnter();
//      this.mouseLeave();
    },

    mouseEnter: function(){
      this.author.addEventListener('mouseenter', function(){
        this.author.style.color = "green";
//        this.mouseLeave();
      });


/*    mouseLeave: function(){
      this.author.addEventListener('mouseleave', function(){
        this.author.style.color = "black";
      });
*/

    window.addEventListener('keyup', function(event){
      console.log(event.which);
      if(event.which == 32){

        document.body.style.backgroundColor ='black';
        document.body.style.textShadow ='0px 0px 15px green';
      }
      if(event.which == 13){

        document.body.style.backgroundColor ='white';
        document.body.style.textShadow ='0px 0px 0px green';
      }
      if(event.which == 38 ){

        //document.body.style.backgroundColor ='white';
        document.body.style.fontSize ='2em';
        //document.body.style.textShadow ='0px 0px 0px green';
      }
      if(event.which == 40 ){
        document.body.style.fontSize ='1em';
      }
    });
  },

  writeDate: function(){

    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var months = new Array('jaanuar','veebruar','märts','aprill','mai','juuni','juuli','august','september','oktoober','november','detsember');

    document.getElementById('date').innerHTML = day+'.'+months[month]+' '+year;

    var hours = this.addZeroBefore(today.getHours());
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    seconds = this.addZeroBefore(seconds);

    //muudan #clock elemendi htmli
    clock.innerHTML = hours + ':' + this.addZeroBefore(minutes) + ':' + seconds;
//    document.getElementById('date').innerHTML = day+'.'+months[month]+' '+year;
  },

  addZeroBefore: function(number){

    if(number < 10){
      number = "0" + number;
    }

    return number;
  }

};


window.onload = function(){
  var app = new ClockApp();
};

})();

//--------------------------------------------------------
/*window.onload = function(){
  var clock = document.getElementById('clock');

  writeDate();

  window.setInterval(function(){

    writeDate();

  }, 500);

  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  document.getElementById('date').innerHTML = day+'.'+months[month]+' '+year;

  window.addEventListener('keyup', function(event){
    console.log(event.which);
    if(event.which == 32){

      document.body.style.backgroundColor ='black';
      document.body.style.textShadow ='0px 0px 15px green';
    }
    if(event.which == 13){

      document.body.style.backgroundColor ='white';
      document.body.style.textShadow ='0px 0px 0px green';
    }
    if(event.which == 38 ){

      //document.body.style.backgroundColor ='white';
      document.body.style.fontSize ='2em';
      //document.body.style.textShadow ='0px 0px 0px green';
    }
    if(event.which == 40 ){
      document.body.style.fontSize ='1em';
    }
  });

  document.getElementById("author").addEventListener("mouseenter", mouseEnter);
  function mouseEnter() {
      document.getElementById("author").style.color = "green";
  }
  document.getElementById("author").addEventListener("mouseleave", mouseLeave);
  function mouseLeave() {
      document.getElementById("author").style.color = "black";
  }


};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();

  var seconds= today.getSeconds();
  seconds = addZeroBefore(seconds);
  clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
}

function addZeroBefore(number){

  if(number<10){
    number="0"+number;
  }

  return number;
}
*/
