
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

this.outerContainerEl = document.querySelector(outerContainerId);
this.config = optconfig ;

this.dimensionen = glider.stantardDimensionen;

this.canvas = null;
this.canvasCtx= null;

this.gLIDER = null;
this.distanzMeter = null;
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

// Bilder

this.bilder= {};
this.bilderLaden= 0;

if (this.isDisabled()) {
      this.ladeInaktivGlider();
} else {
      this.bilderLaden();
}

}

window['gLIDER'] =gLIDER;

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
/*
var tx = targetX - x,
    ty = targetY - y,
    dist = Math.sqrt(tx*tx+ty*ty);
  
velX = (tx/dist)*thrust;
velY = (ty/dist)*thrust;
*/
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
  TOUCHEND: 'touchend',
  TOUCHSTART: 'touchstart',
....

};



//Hindernisse bzw Grösse und Höhe noch unklar sowie Position

hinderniss.blockKlein = .... ;
hinderniss.blockGross = ...;

// Kollisionsabfrage mit Hindernissen Work-in-Progress
/*
var x = x2 - x1,
    y = y2 - y1,
    distance = Math.sqrt(x*x + y*y);
*/


setSpeed: function(opt_Geschw) {
    var geschw = opt_geschw || this.aktuelleGeschw;
 
 // Reduziert die Geschwindigkeit bei Mobile-Screens.
    if (this.dimensionen.BREITE < STANDARD_BREITE) {
      var mobileGeschw = Geschw * this.dimensions.WIDTH / DEFAULT_WIDTH *
          this.config.MOBILE_SPEED_COEFFICIENT;
      this.currentSpeed = mobileSpeed > Geschw ? Geschw : mobileGeschw;
    } else if (opt_Geschw) {
      this.aktuelleGeschw = opt_Geschw;
    }
  },

// Game - INIT

init: function () {
      
this.canvas = createCanvas(this.containerEl, this.dimensionen.BREITE,
        this.dimensionen.HOEHE, glider.classes.PLAYER);      
        
                  this.canvasCtx = this.canvas.getContext("2d");
                  this.canvasCtx.fillStyle = '#f7f7f7';
                  this.canvasCtx.fil();
    

      
// Draw - Glider

this.gLIDER= new Glider (this.canvas, this.spriteDef.GLIDER);

      
}

// Vorläufige Events

handleEvent: function(e) {
    return (function(evtType, events) {
      switch (evtType) {
        case events.KEYDOWN:
        case events.TOUCHSTART:
        case events.MOUSEDOWN:
          this.onKeyDown(e);
          break;
        case events.KEYUP:
        case events.TOUCHEND:
        case events.MOUSEUP:
          this.onKeyUp(e);
          break;
      }
    }.bind(this))(e.type, glider.events);
  },



    }
)
