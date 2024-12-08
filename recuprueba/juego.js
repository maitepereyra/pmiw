class juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.crearPersonaje();
    this.crearBase();
  }

  dibujar() {
    image(imgFondo, 0, 0, 640, 480);
    if (this.personaje.vida > 0) {
      this.personaje.dibujar();
      for (let i = 0; i < this.cantidadEnemigos; i++) {
        this.enemigos[i].dibujar(this.personaje);
      }
      this.base.dibujar();
      this.controlarDisparosAEnemigos();
    }
    if (this.base.destruida) {
      this.ganaste();
    } else if (this.personaje.vida <= 0) {
      this.perdiste();
    }
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
    this.personaje = new personaje(320, 380);
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

  perdiste() {
    objPrincipal.controlDePantalla.pantallactiva = 5;
  }

  ganaste() {
    objPrincipal.controlDePantalla.pantallactiva = 6;
  }
}
