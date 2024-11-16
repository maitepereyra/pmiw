let mario, bola1, bola2, castillo, goomba, inicio, instrucciones, creditos, fondo;
let objPrincipal;

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
}

function setup() {
  createCanvas(640, 480);
  objPrincipal = new programaPrincipal(3);
}


function draw() {
  background(200,200,200);
  objJuego.dibujar();
  if(keyIsPressed){
  objJuego.teclaPresionada(keyCode);
  }
}
