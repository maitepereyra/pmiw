class personaje {
  constructor(posX, posY) {
    this.posX = 320;
    this.posY = 380;
    this.vida = true;
    this.muerto = false;
    this.Arma = new Arma();
  }

  dibujar() {
    if (this.vida) {
      this.Arma.dibujar();
      image(mario, this.posX, this.posY, 100, 100); }
  }

  teclaPresionada(keyCode) {
    if (keyCode == RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode == LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode == ENTER) {
      this.atacar();
    }
  }

  moverDerecha() {
    this.posX += 5;
  }

  moverIzquierda() {
    this.posX -= 5;
  }

  atacar() {
    this.Arma = new Arma(this.posX, this.posY);
    this.Arma.usar();
  }

  siAtaco() {
    return this.Arma.usada;
  }

  morir() {
    this.vida = false;
    this.muerto = true;
  }


  fueAtacado(proyectil) {
    if (dist(this.posX, this.posY, proyectil.posX, proyectil.posY) < 50) {
      this.morir();
    }
  }

}
