

var Title = function Title(title, subtitle, start) {
       
       this.step=function() {
         if(glider.tasten['RESTART'] && start) start();
        };
        
      this.draw = function(ctx) {
        ctx.fillStyle="'FFFFFF";
        ctx.textAlign="center";
        
        ctx.font="bold 40px Arial";
        ctx.fillText(title
