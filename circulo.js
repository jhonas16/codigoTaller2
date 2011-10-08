function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
	this.animacion = new Animation(assetManager.getAsset("vacadisparo"), 200, 100, true);
}

Circulo.prototype.actualizar = function() { 
    this.x += 5;
      if (this.x >= this.juego.ctx.canvas.width) {
        this.remover = true;
 	var cIzquierda = new CirculoIzquierda(this.juego, this.x, this.y);
        this.juego.addEntidad(cIzquierda);
;
    }
};

Circulo.prototype.dibujar = function(ctx) { 
  /*  ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2,false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath(); */
    	Circulo.prototype.dibujar = function(ctx) { 
    this.animacion.drawFrame(17, ctx, this.x, this.y);
};
};

function CirculoIzquierda(juego, x, y ) {
    this.juego = juego;
    this.x = x;
    this.y = y;
    this.remover = false;
}
CirculoIzquierda.prototype.actualizar = function() { 
    this.x -= 5;
    if (this.x <= 0) {
        this.remover = true;
 	var cDerecha = new Circulo(this.juego, this.x, this.y);
        this.juego.addEntidad(cDerecha);
    }
};

CirculoIzquierda.prototype.dibujar = function(ctx) { 
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, 0, Math.PI*2,false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath(); 
	
};