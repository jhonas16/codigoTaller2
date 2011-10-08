function keyDown(evt) {
    granjero.keyDown(evt);
}   

function mouseClick(evt) {
    granjero.mouseClick(evt);
}   

var canvas = document.getElementById('fondo');
var ctx = canvas.getContext('2d');

var assetManager = new AssetManager();
assetManager.queueDownload("./imagenes/vaca_disparo.png","vacadisparo");
assetManager.queueDownload("./imagenes/granjero.png","granjero");

var granjero;

assetManager.downloadAll(function() {
    var juego = new Juego(ctx);
    var circulo = new Circulo(juego, 0, 225);
    granjero = new Granjero(juego,50, 50);
    juego.addEntidad(granjero);
    juego.addEntidad(circulo);
    juego.iniciar();
    window.addEventListener('click',mouseClick,true);
    window.addEventListener('keydown',keyDown,true);
});
