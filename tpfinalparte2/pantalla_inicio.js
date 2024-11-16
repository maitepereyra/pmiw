class pantallaInicio{
  constructor(){
    
    }
    
  dibujar(){
    image(inicio, 0, 0, 640, 480);
    }
    
  botonJugar() {
    if (mouseX > 225 && mouseX < 410 && mouseY > 125 && mouseY < 185) {
      pantallaActiva = 3;
    }
  }
  
  botonInstrucciones() {
    if (mouseX > 250 && mouseX < 405 && mouseY > 200 && mouseY < 255) {
      pantallaActiva = 2;
    }
  }
        
  }
