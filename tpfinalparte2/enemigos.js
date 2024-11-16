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
      image(goomba, this.posX, this.posY, 50, 50);
      this.proyectil.dibujar();
      this.atacar();
    }
  }
  
  matar(){
     this.vida = false;
    }  
  
  fueAtacado(arma) {
    if (dist(this.posX, this.posY, arma.posX, arma.posY) < 100) {
      this.matar();
    }
  }
    
  atacar() {
    if (this.contadorDisparos >= this.tiempoEntreDisparos && objJuego.personaje.vida) {
    this.proyectil = new proyectil(this.posX, this.posY, objJuego.personaje.posX, objJuego.personaje.posY);
    this.proyectil.usar();
    this.contadorDisparos -= this.tiempoEntreDisparos; 
    }
  this.contadorDisparos++;
  this.proyectil.moverse();
}




}
