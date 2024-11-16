class programaPrincipal {
  constructor() {
    this.juego = new juego(3);
    this.pantallaInicio = new pantallaInicio();
    this.pantallaCreditos = new pantallaCreditos();
    this.pantallaInstrucciones = new pantallaInstrucciones();
  }

  dibujar(){
    if (pantallaActiva === 1) {
      this.pantallaInicio.dibujar();
    } else if (pantallaActiva === 2) {
      this.pantallaInstrucciones.dibujar();
    } else if (pantallaActiva === 3) {
      this.juego.dibujar();
    } else if (pantallaActiva === 4) {
      this.pantallaCreditos.dibujar();
    }
  }
  
  teclaPresionada(keyCode) {
    if (pantallaActiva === 3) {
      this.juego.teclaPresionada(keyCode);
    }
  }
}
