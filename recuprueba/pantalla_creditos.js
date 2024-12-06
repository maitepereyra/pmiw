class pantallaCreditos {
  constructor(controlDePantallas) {
    this.controlDePantallas = controlDePantallas;
  }

  dibujar() {
    image(imgCreditos, 0, 0, width, height);
  }

  botonReiniciar() {
    if (mouseX > 240 && mouseX < 420 && mouseY > 300 && mouseY < 355) {
      objPrincipal.reiniciarJuego();
    }
  }
}
