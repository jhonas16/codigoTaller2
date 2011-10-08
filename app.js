var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

var assetManager = new AssetManager();
assetManager.queueDownload("./imagenes/vaca_disparo.png","vacadisparo");

assetManager.downloadAll(function() {
    var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225);
    juego.addEntidad(circulo);
    juego.iniciar();
});
