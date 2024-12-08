//TPFINALPARTE2
//MAITENA PEREYRA PROPATTO 120354/3
//COMISION 5

let imgArma, imgBase, imgEnemigo, imgFondo, imgPersonaje, imgProyectil, imgInicio, imgInstrucciones, imgCreditos, imgPerdiste, imgGanaste;
let objPrincipal;
let sonido;

function preload() {
  soundFormats('mp3');
  sonido=loadSound("data/arma.mp3");
  imgArma = loadImage('data/arma.png');
  imgBase = loadImage('data/base.png');
  imgEnemigo = loadImage('data/enemigo.png');
  imgFondo = loadImage('data/fondo.png');
  imgPersonaje = loadImage('data/personaje.png');
  imgProyectil = loadImage('data/proyectil.png');
  imgInicio = loadImage('data/inicio.jpg');
  imgInstrucciones = loadImage('data/instrucciones.jpg');
  imgCreditos = loadImage('data/creditos.jpg');
  imgGanaste = loadImage('data/ganaste.jpg');
  imgPerdiste = loadImage('data/perdiste.jpg');
}

function setup() {
  createCanvas(640, 480);
  objPrincipal = new programaPrincipal();
}


function draw() {
  objPrincipal.dibujar();
}

function keyPressed() {
  objPrincipal.teclaPresionada(keyCode);
}

function mousePressed() {
  objPrincipal.mousePresionado(mousePressed);
}
