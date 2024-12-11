class programaPrincipal {
  constructor() {
    this.juego = new juego(3);
    this.controlDePantalla = new controlDePantalla();
  }

  dibujar() {
    this.controlDePantalla.dibujar();
    if (this.controlDePantalla.obtenerPantallaActiva() === 3) {
      this.juego.dibujar();
    }
  }

  teclaPresionada(keyCode) {
  if (this.controlDePantalla.obtenerPantallaActiva() === 3) {
    this.juego.teclaPresionada(keyCode);
  }
    if (keyCode === 82){
    this.reiniciarJuego();
    }
}

  mousePresionado(mousePressed) {
    if (this.controlDePantalla.pantallactiva === 1) {
      this.controlDePantalla.pantallainicio.botonJugar();
      this.controlDePantalla.pantallainicio.botonInstrucciones();
    } else if (this.controlDePantalla.pantallactiva === 2) {
      this.controlDePantalla.pantallainstrucciones.boton();
    } else if (this.controlDePantalla.pantallactiva === 3) {
      this.juego.teclaPresionada();
    } else if (this.controlDePantalla.pantallactiva === 4) {
      this.controlDePantalla.pantallacreditos.botonReiniciar();
    } else if (this.controlDePantalla.pantallactiva === 5) {
      this.controlDePantalla.pantallaperdiste.botonCreditos();
    } else if (this.controlDePantalla.pantallactiva === 6) {
      this.controlDePantalla.pantallaganaste.botonCreditos();
    }
  }

  reiniciarJuego() {
    this.controlDePantalla.pantallactiva = 3; 
    this.juego = new juego(3); 
}
}
