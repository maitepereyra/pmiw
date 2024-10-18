function dibujarBoton (){
  image(boton, 500, 340, 120, 40);
  }
  
function cuadroTexto() {
  fill(255,196,47);
  rect(anchoPantalla * 0.03,altoPantalla * 0.80,600,70);
  }
  
function clickBoton() {
  if (mouseX > 500 && mouseX < 500 + 120 && mouseY > 340 && mouseY < 340 + 40) {
    avanzar();
  }
}
