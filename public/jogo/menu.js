let mostrarMenu = false;
let mostrarTelaFuncionarios = false;
let mostrarTelaPratos = false;
let mostrarTelaAvaliacoes = false;
let mostrarTelaRanking = false;

function menu() {
    push();
    fill("#2ebcae");
    noStroke();
    rect(width * 0.97, height * 0.08, width / 25, height / 1.4, 10);
  
    // Verifique se o mouse está sobre o retângulo
    if (mouseX > width * 0.9 && mouseX < width * 0.9 + width / 13 && mouseY > height * 0.08 && mouseY < height * 0.08 + height / 1.4) {
      isMouseOver = true;
    } else {
      isMouseOver = false;
      mostrarMenu = false;
    }

    if (isMouseOver) {
      image(menuImg, width * 0.91, height * 0.08, width / 12, height / 1.4);  
      push();
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(20)
      text(dinheiro + "€",width * 0.95, height * 0.165)
      pop();
     
    }
    pop();
    loop();
}

function mouseMoved() {
    menu();
    mostrarMenu = true;
}

function telasMenu(){
  if (mostrarTelaFuncionarios){
    janelaFuncionarios();  
    mostrarTelaPresente = false;
    mostrarTelaTrocas = false;
    mostrarTelaPratos = false;
    mostrarTelaRanking = false;
    mostrarTelaAvaliacoes = false;
    retirarCheck();
  } else if(mostrarTelaPratos){
    janelaPratos();
    mostrarTelaFuncionarios = false;
    mostrarTelaRanking = false;
    mostrarTelaAvaliacoes = false;
  } else if(mostrarTelaAvaliacoes){
    janelaAvaliacoes();
    mostrarTelaPresente = false;
    mostrarTelaTrocas = false;
    mostrarTelaFuncionarios = false;
    mostrarTelaPratos = false;
    mostrarTelaRanking = false;
    retirarCheck();
  } else  if (mostrarTelaRanking){
    janelaRanking();
    mostrarTelaFuncionarios = false;
    mostrarTelaAvaliacoes = false;
    mostrarTelaPratos = false;
    retirarCheck();
  }

  if(mostrarTelaPresente){
    janelaPresente();
    mostrarTelaPratos = false;
    retirarCheck();
  }
  if(mostrarTelaTrocas){
    janelaTrocas();
    mostrarTelaPratos = false;
    retirarCheck();
  }
  loop();
}