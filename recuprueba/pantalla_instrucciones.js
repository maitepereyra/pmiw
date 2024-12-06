class pantallaInstrucciones {
  constructor() {
  }

  dibujar() {
    image(imgInstrucciones, 0, 0, width, height);
  }

  boton(mouseIsPressed) {
    if (mouseX > 265 && mouseX < 400 && mouseY > 300 && mouseY < 335) {
      this.pantallaActiva = 3;
    }
  }
}
