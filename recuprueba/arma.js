class fuego {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparado = false;
  }

  dibujar() {
    if (this.disparado) {
      fill(0, 255, 0);
      rect(this.posX, this.posY, 5, 5);
      this.mover();
    }
  }

  mover() {
    this.posY-=5;
  }

  disparar() {
    this.disparado = true;
  }
}
