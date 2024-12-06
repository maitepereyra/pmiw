class pantallaCreditos {
  constructor() {
  }

  dibujar() {
    image(imgCreditos, 0, 0, width, height);
  }

  botonReiniciar(mouseIsPressed) {
    if (mouseX > 240 && mouseX < 420 && mouseY > 300 && mouseY < 355) {
      objPrincipal.reiniciarJuego();
    }
  }
}
