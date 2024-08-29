let imagen
let colores = true;

function preload() {
  imagen = loadImage('data/obra.png');
  }

function setup() {
 createCanvas(800,400);
 rectMode(CENTER);
 noLoop();
}


function draw() {
background(255);
image(imagen,0,0);
estructura (28, width/2, 0);
}

function mousePressed () {
  colores = false;
  redraw();
}

function keyPressed () {
  if (key == 'g') {
    colores = true;
    redraw();
  }
}
