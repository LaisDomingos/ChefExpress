let mostrarMenu = false;
let mostrarTelaFuncionarios = false;
let mostrarTelaPratos = false;



function menu() {
    push();
    fill("#2ebcae");
    noStroke();
    rect(width * 0.97, height * 0.1, width / 25, height / 1.5, 10);
  
    // Verifique se o mouse está sobre o retângulo
    if (mouseX > width * 0.9 && mouseX < width * 0.9 + width / 13 && mouseY > height * 0.1 && mouseY < height * 0.1 + height / 1.5) {
      isMouseOver = true;
    } else {
      isMouseOver = false;
      mostrarMenu = false;
    }

    if (isMouseOver) {
      image(menuImg, width * 0.9, height * 0.1, width / 13, height / 1.5);  
      push();
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(20)
      text(dinheiro + "€",width * 0.94, height * 0.205)
      pop();
     
    }
    pop();
}

function mouseMoved() {
    menu();
    mostrarMenu = true;
}

function telasMenu(){
  if (mostrarTelaFuncionarios){
      janelaFuncionarios();  
  } else if(mostrarTelaPratos){
      janelaPratos();
  }
}