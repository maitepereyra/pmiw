class juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearPersonaje();
    this.crearEnemigos();
    this.crearBase();
  }

  dibujar() {
    image(fondo, 0, 0, width, height);
    if (this.personaje.vida) {
      this.personaje.dibujar();
      this.base.dibujar();
      for (let e = 0; e < this.cantidadEnemigos; e++) {
        this.enemigos[e].dibujar();
        this.enemigos[e].atacar(this.personaje);
        this.enemigos[e].proyectil.verificarDefensa(this.personaje);
      }
      this.controlarAtaquesPersonaje();
      this.controlarAtaquesEnemigos();
    } else if (this.personaje.muerto) {
      this.perdiste();
    }
  }

  crearPersonaje() {
    this.personaje = new personaje();
  }

  crearEnemigos() {
    this.enemigos = [];
    for (let e = 0; e < this.cantidadEnemigos; e++) {
      this.enemigos[e] = new enemigo(width / (this.cantidadEnemigos + 1) * (e + 1) - 25, 200);
      this.enemigos[e].contadorDisparos = e * 30;
    }
  }

  crearBase() {
    this.base = new base();
  }

  controlarAtaquesPersonaje() {
    if (this.personaje.siAtaco()) {
      for (let e = 0; e < this.cantidadEnemigos; e++) {
        this.enemigos[e].fueAtacado(this.personaje.arma);
      }
      this.base.fueAtacada(this.personaje.arma);
    }
  }

  controlarAtaquesEnemigos() {
    for (let e = 0; e < this.cantidadEnemigos; e++) {
      if (this.enemigos[e].proyectil.usada) {
        this.personaje.fueAtacado(this.enemigos[e].proyectil);
      }
    }
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }

  perdiste() {
  pantallaActiva = 5;
}

  ganaste() {
  pantallaActiva = 6;
}


}
