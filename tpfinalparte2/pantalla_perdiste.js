class pantallaPerdiste {
  constructor() {
  }

  dibujar() {
    image(perdiste, 0, 0, width, height);
  }

  botonCreditos() {
    if (mouseX > 240 && mouseX < 415 && mouseY > 310 && mouseY < 380) {
      pantallaActiva = 4;
    }
  }
}
