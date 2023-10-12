function movimentoGarcon(){ 
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
  
}




