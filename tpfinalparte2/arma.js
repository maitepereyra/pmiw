class Arma {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.usada = false;
  }

  dibujar() {
    if (this.usada) {
      image(bola1, this.posX, this.posY, 30, 30);
      this.moverse();
    }
  }

  moverse() {
    if (!this.impactado) {
      this.posY-=10;
    }
  }

  usar() {
    this.usada = true;
  }

  llegoAlObjetivo() {
    this.impactado = true;
  }

  verificarImpactoEnemigos(enemigos) {
    if (this.usada) {
      for (let e = 0; e < enemigos.length; e++) {
        if (
          dist(this.posX, this.posY, enemigos[e].posX, enemigos[e].posY) < 50 &&
          enemigos[e].vida
          ) {
          this.llegoAlObjetivo();
          enemigos[e].vida = false;
        }
      }
    }
  }
}
