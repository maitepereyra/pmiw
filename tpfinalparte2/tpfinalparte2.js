let mario, bola1, bola2, castillo, goomba, inicio, instrucciones, creditos, fondo;
let objPrincipal;
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
}

function setup() {
  createCanvas(640, 480);
  objPrincipal = new programaPrincipal();
}


function draw() {
  background(200,200,200);
  objPrincipal.dibujar();
  if(keyIsPressed){
  objPrincipal.teclaPresionada(keyCode);
  }
}

function mousePressed() {
  if (pantallaActiva === 1) {
    objPrincipal.pantallaInicio.botonJugar();
    objPrincipal.pantallaInicio.botonInstrucciones();
  } else if (pantallaActiva === 2) {
    objPrincipal.pantallaInstrucciones.boton();
  } else if (pantallaActiva === 4) {
    objPrincipal.pantallaCreditos.boton();
  }
  console.log(mouseX,mouseY);
}

function keyPressed() {
  objPrincipal.teclaPresionada(keyCode);
  if (pantallaActiva === 3) {
    this.juego.teclaPresionada(keyCode);
  }
}
