let anchoPantalla = 640;
let altoPantalla = 480;
let imagenes = [];
let cantidadImg = 24;
let pantallaActual = 0;
let boton;
let decision = false;

function setup() {
createCanvas(anchoPantalla,altoPantalla);
}


function draw() {
image(imagenes[pantallaActual], 0, 0, anchoPantalla, altoPantalla);
verificarPantalla();
cuadroTexto();
  }

function mousePressed() {
opciones();
console.log(mouseX,mouseY);
}
