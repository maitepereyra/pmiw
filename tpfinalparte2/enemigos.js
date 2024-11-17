class enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.proyectil = new proyectil(this.posX, this.posY);
    this.tiempoEntreDisparos = 100;
    this.contadorDisparos = 0;
  }

  dibujar() {
    if (this.vida) {
      this.proyectil.dibujar();
      this.atacar(personaje);
      image(goomba, this.posX, this.posY, 50, 50);
    }
  }

  morir() {
    this.vida = false;
  }

  fueAtacado(arma) {
    if (dist(this.posX, this.posY, arma.posX, arma.posY) < 40) {
      this.morir();
    }
  }

  defender(personaje) {
    this.proyectil = new proyectil(this.posX, this.posY, personaje.posX, personaje.posY);
    this.proyectil.usar();
  }

  atacar(personaje) {
    this.contadorDisparos++;
    if (this.contadorDisparos >= this.tiempoEntreDisparos) {
      this.defender(personaje);
      this.contadorDisparos = 0;
    }
  }


  siDefienden() {
    return this.proyectil.usada;
  }
}
