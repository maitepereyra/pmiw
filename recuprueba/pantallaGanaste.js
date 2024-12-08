class pantallaGanaste {
  constructor() {
  }

  dibujar() {
    image(imgGanaste, 0, 0, width, height);
  }

  botonCreditos() {
    if (mousePressed) {
      if (mouseX > 240 && mouseX < 415 && mouseY > 310 && mouseY < 380) {
        objPrincipal.controlDePantalla.pantallactiva = 4;
      }
    }
  }
}
