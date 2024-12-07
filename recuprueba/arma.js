class fuego {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparado = false;
  }

  dibujar() {
    if (this.disparado) {
      image(imgArma,this.posX, this.posY, 30, 30);
      this.mover();
    }
  }

  mover() {
    this.posY-=10;
  }

  disparar() {
    this.disparado = true;
  }
}
