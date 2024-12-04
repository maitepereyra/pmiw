class enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      fill(0, 255, 0);
      rect(this.posX, this.posY, 50, 50);
    }
  }

  matar() {
    this.vida = false;
  }

  haTocadoElFuego(fuego) {
    if (this.vida && dist(this.posX, this.posY, fuego.posX, fuego.posY)<35) {
      this.matar();
      fuego.disparado = false;
    }
  }
}
