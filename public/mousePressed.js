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
    if (mouseX > mesa12X && mouseX < mesa12X + width / 14){
      if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
        garconMovendo1= true;
      }
      if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
        garconMovendo2= true;
      }
    }
    if (mouseX > mesa34X && mouseX < mesa34X + width / 10){
      if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
        garconMovendo3= true;
      }
      if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
        garconMovendo4= true; 
      }
    }
    if (mouseX > mesa56X && mouseX < mesa56X + width / 10){
      if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
        garconMovendo5= true;
      }
      if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
        garconMovendo6= true;
      }
    }
    if (mouseX > mesa78X && mouseX < mesa78X + width / 14){
      if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
        garconMovendo7= true;
      }
      if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
        garconMovendo8= true;
      }
    }
    //Movimento do garçom para os pedidos
    if(mouseY > height * 0.85 && mouseY < height * 0.85 + height / 20){
      if ( mouseX > width * 0.15 && mouseX < width * 0.15 + width / 30) {
        buscarPrato1 = true;
      }
      if ( mouseX > width * 0.2 && mouseX < width * 0.2 + width / 30) {
        buscarPrato2 = true;
      }
      if ( mouseX > width * 0.25 && mouseX < width * 0.25 + width / 30) {
        buscarPrato3 = true;
      }
      if ( mouseX > width * 0.3 && mouseX < width * 0.3 + width / 30) {
        buscarPrato4 = true;
      }
      if ( mouseX > width * 0.35 && mouseX < width * 0.35 + width / 30) {
        buscarPrato5 = true;
      }
      if ( mouseX > width * 0.4 && mouseX < width * 0.4 + width / 30) {
        buscarPrato6 = true;
      }
      if ( mouseX > width * 0.45 && mouseX < width * 0.45 + width / 30) {
        buscarPrato7 = true;
      }
      if ( mouseX > width * 0.5 && mouseX < width * 0.5 + width / 30) {
        buscarPrato8 = true;
      }
      if ( mouseX > width * 0.55 && mouseX < width * 0.55 + width / 30) {
        buscarPrato9 = true;
      }
      if ( mouseX > width * 0.6 && mouseX < width * 0.6 + width / 30) {
        buscarPrato10 = true;
      }
      if ( mouseX > width * 0.65 && mouseX < width * 0.65 + width / 30) {
        buscarPrato11 = true;
      }
      if ( mouseX > width * 0.7 && mouseX < width * 0.7 + width / 30) {
        buscarPrato12 = true;
      }
      if ( mouseX > width * 0.75 && mouseX < width * 0.75 + width / 30) {
        buscarPrato13= true;
      }
      if ( mouseX > width * 0.8 && mouseX < width * 0.8 + width / 30) {
        buscarPrato14= true;
      }
    }
    
  }
}

function postChef(chefId){
  let dataToSend = {
    chefId: chefId
  }
  httpPost('/postChef', dataToSend, 'json', (data) => {
    console.log(data);
    loop();
  });
} 

function postAjudante(ajudanteIdId){
  let dataToSend = {
    ajudanteId: ajudanteIdId
  }
  httpPost('/postAjudante', dataToSend, 'json', (data) => {
    console.log(data);
    loop();
  });
}

