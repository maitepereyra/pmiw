class pantallaCreditos {
  constructor() {
  }

  dibujar() {
    image(creditos, 0, 0, width, height);
  }

  botonReiniciar() {
    if (mouseX > 240 && mouseX < 420 && mouseY > 300 && mouseY < 355) {
      objPrincipal.reiniciarJuego();
    }
  }
}
