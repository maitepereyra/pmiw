class pantallaCreditos {
  constructor() {
  }

  dibujar() {
    image(creditos, 0, 0, 640, 480);
  }

  boton() {
    if (mouseX > 265 && mouseX < 400 && mouseY > 300 && mouseY < 335) {
      pantallaActiva = 3;
    }
  }
}
