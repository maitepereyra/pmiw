class pantallaInicio {
  constructor(controlDePantallas) {
    this.controlDePantallas = controlDePantallas;
  }

  dibujar() {
    image(imgInicio, 0, 0, width, height);
  }

  botonJugar() {
    if (mouseX > 225 && mouseX < 410 && mouseY > 125 && mouseY < 185) {
      this.controlDePantallas.pantallaActiva = 3;
    }
  }

  botonInstrucciones() {
    if (mouseX > 250 && mouseX < 405 && mouseY > 200 && mouseY < 255) {
      this.controlDePantallas.pantallaActiva = 2;
    }
  }
}
