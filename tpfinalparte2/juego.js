class juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    this.crearBase();
  }

  dibujar() {
    image(fondo,0,0,640,480);
    this.personaje.dibujar();
    this.base.dibujar();
    for (let e = 0; e < this.cantidadEnemigos; e++) {
      this.enemigos[e].dibujar();
      this.enemigos[e].atacar();
      this.enemigos[e].proyectil.verificarDefensa(this.personaje);
    }
    this.controlarAtaques();
  }

  crearPersonaje() {
    this.personaje = new personaje();
  }

  crearEnemigos() {
  this.enemigos = [];
  for (let e = 0; e < this.cantidadEnemigos; e++) {
    this.enemigos[e] = new enemigo(width / (this.cantidadEnemigos + 1) * (e + 1) - 25,200);
    this.enemigos[e].contadorDisparos = e * 30; 
  }
}

  crearBase() {
    this.base = new base();
  }

  ganar() {
  }

  perder() {
  }

  controlarAtaques() {
    if (this.personaje.siAtaco()) {
      for (let e = 0; e < this.cantidadEnemigos; e++) {
        this.enemigos[e].fueAtacado(this.personaje.arma);
      }
      this.personaje.arma.verificarImpactoEnemigos(this.enemigos);
      this.personaje.arma.verificarImpactoBase(this.base);
      this.base.fueAtacada(this.personaje.arma);
      this.personaje.impactoEnEnemigo(this.personaje.arma);
    }
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
