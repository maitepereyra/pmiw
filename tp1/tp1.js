//TP1
//MAITENA PEREYRA PROPATTO
//COMISION 5
//LINK DEL VIDEO: https://youtu.be/Bvvfp_2TkQ8?si=0cS-XuEA1M146bg6

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
  colores = cambiar();
  redraw();
}
