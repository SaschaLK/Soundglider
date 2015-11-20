
/*
Einarbeitung in Javascript ist im Gang

Noch unklar wie die Bewegung genau umsetzbar ist,
Ich habe im moment eine gewisse Vorstellung (Bild bewegt sich nicht die Figur)

*/

(function() {

/* Glider deklaration und Bewegungsattribute
*/
var glider = function (Container_id, optconfig) {
      if (glider_instanz) {
      return glider_instanz; 
            }
      }; 

glider_instanz = this;

this.config = optconfig ;

this.glider 
this.distanzMeter = 0;
this.distanzGelaufen = 0;

this.gestartet = false ;
this.crashed = false;
this.pause = false;
this.aktiv = false;

this.hinderniss = [];

this.zeit = 0;
this.gliderZeit = 0;
this.msperFrame = 1000 / FPS;
this.aktuelleGeschw. = this.optcon.GESCHW;

this.playCount = 0;

//Display Anpassung - noch unklar wie es umsetzbar ist
------------------------------------------------
var isHIDPI = ????

var isTouch = ????

var isIOS = ????

var isMobile = ????


--------------------------------------------------

var FPS = 60;

var STANDARD_BREITE = 1000;

glider.standardDimensionen = {
     BREITE = STANDARD_BREITE;
     HÖHE = 300; 
};

---------------------------------------------------

// Variabeln kommen noch nach absprache, muss erstmal gucken wie ich die Bewegung hinbekomme

glider.optcon = {
      GESCHW:  ,
      MAX_GESCHW:  ,
      GRAVITY:  ,
      MIN_SPRUNG_HÖHE:   ,
      INITIAL_SPRUNG_SCHWUNG:   ,
      GESCHW_FALL_KOEFFIZIENT:  ,
      BESCHLEUNIGUNG:   ,
      MOBILE_GESCHW_KOEFFIZIENT:   ,
      
      ....


};

glider.hindernissDefinition = {


....

};

-------------------------------------------------------------------------

// Alternative, Steuerung mit Maus anstatt Tastatur vielleciht sogar umsetzbar mit TOUCH - Work-in-Progress

var tx = targetX - x,
    ty = targetY - y,
    dist = Math.sqrt(tx*tx+ty*ty);
  
velX = (tx/dist)*thrust;
velY = (ty/dist)*thrust;

--------------------------------------------------------------------
// Bewegung bei Pc, touch kommt noch
glider.Tasten = {
  SPRINGEN: {'38': 1, '32': 1},  // Pfeil-hoch, Leerstaste
  DUCKEN: {'40': 1},  // Pfeil_runter
  RESTART: {'13': 1}  // Enter
};

//Weitere Events möglich

glider.events = {
  CLICK: 'click',
  KEYDOWN: 'keydown',
  KEYUP: 'keyup',
  MOUSEDOWN: 'mousedown',
  MOUSEUP: 'mouseup',
  TOUCHEND: ,
  TOUCHSTART: ,
....

};


// Canvas ???? Platzhalter

var canvas = document.getElementById('canvas');
if (canvas && canvas.getContext) {
   var ctx = canvas.getContext("2d");
   if (ctx) {
      ctx.fillStyle = "#9FC0D0";
      ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);

      return canvas;
    }
}

// Draw-Glider

.....


//Hindernisse bzw Grösse und Höhe noch unklar sowie Position

hinderniss.blockKlein = .... ;
hinderniss.blockGross = ...;

// Kollisionsabfrage mit Hindernissen Work-in-Progress

var x = x2 - x1,
    y = y2 - y1,
    distance = Math.sqrt(x*x + y*y);



    }
)
