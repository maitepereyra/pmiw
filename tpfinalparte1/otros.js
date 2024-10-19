function dibujarBoton() {
  image(boton, 500, 340, 120, 40);
}

function botonEmpezar() {
    if (mouseX > 220 && mouseX < 420 && mouseY > 410 && mouseY < 445) {
      pantallaActual = 1;
    }
  }

function dibujarBotonReiniciar() {
  image(botonReiniciar, 290, 330, 120, 40);
}

function dibujarBotonCreditos() {
  image(botonCreditos, 500, 340, 120, 40);
}

function cuadroTexto() {
  fill(255, 196, 47);
  rect(anchoPantalla * 0.03, altoPantalla * 0.80, 600, 70);
}

function botones() {
  if (pantallaActual === 0) {
    botonEmpezar();
  } else if (pantallaActual === "creditos") {
    dibujarBotonReiniciar();
    reiniciar();
  } else {
    opciones();
  }
}
