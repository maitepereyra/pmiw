class personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 1;
    this.arma = new fuego();
  }

  dibujar() {
    this.arma.dibujar();
    fill(255, 0, 0);
    rect(this.posX, this.posY, 50, 50);
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (key === 'a') {
      this.lanzarFuego();
    }
  }

  moverIzquierda() {
    this.posX -= 30;
  }

  moverDerecha() {
    this.posX += 30;
  }

  lanzarFuego(){
    this.arma = new fuego(this.posX,this.posY);
    this.arma.disparar();
    }
    
  haLanzadoFuego(){
    return this.arma.disparado;
    }
    
  morir() {
    this.vida = 0;
  }
    
}
