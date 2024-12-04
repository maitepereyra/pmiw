class base {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vidas = 5;
    this.destruida = false;
  }

  dibujar() {
    if (!this.destruida) {
      fill(255, 0, 255);
      rect(this.posX, this.posY, 50, 50);
    }
  }

  recibirGolpe() {
    if (this.vidas > 0) {
      this.vidas--;
      if (this.vidas <= 0) {
        this.destruir();
      }
    }
  }

  destruir() {
    this.destruida = true;
  }

  haRecibidoGolpe(fuego) {
    if (!this.destruida && dist(this.posX, this.posY, fuego.posX, fuego.posY) < 50) {
      this.recibirGolpe();
      fuego.disparado = false; 
    }
  }
}
