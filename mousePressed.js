function mousePressed() {
    if (isMouseOver && mostrarMenu) {
      if (mouseX > width * 0.91 && mouseX < width * 0.91 + width / 16 && mouseY > height * 0.32 && mouseY < height * 0.32 + height / 5.5) {
        telaFuncionarios();
        mostrarTelaPratos = false;
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
      if (addChef1.on_Click(mouseX, mouseY)) {
        addChef1.corBt = "#066315";
        addChef2.corBt = "blue";
        addChef3.corBt = "blue";
        addChef4.corBt = "blue";
      } else if (addChef2.on_Click(mouseX, mouseY)) {
        addChef1.corBt = "blue";
        addChef2.corBt = "#066315";
        addChef3.corBt = "blue";
        addChef4.corBt = "blue";
      } else if (addChef3.on_Click(mouseX, mouseY)) {
        addChef1.corBt = "blue";
        addChef2.corBt = "blue";
        addChef3.corBt = "#066315";
        addChef4.corBt = "blue";
      } else  if (addChef4.on_Click(mouseX, mouseY)) {
        addChef1.corBt = "blue";
        addChef2.corBt = "blue";
        addChef3.corBt = "blue";
        addChef4.corBt = "#066315";
      }
      if (addAjudante1.on_Click(mouseX, mouseY)) {
        addAjudante1.corBt = "#066315";
      } else if (addAjudante2.on_Click(mouseX, mouseY)) {
        addAjudante2.corBt = "#066315";
      } else if (addAjudante3.on_Click(mouseX, mouseY)) {
        addAjudante3.corBt = "#066315";
      } else  if (addAjudante4.on_Click(mouseX, mouseY)) {
        addAjudante4.corBt = "#066315";
      }
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