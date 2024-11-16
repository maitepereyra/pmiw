class pantallaInstrucciones{
  constructor(){
    
    }
    
  dibujar(){
    image(instrucciones, 0, 0, 640, 480);  
    this.boton.dibujar();
    }
  
  boton() {
    if (mouseX > 220 && mouseX < 420 && mouseY > 410 && mouseY < 445) {
      this.juego.dibujar();
    }
  }
  
  }
