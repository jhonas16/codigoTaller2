function Granjero(juego, x, y ) {
    this.juego = juego;
    this.x = x;
    this.y = y;
	this.dx = 0;
    this.dy = 0;    
    this.remover = false;
    this.imagen = assetManager.getAsset("granjero");
}

Granjero.prototype.actualizar = function() { 
    this.x += this.dx;
    this.y += this.dy;
    this.dx = this.dy = 0;   
};

Granjero.prototype.dibujar = function(ctx) { 
    ctx.drawImage(this.imagen, this.x, this.y);
};

Granjero.prototype.mouseClick = function(evt) {
    this.x = evt.layerX;
    this.y = evt.layerY;
};

Granjero.prototype.keyDown = function(evt) {
    switch (evt.keyCode) {
        case 87 :            
            this.dx = 0;
            this.dy = -20;
        break;
        case 83:    
            this.dx = 0;
            this.dy = 20;
        break;
        case 65:    
            this.dx = -20;
            this.dy = 0;
        break;
            case 68:    
            this.dx = 20;
            this.dy = 0;
        break;
    }
};