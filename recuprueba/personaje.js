class personaje {
  constructor(posX, posY) {
    this.posX = 320;
    this.posY = 380;
    this.vida = 5;
    this.arma = new fuego();
  }

  dibujar() {
    this.arma.dibujar();
    image(imgPersonaje,this.posX, this.posY, 100, 100);
    textSize(16);
    fill(255);
    text("Vidas: " + this.vida, 10, 20);
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (key === 'a') {
      this.lanzarFuego();
      if (!sonido.isPlaying()) {
      sonido.play();
      }
    }
  }

  moverIzquierda() {
    this.posX -= 30;
  }

  moverDerecha() {
    this.posX += 30;
  }

  lanzarFuego() {
    this.arma = new fuego(this.posX, this.posY);
    this.arma.disparar();
  }

  haLanzadoFuego() {
    return this.arma.disparado;
  }

  recibirGolpe() {
    this.vida--; 
    if (this.vida <= 0) {
      this.morir();  
    }
  }

  morir() {
    this.vida = 0;
  }
}
