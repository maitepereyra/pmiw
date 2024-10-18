let anchoPantalla = 640;
let altoPantalla = 480;
let imagenes = [];
let cantidadImg = 23;
let pantallaActual = 0;

function setup() {
createCanvas(anchoPantalla,altoPantalla);
}


function draw() {
if (imagenes[pantallaActual]) {
image(imagenes[pantallaActual], 0, 0, anchoPantalla, altoPantalla);
  }
  }

function mousePressed() {
avanzar();
}
