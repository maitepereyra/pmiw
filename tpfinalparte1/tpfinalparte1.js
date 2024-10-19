//TPFINALPARTE1
//MAITENA PEREYRA PROPATTO
//CANDELA HERMIDA
//COMISION 5
//LINK DEL VIDEO: https://youtu.be/pVuj5L9v3cs?si=3KBHZrLT6hyVsCRQ

let anchoPantalla = 640;
let altoPantalla = 480;
let imagenes = [];
let texto = [];
let cantidadImg = 23;
let pantallaActual = 0;
let lineaTexto = 0;
let boton, botonCreditos, botonReiniciar;
let imagenIntro, imagenCreditos;
let decision = false;
let fuente;

function setup() {
  createCanvas(anchoPantalla, altoPantalla);
}


function draw() {
  if (pantallaActual === 0) {
    image(imagenIntro, 0, 0, anchoPantalla, altoPantalla);
  } else if (pantallaActual === "creditos") {
    creditos();
    dibujarBotonReiniciar();
    if (!sound.isPlaying()) {
      sound.play();
    }
  } else {
    dibujarPantalla(pantallaActual);
  }
}

function mousePressed() {
  botones();
  console.log(mouseX, mouseY);
}
