class proyectil {
  constructor(posX, posY, movPersonajeX, movPersonajeY) {
    this.posX = posX;
    this.posY = posY;
    this.movX = (movPersonajeX - posX) / dist(posX, posY, movPersonajeX, movPersonajeY) * 3; 
    this.movY = (movPersonajeY - posY) / dist(posX, posY, movPersonajeX, movPersonajeY) * 3;
    this.seUso = false;
  }

  dibujar() {
    if (this.seUso) {
      image(imgProyectil,this.posX, this.posY, 30, 30);
      this.moverse();
    }
  }

  moverse() {
    this.posX += this.movX;
    this.posY += this.movY;
  }

  usar() {
    this.seUso = true;
  }

  verificarDefensa(personaje) {
    if (this.seUso && dist(this.posX, this.posY, personaje.posX, personaje.posY) < 30) {
      personaje.recibirGolpe();  
      this.seUso = false; 
    }
  }
}
