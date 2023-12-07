let imgTelaFuncionarios=[];

let contratarChef1 = false;
let contratarChef2 = false;
let contratarChef3 = false;
let contratarChef4 = false;

function janelaFuncionarios(){
  let textS1 = width/80;
  let textS2 = width/110;
  let textS3 = width/112;
  fill('#acefea');
  rect(width*0.1, height*0.02, width*0.77, height*0.9);
  fecharFuncionarios.draw_ButtonFechar(width*0.87, height*0.05);
  push();
    fill('black');
    textSize(textS1);
    text('Chefs : Pode ter 0 a 1 chef e esse é pago diariamente, sendo possível contratá-lo e demiti-lo conforme necessário' , width*0.12, height*0.1);
    text('Ajudantes: Pode ter de 0 a 1 ajudante, que recebem pagamento diário, sendo possível contratá-lo ou demiti-lo conforme necessário.' , width*0.12, height*0.5);
    if (chefAtivo == 1){
      text('Chef contratado: ' + tipoChef + '    Valor: ' + valorChef + '€',width*0.12, height*0.15 )
    } else {
      text('Nenhum chef contratado',width*0.12, height*0.15)
    } 
    if (ajudanteAtivo == 1){
      text('Ajudante contratado: ' + tipoAjudante + '    Valor: ' + valorAjudante + '€',width*0.12, height*0.55 )
    } else {
      text('Nenhum ajudante contratado',width*0.12, height*0.55)
    } 
  pop();
  image(imgTelaFuncionarios[0], width * 0.2, height * 0.18, width / 18, height / 6);
  image(imgTelaFuncionarios[1], width * 0.35, height * 0.18, width / 22, height / 6); 
  image(imgTelaFuncionarios[2], width * 0.5, height * 0.18, width / 20, height / 6); 
  image(imgTelaFuncionarios[3], width * 0.65, height * 0.18, width / 20, height / 6); 
  image(imgTelaFuncionarios[4], width * 0.2, height * 0.6, width / 22, height / 6); 
  image(imgTelaFuncionarios[5], width * 0.35, height * 0.6, width / 22, height / 6); 
  image(imgTelaFuncionarios[6], width * 0.5, height * 0.6, width / 22, height / 6); 
  image(imgTelaFuncionarios[7], width * 0.65, height * 0.6, width / 22, height / 6);
  push();
    fill('black');
    textSize(textS2);
    text('Lucro Adicional:  0%' , width*0.25, height*0.275);
    text('Valor: 70€', width*0.25, height*0.295)
    text('Lucro Adicional:  +10%' , width*0.40, height*0.275);
    text('Valor: 130€', width*0.4, height*0.295)
    text('Lucro Adicional:  +20%' , width*0.55, height*0.275);
    text('Valor: 180€', width*0.55, height*0.295)
    text('Lucro Adicional:  +40%' , width*0.7, height*0.275);
    text('Valor: 300€', width*0.7, height*0.295)
    textSize(textS3);
    text('Tempo de Preparo: -5s' , width*0.25, height*0.674);
    text('Valor: 30€', width*0.25, height*0.704)
    text('Tempo de Preparo: -10s' , width*0.4, height*0.674);
    text('Valor: 100€', width*0.4, height*0.704)
    text('Tempo de Preparo: -15s' , width*0.55, height*0.674);
    text('Valor: 150€', width*0.55, height*0.704)
    text('Tempo de Preparo: -18s' , width*0.7, height*0.674);
    text('Valor: 270€', width*0.7, height*0.704)
  pop();
  push();
    addChef1.draw_Button(100, 20, width*0.22, height*0.38, "Contratar", 13);
    addChef2.draw_Button(100, 20, width*0.37, height*0.38, "Contratar", 13);
    addChef3.draw_Button(100, 20, width*0.52, height*0.38, "Contratar", 13);
    addChef4.draw_Button(100, 20, width*0.67, height*0.38, "Contratar", 13);
    addAjudante1.draw_Button(100, 20, width*0.22, height*0.79, "Contratar", 13);
    addAjudante2.draw_Button(100, 20, width*0.37, height*0.79, "Contratar", 13);
    addAjudante3.draw_Button(100, 20, width*0.52, height*0.79, "Contratar", 13);
    addAjudante4.draw_Button(100, 20, width*0.67, height*0.79, "Contratar", 13);
  pop(); 
}

function telaFuncionarios() {
  mostrarTelaFuncionarios = true;
}

function botoesFuncionarios(){
  if (addChef1.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "#066315";
      addChef2.corBt = "blue";
      addChef3.corBt = "blue";
      addChef4.corBt = "blue";
      if(dinheiro >= 70){
        postChef(1);
        cobranca = false;
      }
      
    } else if (addChef2.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "#066315";
      addChef3.corBt = "blue";
      addChef4.corBt = "blue";
      if(dinheiro >= 130){
        postChef(2);
        cobranca = false;
      }
    } else if (addChef3.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "blue";
      addChef3.corBt = "#066315";
      addChef4.corBt = "blue";
      if(dinheiro >= 180){
        postChef(3);
        cobranca = false;
      }
    } else  if (addChef4.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "blue";
      addChef3.corBt = "blue";
      addChef4.corBt = "#066315";
      if(dinheiro >= 300){
        postChef(4);
        cobranca = false;
      }
    }
    if (addAjudante1.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "#066315";
      addAjudante2.corBt = "blue";
      addAjudante3.corBt = "blue";
      addAjudante4.corBt = "blue";
      if(dinheiro >= 30){
        postAjudante(5);
        cobranca = false;
      }
    } else if (addAjudante2.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "blue";
      addAjudante2.corBt = "#066315";
      addAjudante3.corBt = "blue";
      addAjudante4.corBt = "blue";
      if(dinheiro >= 100){
        postAjudante(6);
        cobranca = false;
      }
    } else if (addAjudante3.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "blue";
      addAjudante2.corBt = "blue";
      addAjudante3.corBt = "#066315";
      addAjudante4.corBt = "blue";
      if(dinheiro >= 150){
        postAjudante(7);
        cobranca = false;
      }
    } else  if (addAjudante4.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "blue";
      addAjudante2.corBt = "blue";
      addAjudante3.corBt = "blue";
      addAjudante4.corBt = "#066315";
      if(dinheiro >= 270){
        postAjudante(8);
        cobranca = false;
      }
    }
    if(!cobranca){
      postDinheiroServicos();
      cobranca = true;
    }
}