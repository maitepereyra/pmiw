class juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.crearPersonaje();
    this.crearBase();
  }

  dibujar() {
    this.personaje.dibujar();
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i].dibujar();
    }
    this.base.dibujar();
    this.controlarDisparosAEnemigos();
  }

  crearBase() {
    this.base = new base(250, 0);
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let i=0; i<this.cantidadEnemigos; i++) {
      this.enemigos[i] = new enemigo(i*290, 200);
    }
  }

  crearPersonaje() {
    this.personaje = new personaje(width/2, 300);
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

  controlarDisparosAEnemigos() {
    if (this.personaje.haLanzadoFuego()) {
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i].haTocadoElFuego(this.personaje.arma);
      }
      this.base.haRecibidoGolpe(this.personaje.arma);
    }
  }
}
