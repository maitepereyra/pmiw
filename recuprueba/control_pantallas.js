class controlDePantallas {
  constructor() {
    this.pantallaActiva = 1;
    this.pantallaInicio = new pantallaInicio();
    this.pantallaCreditos = new pantallaCreditos();
    this.pantallaInstrucciones = new pantallaInstrucciones();
    this.pantallaPerdiste = new pantallaPerdiste();
    this.pantallaGanaste = new pantallaGanaste();
  }

  dibujar(pantallas) {
    if (this.pantallaActiva === 1) {
      this.pantallaInicio.dibujar();
    } else if (this.pantallaActiva === 2) {
      this.pantallaInstrucciones.dibujar();
    } else if (this.pantallaActiva === 3) {
      objPrincipal.juego.dibujar();
    } else if (this.pantallaActiva === 4) {
      this.pantallaCreditos.dibujar();
    } else if (this.pantallaActiva === 5) {
      this.pantallaPerdiste.dibujar();
    } else if (this.pantallaActiva === 6) {
      this.pantallaGanaste.dibujar();
    }
  }
  
  cambiarPantalla() {
    this.pantallaActiva++;
  }
}
