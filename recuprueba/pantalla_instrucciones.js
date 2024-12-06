class pantallaInstrucciones {
  constructor(controlDePantallas) {
    this.controlDePantallas = controlDePantallas;
  }

  dibujar() {
    image(imgInstrucciones, 0, 0, width, height);
  }

  boton() {
    if (mouseX > 265 && mouseX < 400 && mouseY > 300 && mouseY < 335) {
      this.controlDePantallas.pantallaActiva = 3;
    }
  }
}
