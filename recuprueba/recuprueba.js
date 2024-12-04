let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new juego(3);
}


function draw() {
  background(50);
  objJuego.dibujar();
}

function keyPressed(){
  objJuego.teclaPresionada(keyCode);
  }
