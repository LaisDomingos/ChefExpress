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
    if (comecarJogar.on_Click(mouseX, mouseY)) {
      tela = 5;
    } 
  } 
  if(tela == 5){
    if(sair.on_Click(mouseX, mouseY)){
      tela = 1;
    }
    if (isMouseOver && mostrarMenu) {
      if (mouseX > width * 0.924 && mouseX < width * 0.924 + width/16.2 && mouseY > height * 0.22 && mouseY < height * 0.22 + height / 5.5) {
        telaFuncionarios();
      } else if(mouseX > width * 0.92 && mouseX < width * 0.92 + width / 16 && mouseY > height * 0.42 && mouseY < height * 0.42 + height / 11){
        telaPratos();
      } else if(mouseX > width * 0.924 && mouseX < width * 0.924 + width / 16 && mouseY > height * 0.55 && mouseY < height * 0.55 + height / 10){
        telaRanking();    
      } else if(mouseX > width * 0.92 && mouseX < width * 0.92 + width / 15 && mouseY > height * 0.68 && mouseY < height * 0.68 + height / 11){
        telaAvaliacoes();
      }
    }
    if(mostrarTelaFuncionarios){
      if (fecharFuncionarios.on_Click(mouseX, mouseY)) {
        mostrarTelaFuncionarios = false;
      }
      botoesFuncionarios();
    }
    
    if(mostrarTelaPratos){
      adicionadoLista = false;
      if (fecharPratos.on_Click(mouseX, mouseY)) {
        mostrarTelaPratos = false;
        retirarCheck();
      }
      if(presente.on_Click(mouseX, mouseY)){
        postGastoPresente();
        if(presenteComprado){
          pratoPresente = random(pratosGerais);
          let idPrato = pratosGerais.indexOf(pratoPresente);
          console.log(idPrato);
          postPratos(idPrato);
        }
        
        mostrarTelaPresente = true;
      }
      if(pratosLista.on_Click(mouseX, mouseY)){
        let pratos = adicionarPratos();
        //console.log(pratos);
        postTrocas(pratos);
        adicionadoLista = true;
      }
      if(verListaTrocas.on_Click(mouseX, mouseY)){
        criarInputs4();
        mostrarTelaTrocas = true;
      }
    }
    if(mostrarTelaPresente){
      if (fecharPresentes.on_Click(mouseX, mouseY)) {
        mostrarTelaPresente = false;
      }
      if(comprarNovoP.on_Click(mouseX,mouseY)){
        postGastoPresente();
        if(presenteComprado){
          pratoPresente = random(pratosGerais);
          let idPrato = pratosGerais.indexOf(pratoPresente);
          console.log(idPrato);
          postPratos(idPrato);
        }
      }
    }
    if(mostrarTelaTrocas){
      getUsers();
      if (fecharTrocas.on_Click(mouseX, mouseY)) {
        mostrarTelaTrocas = false;
        destruirInputs4();
      }
      if(findUserBtn.on_Click(mouseX, mouseY)){
        findOtherUser();
      }
      if(tradeBtn.on_Click(mouseX, mouseY)){
        performTrade();
      }
    }
   
    if(mostrarTelaRanking){
      if (fecharRanking.on_Click(mouseX, mouseY)) {
        mostrarTelaRanking = false;
      }
    }

    if(mostrarTelaAvaliacoes){
      if (fecharAvaliacoes.on_Click(mouseX, mouseY)) {
        mostrarTelaAvaliacoes = false;
      }    
    }
    let rectX = width * 0.9;
    let rectY = height * 0.82;
    let rectWidth = width / 17;
    let rectHeight = height / 6;
    if (mouseX > rectX && mouseX < rectX + rectWidth && mouseY > rectY && mouseY < rectY + rectHeight) {
      xGarcon = width * 0.82;
      yGarcon = height * 0.52;
      if(garcomComPedido){
        garcomComPedido = false;
      }
    }
    //Movimento do garçom para as mesas
    movimentoAteMesa();

    //Movimento do garçom para os pedidos
    movimentoAtePedidos()
  }
}