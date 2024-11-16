class programaPrincipal {
  constructor() {
    this.juego = new Juego();
    this.pantallaInicio = new pantallaInicio();
    this.pantallaCreditos = new pantallaCreditos();
    this.pantallaInstrucciones = new pantallaInstrucciones();
  }

  dibujar() {
    if (pantallaActiva === 1) {
      this.pantallaInicio.dibujar();
    } else if (pantallaActiva === 2) {
      this.pantallaInicio.pantallaCreditos();
    } else if (pantallaActiva === 3) {
      this.juego.dibujar();
    }
  }
}
