class pantallaGanaste {
  constructor(controlDePantallas) {
    this.controlDePantallas = controlDePantallas;
  }

  dibujar() {
    image(imgGanaste, 0, 0, width, height);
  }

  botonCreditos() {
    if (mouseX > 240 && mouseX < 415 && mouseY > 310 && mouseY < 380) {
      this.controlDePantallas.pantallaActiva = 4;
    }
  }
}
