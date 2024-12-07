class pantallaInicio {
  constructor() {
  }

  dibujar() {
    image(imgInicio, 0, 0, width, height);
  }

  botonJugar() {
    if (mousePressed) {
      if (mouseX > 225 && mouseX < 410 && mouseY > 125 && mouseY < 185) {
        this.controlDePantalla.pantallactiva = 3;
      }
    }
  }

  botonInstrucciones() {
    if (mousePressed) {
      if (mouseX > 250 && mouseX < 405 && mouseY > 200 && mouseY < 255) {
        this.controlDePantalla.pantallactiva = 2;
      }
    }
  }
}
