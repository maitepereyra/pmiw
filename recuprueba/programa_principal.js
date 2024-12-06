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
    if (pantallaActiva === 1) {
    objPrincipal.pantallaInicio.botonJugar();
    objPrincipal.pantallaInicio.botonInstrucciones();
  } else if (pantallaActiva === 2) {
    objPrincipal.pantallaInstrucciones.boton();
  } else if (pantallaActiva === 3) {
    objPrincipal.juego();
  } else if (pantallaActiva === 4) {
    objPrincipal.pantallaCreditos.botonReiniciar();
  } else if (pantallaActiva === 5) {
    objPrincipal.pantallaPerdiste.botonCreditos();
  } else if (pantallaActiva === 6) {
    objPrincipal.pantallaGanaste.botonCreditos();
  }
    }

  reiniciarJuego() {
    this.pantallaActiva = 3;
    this.juego = new juego(3);
  }
}
