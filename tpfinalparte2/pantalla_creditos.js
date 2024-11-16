class pantallaCreditos {
  constructor() {
  }

  dibujar() {
    image(creditos, 0, 0, 640, 480);
  }

  boton() {
    if (mouseX > 220 && mouseX < 420 && mouseY > 410 && mouseY < 445) {
      this.juego.dibujar();
    }
  }
}
