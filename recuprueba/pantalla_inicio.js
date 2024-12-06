class pantallaInicio {
  constructor() {
  }

  dibujar() {
    image(imgInicio, 0, 0, width, height);
  }

  botonJugar(mouseIsPressed) {
    if (mouseX > 225 && mouseX < 410 && mouseY > 125 && mouseY < 185) {
      this.pantallaActiva = 3;
    }
  }

  botonInstrucciones(mouseIsPressed) {
    if (mouseX > 250 && mouseX < 405 && mouseY > 200 && mouseY < 255) {
      this.pantallaActiva = 2;
    }
  }
}
