function Circulo(juego, x, y ) {
	this.juego = juego;
	this.x = x;
	this.y = y;
	this.remover = false;
}

Circulo.prototype.actualizar = function() { 
    if (this.x < this.juego.ctx.canvas.width) {
        this.x += 2;
    }
    else {
        this.x = 0;
    }
};

Circulo.prototype.dibujar = function(ctx) { 
    /*ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "black";
    ctx.arc(this.x, this.y, 50, Math.PI / 5, Math.PI*7.5/4,false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();*/
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, (55/180) * Math.PI, (235/180) * Math.PI, false);
    ctx.fillStyle = "rgb(0,0, 0)";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, (135/180) * Math.PI, (315/180) * Math.PI, false);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(this.x, this.y - 25, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
};
