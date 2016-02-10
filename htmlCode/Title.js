

var Title = function Title(title, subtitle, start) {
       
       this.step=function() {
         if(glider.tasten['RESTART'] && start) start();
        };
        
      this.draw = function(ctx) {
        ctx.fillStyle="'FFFFFF";
        ctx.textAlign="center";
        
        ctx.font="bold 40px Arial";
        ctx.fillText(title, glider.standardDimensionen['BREITE']/2, glider.standardDimensionen['HOEHE']/2};
        
        ctx.font="bold 20px Arial";
        ctx.fillText(subtitle, glider.standardDimensionen['BREITE']/2, glider.standardDimensionen['HOEHE']/2+40);
        
}

var obj = function() {
       
       Title 1 = new Title("Sound Glider", "Press Enter to Start", function start());
       
}
