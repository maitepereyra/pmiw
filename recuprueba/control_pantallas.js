class controlDePantalla {
  constructor() {
    this.pantallactiva = 1;
    this.pantallainicio = new pantallaInicio();
    this.pantallacreditos = new pantallaCreditos();
    this.pantallainstrucciones = new pantallaInstrucciones();
    this.pantallaperdiste = new pantallaPerdiste();
    this.pantallaganaste = new pantallaGanaste();
  }

  dibujar(pantallas) {
    if (this.pantallactiva === 1) {
      this.pantallainicio.dibujar();
    } else if (this.pantallactiva === 2) {
      this.pantallainstrucciones.dibujar();
    } else if (this.pantallactiva === 3) {
      objPrincipal.juego.dibujar();
    } else if (this.pantallactiva === 4) {
      this.pantallacreditos.dibujar();
    } else if (this.pantallactiva === 5) {
      this.pantallaperdiste.dibujar();
    } else if (this.pantallactiva === 6) {
      this.pantallaganaste.dibujar();
    }
  }
  
  cambiarPantalla() {
    this.pantallactiva++;
  }
  
  obtenerPantallaActiva() {
  return this.pantallactiva;
}

}
