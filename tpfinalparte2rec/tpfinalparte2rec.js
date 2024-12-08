//TPFINALPARTE2
//MAITENA PEREYRA PROPATTO 120354/3
//COMISION 5
// hola profe, disculpe comunicarme por estos medios pero queria aclarar que todo el trabajo lo estuve haciendo bajo un nombre de prueba, al momento de subir el trabajo final me tome el tiempo de cambiar el nombre para cumplir los requisitos. al momento que lo hice, funcionaba a la perfeccion, sin embargo, ahora me tira un error que no permite ver nada, dejo mi codigo "de prueba" para que se comprenda que son exactamente iguales y no hay razones oara que uno funcione y el otro no

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
