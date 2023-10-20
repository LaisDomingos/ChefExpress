/*function movimentoGarcon(){ 
  image(garconImagens[0], xGarcon, yGarcon, width/19, height/5);
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW  && xGarcon > 0) {// Movimento para a esquerda
      xGarcon -= 3;
    } else if (keyCode === RIGHT_ARROW  && xGarcon < width - width*0.1) {// Movimento para a direita
      xGarcon += 3;
    }
    if (keyCode === UP_ARROW  && yGarcon > 0) {// Movimento para cima
      yGarcon -= 3;
    } else if (keyCode === DOWN_ARROW  && yGarcon < height - height*0.38) {  // Movimento para baixo
      yGarcon += 3;
    }
  }
}*/

function movimentoGarcon(){
  image(garconImagens[0], xGarcon, yGarcon, width/19, height/5);
  if (garconMovendo1) {
    if (xGarcon !== width * 0.2 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.2;
      yGarcon = mesa2468Y;
      garconMovendo1 = false;
    }
  }
  if (garconMovendo2) {
    if (xGarcon !== width * 0.2 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.2;
      yGarcon = mesa1357Y;
      garconMovendo2 = false;
    }
  }
  if (garconMovendo3) {
    if (xGarcon !== width * 0.35 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.35;
      yGarcon = mesa2468Y;
      garconMovendo3 = false;
    }
  }
  if (garconMovendo4) {
    if (xGarcon !== width * 0.35 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.35;
      yGarcon = mesa1357Y;
      garconMovendo4 = false;
    }
  }
  if (garconMovendo5) {
    if (xGarcon !== width * 0.55 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.55;
      yGarcon = mesa2468Y;
      garconMovendo5 = false;
    }
  }
  if (garconMovendo6) {
    if (xGarcon !== width * 0.55 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.55;
      yGarcon = mesa1357Y;
      garconMovendo6= false;
    }
  }
  if (garconMovendo7) {
    if (xGarcon !== width * 0.7 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.7;
      yGarcon = mesa2468Y;
      garconMovendo7 = false;
    }
  }
  if (garconMovendo8) {
    if (xGarcon !== width * 0.7 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.7;
      yGarcon = mesa1357Y;
      garconMovendo8 = false;
    }
  }
}





