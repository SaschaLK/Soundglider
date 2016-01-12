
/*
Einarbeitung in Javascript ist im Gang

Noch unklar wie die Bewegung genau umsetzbar ist,
Ich habe im moment eine gewisse Vorstellung (Bild bewegt sich nicht die Figur)

*/

/*
* === Feedback Alpers, Dez 11 ===
*
* Unter Umständen machen Sie hier den gleichen Denkfehler wie einige Ihrer Kommilitonen:
* Mit dem Controller-Teil (also bei Ihnen JS statt PHP) sind Sie nur für die Änderungen
* der HTML-Container verantwortlich, weil Sie lediglich die Funktionalität realisieren sollen.
* 
* Um also Bewegung ins Spiel zu bringen, könnten Sie beispielsweise als Reaktion auf den
* Tastendruck "nach links" durch einen Nutzer eine Bilddatei, die bislang in einem
* Feld einer Tabelle eingeblendet wird in dem links davon liegenden Feld der Tabelle
* einblenden. In das ursprüngliche Feld der Tabelle müssten Sie dann ein anderes Bild einblenden.
*
* Wenn Sie dagegen den Hintergrund bewegen wollen, müssten Sie stattdessen alle anderen
* Elemente um jeweils ein Feld der Tabelle verschieben.
*
* Wenn Sie mit Canvas arbeiten, wird das nicht gehen, aber Canvas ist auch eine Technik,
* die ich für Erstsemester noch nicht unbedingt empfehlen würde.
*
* === Feedback Alpers, Ende ===
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

/*
* === Feedback Alpers, Dez 11 ===
* 
* Schauen Sie erst einmal, dass Sie eine Variante fertig stellen.
* Alternative Steuerungen sind natürlich etwas schönes, aber es ist essentiell,
* dass überhaupt eine Steuerung funktioniert.
*
* Ist das gewährleistet, dann sollte als nächstes sichergestellt werden,
* dass zumindest ein grundlegende Spielablauf realisiert ist, bevor
* Sie sich an Erweiterungen wie mehr Steuerungen setzen.
*
* === Feedback Alpers, Ende ===
*/

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

/*
* === Feedback Alpers, Dez 11 ===
*
* Sehr gut. Es ist klar zu erkennen, dass Sie sich kontinuierlich mit
* dem Projekt beschäftigen und versuchen die entstehenden Probleme zu lösen.
*
* Allerdings ist auch erkennbar, dass Sie es noch nicht schaffen, Ihren Programmteil
* mit dem HTML-Teil zu integrieren. Das ist aber wichtig für eine erfolgreiche Projektarbeit.
*
* Ansonsten machen Sie momentan den gleichen Fehler wie viele Einsteiger:
* Sie versuchen einen Bereich perfekt zu lösen, anstatt zunächst zumindest eine lauffähige
* Gesamtversion zu entwickeln. Bei Ihnen ist das der Teil, in dem es um die Steuerung des
* Spiels geht. Wie gesagt sollten Sie sich hier für eine Variante entscheiden. Wenn
* die funktioniert wenden Sie sich anderen Baustellen zu, um so zumindest eine erste
* lauffähige Version des Programms zu entwickeln.
*
* Danach können Sie dann wieder in die Bereiche schauen, in denen Sie noch mehr Möglichkeiten
* erreichen wollen.
*
* Beachten Sie aber bitte, dass Sie zunächst die Variante implementieren sollte, die
* möglichst allen Systemen funktionieren sollte. Hier deshalb nochmal der Hinweis: Ihre
* Aufgabe besteht darin, die Reaktion der Anwendung auf Eingaben von Nutzern zu programmieren.
* Die Eingaben werden durch den HTML-Teil aufgenommen, sodass Fälle wie beispielsweise das 
* Drücken einer Taste eigentlich nicht in Ihrem Teil abgefragt werden sollten.
*
* === Feedback Alpers, Ende ===