let chefId;
let ajudanteId;

function mousePressed() {
  if (start.on_Click(mouseX, mouseY) && tela == 1) {
    tela = 2;
    criarInputs2();
    somRing.play();
  } 
  if (tela == 2){
    if (mouseX > width * 0.53 && mouseX < width * 0.53 + 70 && mouseY > height * 0.77 && mouseY < height * 0.77 + 30) {
      tela = 3;
      destruirInputs2();
      criarInputs3();
      somRing.play();
    } 
    if(buttonVoltar1.on_ClickVoltar(mouseX,mouseY)){
      tela = 1;
      destruirInputs2();
    }
    if(login.on_Click(mouseX,mouseY)){
      loginBD();
      somRing.play();
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
      somRing.play();
    }
  } 
  if(tela == 4){
    if (comecarJogar.on_Click(mouseX, mouseY)) {
      tela = 5;
      somRing.play();
    } 
  } 
  if(tela == 5){
    if(sair.on_Click(mouseX, mouseY)){
      tela = 1;
      idUsuario = '';
      clientes = [];
      mesa1O = false;
      mesa2O = false;
      mesa3O = false;
      mesa4O = false;
      mesa5O = false;
      mesa6O = false;
      mesa7O = false;
      mesa8O = false;
      
      espacoocupado1 = false;
      espacoocupado2 = false;
      espacoocupado3 = false;
      espacoocupado4 = false;
      espacoocupado5 = false;
      espacoocupado6 = false;
      espacoocupado7 = false;
      espacoocupado8 = false;
      espacoocupado9 = false;
      espacoocupado10 = false;
      espacoocupado11 = false;
      espacoocupado12 = false;
      espacoocupado13 = false;
      espacoocupado14 = false;
      espacoocupado15 = false;
     
      espaco1 = false;
      espaco2 = false;
      espaco3 = false;
      espaco4 = false;
      espaco5 = false;
      espaco6 = false;
      espaco7 = false;
      espaco8 = false;
      espaco9 = false;
      espaco10 = false;
      espaco11 = false;
      espaco12 = false;
      espaco13 = false;
      espaco14 = false;
      
      setInterval(gerarCliente, 4000); 
      draw();
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
      getUsers();
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
        postListaTrocas(pratos);
        adicionadoLista = true;
      }
      if(verListaTrocas.on_Click(mouseX, mouseY)){
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
      if (fecharTrocas.on_Click(mouseX, mouseY)) {
        mostrarTelaTrocas = false;
      }
    }
    if(mostrarTelaIdPratos){
      if (fecharIdTrocas.on_Click(mouseX, mouseY)) {
        mostrarTelaIdPratos = false;
      }
      if(trocaBtn.on_Click(mouseX, mouseY)){
        console.log("troca feita");
        trocaEfetuada = true;
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