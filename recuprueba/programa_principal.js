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
  
  mousePresionado(mouseIsPressed) {
    pantallaInicio.botonJugar();
    pantallaInicio.botonInstrucciones();
    pantallaInstrucciones.boton();
    pantallaCreditos.botonReiniciar();
    pantallaPerdiste.botonCreditos();
    pantallaGanaste.botonCreditos();
    }

  reiniciarJuego() {
    this.pantallaActiva = 3;
    this.juego = new juego(3);
  }
}
