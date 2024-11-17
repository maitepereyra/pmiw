class proyectil {
  constructor(posX, posY, movPersonajeX, movPersonajeY) {
    this.posX = posX;
    this.posY = posY;
    this.movX = (movPersonajeX - posX) / dist(posX, posY, movPersonajeX, movPersonajeY) * 5;
    this.movY = (movPersonajeY - posY) / dist(posX, posY, movPersonajeX, movPersonajeY) * 5;
    this.usada = false;
  }

  dibujar() {
    if (this.usada) {
      image(bola2, this.posX, this.posY, 30, 30);
      this.moverse();
    }
  }

  moverse() {
    this.posX+= this.movX;
    this.posY+= this.movY;
  }

  usar() {
    this.usada = true;
  }

  verificarAtaqueAEnemigo(personaje) {
    if (this.usada) {
      if (dist(this.posX, this.posY, personaje.posX, personaje.posY) < 30 && personaje.vida) {
        this.usar();
      }
    }
  }
  
  verificarDefensa(personaje) {
  if (this.usada && dist(this.posX, this.posY, personaje.posX, personaje.posY) < 30) {
    personaje.morir();
  }
}
  
}
