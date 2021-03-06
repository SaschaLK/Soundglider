
/*
Die Variabeln mit den Kennwörtern Sprite bedeutet Sprite sheets für die Applikation
und sind platzhalter es geht hier nur um denn Code und nicht um das visuelle.
Genau so wie die Obstacles Arrays


*/
start:
(start: function () {

/* Glider deklaration und Bewegungsattribute
*/
function glider (Container_id, optconfig) {
      if (glider_instanz) {
      return glider_instanz; 
            }
      }; 

glider_instanz = this;

this.outerContainerEl = document.querySelector(outerContainerId);
this.config = optconfig ;
this.containerEl = null;

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
this.aktuelleGeschw. = this.optconfig.GESCHW;

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

//Display Anpassung 
------------------------------------------------
var isHIDPI = window.devicePixelRatio > 1;

var isTouch =  window.navigator.userAgent.indexOf('CriOS') > -1 ||
    window.navigator.userAgent == 'UIWebViewForStaticFileContent';

var isIOS = window.navigator.userAgent.indexOf('Mobi') > -1 || isIOS;

var isMobile = 'ontouchstart' in window;


--------------------------------------------------

var FPS = 60;

var STANDARD_BREITE = 1000;

glider.standardDimensionen = {
     BREITE = STANDARD_BREITE;
     HOEHE = 300; 
};

---------------------------------------------------

// Variabeln kommen noch nach absprache, muss erstmal gucken wie ich die Bewegung hinbekomme
glider.optconfig = {
      GESCHW:  ,
      MAX_GESCHW:  ,
      GRAVITY:  ,
      MIN_SPRUNG_HÖHE:   ,
      INITIAL_SPRUNG_SCHWUNG:   ,
      GESCHW_FALL_KOEFFIZIENT:  ,
      BESCHLEUNIGUNG:   ,
      MOBILE_GESCHW_KOEFFIZIENT:   ,
      GAMEOVER_CLEAR_TIME:  ,
      
      ....


};

glider.hindernissDefinition = {


....

};

glider.classes = {
      CANVAS: 'glider-canvas',
      CONTAINER: 'glider-container',
      CRASHED: 'crashed',
      TOUCH_CONTROLLER: 'controller'
}




// Bewegung bei Pc, Mapping der Tastatur

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
};

glider.spriteDef = {
      
      LDPI: {
            
      }

      HDPI: {
            
      }
}

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

function init () {
      
this.canvas = createCanvas(this.containerEl, this.dimensionen.BREITE,
        this.dimensionen.HOEHE, glider.classes.PLAYER);     
        
                  this.canvas.breite = this.dimensionen.BREITE;
                  this.canvas.höhe = this.dimensionen.HÖHE;
                  this.canvasCtx = this.canvas.getContext("2d");
                  this.canvasCtx.fillStyle = '#f7f7f7';
                  this.canvasCtx.fil();
    

      
// Draw - Glider

this.gLIDER= new Glider (this.canvas, this.spriteDef.GLIDER);

this.outerContainerEl.appendChild(this.containerEl);

if (isMOBILE) {
      this.createTouchController();
    }
    this.startListening();
    this.update();
    
  },
   


// Erschafft den Touch-Controller
createTouchController: function() {
    this.touchController = document.createElement('div');
    this.touchController.className = glider.classes.TOUCH_CONTROLLER;
  },

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

// Bindet die Tastatur / Maus / Touch befehle

  startListening: function() {
        
    // Tastatur
    document.addEventListener(glider.events.KEYDOWN, this);
    document.addEventListener(glider.events.KEYUP, this);
    
    if (isMOBILE) {
          
      // Mobil-Touch
      this.touchController.addEventListener(glider.events.TOUCHSTART, this);
      this.touchController.addEventListener(glider.events.TOUCHEND, this);
      this.containerEl.addEventListener(glider.events.TOUCHSTART, this);
      
    } else {
          
      // Maus
      document.addEventListener(glider.events.MOUSEDOWN, this);
      document.addEventListener(glider.events.MOUSEUP, this);
    }
  },
// Entfernt den Listener
 stopListening: function() {
       
    document.removeEventListener(glider.events.KEYDOWN, this);
    document.removeEventListener(glider.events.KEYUP, this);
    
    if (isMobile) {
          
      this.touchController.removeEventListener(glider.events.TOUCHSTART, this);
      this.touchController.removeEventListener(gliderr.events.TOUCHEND, this);
      this.containerEl.removeEventListener(glider.events.TOUCHSTART, this);
      
    } else {
          
      document.removeEventListener(glider.events.MOUSEDOWN, this);
      document.removeEventListener(glider.events.MOUSEUP, this);
    }
  },

// Verwertet die Eingabe key-down

onKeyDown: function(k) {

      if (!this.crashed && (glider.Tasten.SPRINGEN[k.keyCode] ||
           k.type == glider.events.TOUCHSTART)) {
                 
        if (!this.activated) {
          this.activated = true;

        }
        if (!this.gLider.jumping && !this.gLider.ducking) {
          this.gLider.startJump(this.currentSpeed);
        }
      }
      if (this.crashed && k.type == glider.events.TOUCHSTART &&
          k.currentTarget == this.containerEl) {
        this.restart();
      }
    
    if (this.activated && !this.crashed && glider.Tasten.DUCKEN[k.keyCode]) {
      k.preventDefault();
      
      if (this.gLider.jumping) {

        this.gLider.setSpeedDrop();
      } else if (!this.gLider.jumping && !this.gLider.ducking) {
            
        this.gLider.setDuck(true);
      }
    }
  },
 
// Verwertet Key-up

onKeyUp: function(k) {
      
    var keyCode = String(k.keyCode);
    var isjumpKey = glider.Tasten.JUMP[keyCode] ||
       k.type == glider.events.TOUCHEND ||
       k.type == glider.events.MOUSEDOWN;
       
    if (this.isRunning() && isjumpKey) {
      this.gLider.endJump();
    } else if (glider.Tasten.DUCKEN[keyCode]) {
      this.gLider.speedDrop = false;
      this.gLider.setDuck(false);
    } else if (this.crashed) {

      var deltaTime = getTimeStamp() - this.time;
      
      if (glider.Tasten.RESTART[keyCode] || this.isLeftClickOnCanvas(k) ||
      (deltaTime >= this.optconfig.GAMEOVER_CLEAR_TIME &&
      glider.Tasten.SPRUNG[keyCode])) {
            
        this.restart();
      }
    } else if (this.paused && isjumpKey) {

      this.gLider.reset();
      this.play();
    }
  },
  
  function createCanvas(container, breite, höhe, opt_classname) {
  var canvas = document.createElement('canvas');
  canvas.className = opt_classname ? gider.classes.CANVAS + ' ' +
      opt_classname : gider.classes.CANVAS;
  canvas.breite = breite;
  canvas.höhe = höhe;
  container.appendChild(canvas);
  return canvas;
};
  
  HorizonLine.dimensions = {
  BREITE: 600,
  HOEHE: 12,
  YPOS: 127
};
  
  function HorizonLine(canvas, spritePos) {
  this.spritePos = spritePos;
  this.canvas = canvas;
  this.canvasCtx = canvas.getContext('2d');
  this.sourceDimensions = {};
  this.dimensions = HorizonLine.dimensions;
  this.sourceXPos = [this.spritePos.x, this.spritePos.x +
      this.dimensions.BREITE];
  this.xPos = [];
  this.yPos = 0;
  this.bumpThreshold = 0.5;
  this.setSourceDimensions();
  this.draw();
};

HorizonLine.prototype = {

  setSourceDimensions: function() {
    for (var dimension in HorizonLine.dimensions) {
      if (isHIDPI) {
        if (dimension != 'YPOS') {
          this.sourceDimensions[dimension] =
              HorizonLine.dimensions[dimension] * 2;
        }
      } else {
        this.sourceDimensions[dimension] =
            HorizonLine.dimensions[dimension];
      }
      this.dimensions[dimension] = HorizonLine.dimensions[dimension];
    }
    this.xPos = [0, HorizonLine.dimensions.BREITE];
    this.yPos = HorizonLine.dimensions.YPOS;
  },
  
  getRandomType: function() {
    return Math.random() > this.bumpThreshold ? this.dimensions.BREITE : 0;
  },
  
    draw: function() {
    this.canvasCtx.drawImage(glider.imageSprite, this.sourceXPos[0],
        this.spritePos.y,
        this.sourceDimensions.BREITE, this.sourceDimensions.HOEHE,
        this.xPos[0], this.yPos,
        this.dimensions.BREITE, this.dimensions.HOEHE);
        this.canvasCtx.drawImage(Runner.imageSprite, this.sourceXPos[1],
        this.spritePos.y,
        this.sourceDimensions.BREITE, this.sourceDimensions.HOEHE,
        this.xPos[1], this.yPos,
        this.dimensions.BREITE, this.dimensions.HOEHE);
  },
  
  
  
  
  
  
    }
)();



/*
=== Feedback Alpers, Jan 20 ===

Leider hat sich an einer Sache nichts geändert: Sie versuchen hier, eine eigenständige Anwendung zu
erstellen. Was Sie (mit dem Controller-Teil) dagegen tun sollen ist, die Funktionalität einzelner
Container von HTML-Dokumenten zu realisieren.

Das zeigt sich z.B. darin, dass Sie die Auflösung zu ermitteln versuchen, dass Sie prüfen, ob der Input
per Touch oder Tastatur erfolgt, usw. Das ist für Ihre Aufgabe als Entwickler des Controllers
gänzlich irrelevant.

=== Feedback Alpers, Ende
*/

/*
=== Feedback Alpers, Feb 12 ===

Zwar zeigt mir Git an, dass diese Datei sich seit dem letzten Mal geändert hat, bzw. neu hinzugekommen ist,
aber die Kritik vom letzten Mal scheinen Sie nicht umgesetzt zu haben.

=== Feedback Alpers, Ende ===