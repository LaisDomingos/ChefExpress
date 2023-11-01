let chefId;
let ajudanteId;

function mousePressed() {
  if (start.on_Click(mouseX, mouseY) && tela == 1) {
    tela = 2;
    criarInputs2();
  } 
  if (tela == 2){
    if (mouseX > width * 0.53 && mouseX < width * 0.53 + 70 && mouseY > height * 0.77 && mouseY < height * 0.77 + 30) {
      tela = 3;
      destruirInputs2();
      criarInputs3();
    } 
    if(buttonVoltar1.on_ClickVoltar(mouseX,mouseY)){
      tela = 1;
      destruirInputs2();
    }
    if(login.on_Click(mouseX,mouseY)){
      loginBD();
    }
  }
  if(tela == 3){
    if (buttonVoltar2.on_ClickVoltar(mouseX, mouseY)) {
      tela = 2;    
      criarInputs2();
      destruirInputs3();
    } 
    if (registrar.on_Click(mouseX, mouseY)) {
      registrarBD();
    }
  } 
  if(tela == 4){
    if (isMouseOver && mostrarMenu) {
      if (mouseX > width * 0.91 && mouseX < width * 0.91 + width / 16 && mouseY > height * 0.32 && mouseY < height * 0.32 + height / 5.5) {
        telaFuncionarios();
        mostrarTelaPratos = false;
        retirarCheck();
      } else if(mouseX > width * 0.91 && mouseX < width * 0.91 + width / 15.2 && mouseY > height * 0.6 && mouseY < height * 0.6 + height / 11){
        telaPratos();
        mostrarTelaFuncionarios = false;
      }
    }
    if(mostrarTelaFuncionarios){
      if (fecharFuncionarios.on_Click(mouseX, mouseY)) {
        console.log("fechar funcionários");
        mostrarTelaFuncionarios = false;
      }
      botoesFuncionarios();
    }
    
    if (fecharPratos.on_Click(mouseX, mouseY) && mostrarTelaPratos) {
      console.log("fechar pratos");
      mostrarTelaPratos = false;
      retirarCheck();
    }
    
    //Movimento do garçom para as mesas
    movimentoAteMesa();

    //Movimento do garçom para os pedidos
    movimentoAtePedidos()
  }
}