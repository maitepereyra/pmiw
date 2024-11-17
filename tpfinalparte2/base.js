class base {
  constructor() {
    this.posX = 270;
    this.posY = 0;
    this.vida = true;
  }

  dibujar() {
    if (this.vida) {
      image(castillo, this.posX, this.posY, 100, 100);
    }
  }

  fueAtacada(Arma) {
    if (dist(this.posX, this.posY, Arma.posX, Arma.posY) < 110) {
      this.destruirse();
    }
  }
  
  destruirse() {
    this.vida = false;
  }
  
}
