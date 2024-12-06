class enemigo {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = true;
    this.proyectil = new proyectil(this.posX, this.posY, 0, 0);
    this.tiempoEntreDisparos = 200; 
    this.contadorDisparos = 0;
  }

  dibujar(personaje) {
    if (this.vida) {
      this.proyectil.dibujar();
      this.defenderBase(personaje);
      this.proyectil.verificarDefensa(personaje);
      image(imgEnemigo,this.posX, this.posY, 50, 50);
    }
  }
  
  defenderBase(personaje) {
    this.contadorDisparos++;
    if (this.contadorDisparos >= this.tiempoEntreDisparos) {
      this.prepararDefensa(personaje); 
      this.contadorDisparos = 0;
    }
  }
  
  prepararDefensa(personaje) {
    this.proyectil = new proyectil(this.posX, this.posY, personaje.posX, personaje.posY);
    this.proyectil.usar();
  }

  matar() {
    this.vida = false;
  }

  haTocadoElFuego(fuego) {
    if (this.vida && dist(this.posX, this.posY, fuego.posX, fuego.posY)<35) {
      this.matar();
      fuego.disparado = false;
    }
  }
}
