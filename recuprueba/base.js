class base {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vidas = 5;
    this.destruida = false;
  }

  dibujar() {
    if (!this.destruida) {
      image(imgBase,this.posX, this.posY, 100, 100);
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
