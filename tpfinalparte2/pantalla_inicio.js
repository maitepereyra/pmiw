class pantallaInicio{
  constructor(){
    
    }
    
  dibujar(){
    image(inicio, 0, 0, 640, 480);
    this.botonJugar.dibujar();
    this.botonInstrucciones.dibujar();
    }
    
  botonJugar() {
    if (mouseX > 220 && mouseX < 420 && mouseY > 310 && mouseY < 345) {
      this.juego.dibujar();
    }
  }
  
  botonInstrucciones() {
    if (mouseX > 220 && mouseX < 420 && mouseY > 410 && mouseY < 445) {
      this.pantallaInstrucciones.dibujar();
    }
  }
        
  }
