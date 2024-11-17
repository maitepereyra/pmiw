class pantallaInstrucciones{
  constructor(){
    
    }
    
  dibujar(){
    image(instrucciones, 0, 0, width, height);  
    }
  
  botonReiniciar() {
    if (mouseX > 265 && mouseX < 400 && mouseY > 300 && mouseY < 335) {
      pantallaActiva = 3;
    }
  }
  
  }
