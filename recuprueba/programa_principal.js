class programaPrincipal {
  constructor() {
    this.juego = new juego(3);
    this.controlDePantallas = new controlDePantallas();
  }

  dibujar() {
    this.controlDePantallas.dibujar();
    if (this.pantallaActiva === 3) {
      this.juego.dibujar();
    }
  }

  teclaPresionada(keyCode) {
    if (this.pantallaActiva === 3) {
      this.juego.teclaPresionada(keyCode);
    }
  }

  mousePresionado() {
    if (this.controlDePantallas.pantallaActiva === 1) {
      this.controlDePantallas.pantallaInicio.botonJugar();
      this.controlDePantallas.pantallaInicio.botonInstrucciones();
    } else if (this.controlDePantallas.pantallaActiva === 2) {
      this.controlDePantallas.pantallaInstrucciones.boton();
    } else if (this.controlDePantallas.pantallaActiva === 3) {
      this.juego.teclaPresionada();
    } else if (this.controlDePantallas.pantallaActiva === 4) {
      this.controlDePantallas.pantallaCreditos.botonReiniciar();
    } else if (this.controlDePantallas.pantallaActiva === 5) {
      this.controlDePantallas.pantallaPerdiste.botonCreditos();
    } else if (this.controlDePantallas.pantallaActiva === 6) {
      this.controlDePantallas.pantallaGanaste.botonCreditos();
    }
  }

  reiniciarJuego() {
    this.pantallaActiva = 3;
    this.juego = new juego(3);
  }
}
