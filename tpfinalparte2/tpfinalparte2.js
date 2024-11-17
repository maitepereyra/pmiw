//TPFINALPARTE1
//MAITENA PEREYRA PROPATTO 120354/3
//COMISION 5
//LINK DEL VIDEO:

let mario, bola1, bola2, castillo, goomba, inicio, instrucciones, creditos, fondo, perdiste, ganaste;
let objPrincipal;
let sonido;
let pantallaActiva = 1;

function preload() {
  mario = loadImage('data/personaje.png');
  bola1 = loadImage('data/arma.png');
  bola2 = loadImage('data/proyectil.png');
  castillo = loadImage('data/base.png');
  goomba = loadImage('data/enemigo.png');
  inicio = loadImage('data/inicio.jpg');
  instrucciones = loadImage('data/instrucciones.jpg');
  creditos = loadImage('data/creditos.jpg');
  fondo = loadImage('data/fondo.png');
  perdiste = loadImage('data/perdiste.jpg');
  ganaste = loadImage('data/ganaste.jpg');
  soundFormats('mp3');
  sonido = loadSound('data/mario.mp3');
}

function setup() {
  createCanvas(640, 480);
  objPrincipal = new programaPrincipal();
}


function draw() {
  background(200, 200, 200);
  objPrincipal.dibujar();
  if (keyIsPressed) {
    objPrincipal.teclaPresionada(keyCode);
  }
}

function mousePressed() {
  if (pantallaActiva === 1) {
    objPrincipal.pantallaInicio.botonJugar();
    objPrincipal.pantallaInicio.botonInstrucciones();
  } else if (pantallaActiva === 2) {
    objPrincipal.pantallaInstrucciones.boton();
  } else if (pantallaActiva === 3) {
    objPrincipal.juego();
  } else if (pantallaActiva === 4) {
    objPrincipal.pantallaCreditos.botonReiniciar();
  } else if (pantallaActiva === 5) {
    objPrincipal.pantallaPerdiste.botonCreditos();
  } else if (pantallaActiva === 6) {
    objPrincipal.pantallaGanaste.botonCreditos();
  }
  sonido.loop();
}

function keyPressed() {
  this.juego.teclaPresionada.keyPressed(keyCode);
}
