class base {
  constructor() {
    this.posX = 270;
    this.posY = 0;
    this.vida = true;
    this.impactos = 0;
  }

  dibujar() {
    if (this.vida) {
      image(castillo, this.posX, this.posY, 100, 100);
    }
  }

  destruirse() {
    this.vida = false;
  }

  fueAtacada(arma) {
    if (dist(this.posX, this.posY, arma.posX, arma.posY) < 110) {
      this.impactos++;
      if (this.impactos >= 5) {
        this.destruirse();
      }
    }
  }
}
