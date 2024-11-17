class base {
  constructor() {
    this.posX = 270;
    this.posY = 0;
    this.vida = 5;
    this.destruido = false;
    this.impactos = 0;
  }

  dibujar() {
    if (this.vida > 0) {
      image(castillo, this.posX, this.posY, 100, 100);
    }
  }

  fueAtacada(arma) {
    if (dist(this.posX, this.posY, arma.posX, arma.posY) < 110) {
      this.impactos++;
      this.vida--;
      if (this.vida <= 5) {
        this.destruirse();
      }
    }
  }
  
  destruirse() {
    this.vida = 0;
    this.destruido = true;
  }
  
}
