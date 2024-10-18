function preload() {
for(let m = 0; m < cantidadImg; m++) {
  imagenes[m] = loadImage("data/imagen" + m + ".jpg");
  }}
  
function avanzar() {
pantallaActual++;
if (pantallaActual >= cantidadImg) {
  pantallaActual = 0;
  }
  }
