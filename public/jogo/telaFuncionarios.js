let imgTelaFuncionarios=[];

let contratarChef1 = false;
let contratarChef2 = false;
let contratarChef3 = false;
let contratarChef4 = false;

function janelaFuncionarios(){
  fill('#acefea');
  rect(width*0.1, height*0.02, width*0.77, height*0.9);
  fecharFuncionarios.draw_ButtonFechar(width*0.87, height*0.05);
  push();
    fill('black');
    textSize(15);
    text('Chefs : Pode ter 0 a 1 chef e esse é pago diariamente, sendo possível contratá-lo e demiti-lo conforme necessário' , width*0.12, height*0.1);
    text('Chef contratado: ' + tipoChef + '    Valor: ' + valorChef + '€',width*0.12, height*0.15 )
    text('Ajudantes: Pode ter de 0 a 1 ajudante, que recebem pagamento diário, sendo possível contratá-lo ou demiti-lo conforme necessário.' , width*0.12, height*0.5);
    text('Ajudante contratado: ' + tipoAjudante + '    Valor: ' + valorAjudante + '€',width*0.12, height*0.55 )
  pop();
  image(imgTelaFuncionarios[0], width * 0.22, height * 0.18, width / 18, height / 6);
  image(imgTelaFuncionarios[1], width * 0.37, height * 0.18, width / 20, height / 6); 
  image(imgTelaFuncionarios[2], width * 0.52, height * 0.18, width / 20, height / 6); 
  image(imgTelaFuncionarios[3], width * 0.67, height * 0.18, width / 20, height / 6); 
  image(imgTelaFuncionarios[4], width * 0.23, height * 0.6, width / 22, height / 6); 
  image(imgTelaFuncionarios[5], width * 0.38, height * 0.6, width / 22, height / 6); 
  image(imgTelaFuncionarios[6], width * 0.53, height * 0.6, width / 22, height / 6); 
  image(imgTelaFuncionarios[7], width * 0.68, height * 0.6, width / 22, height / 6);
  push();
    fill('black');
    textSize(10);
    text('Lucro Adicional:  0%' , width*0.28, height*0.275);
    text('Valor: 70€', width*0.28, height*0.295)
    text('Lucro Adicional:  +10%' , width*0.43, height*0.275);
    text('Valor: 130€', width*0.43, height*0.295)
    text('Lucro Adicional:  +20%' , width*0.58, height*0.275);
    text('Valor: 180€', width*0.58, height*0.295)
    text('Lucro Adicional:  +40%' , width*0.73, height*0.275);
    text('Valor: 300€', width*0.73, height*0.295)
    text('Tempo de Preparo: -5s' , width*0.28, height*0.674);
    text('Valor: 30€', width*0.28, height*0.704)
    text('Tempo de Preparo: -10s' , width*0.43, height*0.674);
    text('Valor: 100€', width*0.43, height*0.704)
    text('Tempo de Preparo: -15s' , width*0.58, height*0.674);
    text('Valor: 150€', width*0.58, height*0.704)
    text('Tempo de Preparo: -20s' , width*0.73, height*0.674);
    text('Valor: 270€', width*0.73, height*0.704)
  pop();
  push();
    addChef1.draw_Button(100, 20, width*0.245, height*0.38, "Contratar", 13);
    addChef2.draw_Button(100, 20, width*0.395, height*0.38, "Contratar", 13);
    addChef3.draw_Button(100, 20, width*0.545, height*0.38, "Contratar", 13);
    addChef4.draw_Button(100, 20, width*0.695, height*0.38, "Contratar", 13);
    addAjudante1.draw_Button(100, 20, width*0.248, height*0.79, "Contratar", 13);
    addAjudante2.draw_Button(100, 20, width*0.398, height*0.79, "Contratar", 13);
    addAjudante3.draw_Button(100, 20, width*0.548, height*0.79, "Contratar", 13);
    addAjudante4.draw_Button(100, 20, width*0.698, height*0.79, "Contratar", 13);
  pop(); 
}

function telaFuncionarios() {
  console.log("Funcionários");
  mostrarTelaFuncionarios = true;
}

function botoesFuncionarios(){
  if (addChef1.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "#066315";
      addChef2.corBt = "blue";
      addChef3.corBt = "blue";
      addChef4.corBt = "blue";
      postChef(1);
    } else if (addChef2.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "#066315";
      addChef3.corBt = "blue";
      addChef4.corBt = "blue";
      postChef(2);
    } else if (addChef3.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "blue";
      addChef3.corBt = "#066315";
      addChef4.corBt = "blue";
      postChef(3);
    } else  if (addChef4.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "blue";
      addChef3.corBt = "blue";
      addChef4.corBt = "#066315";
      postChef(4);
    }
    if (addAjudante1.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "#066315";
      addAjudante2.corBt = "blue";
      addAjudante3.corBt = "blue";
      addAjudante4.corBt = "blue";
      postAjudante(5);
    } else if (addAjudante2.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "blue";
      addAjudante2.corBt = "#066315";
      addAjudante3.corBt = "blue";
      addAjudante4.corBt = "blue";
      postAjudante(6);
    } else if (addAjudante3.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "blue";
      addAjudante2.corBt = "blue";
      addAjudante3.corBt = "#066315";
      addAjudante4.corBt = "blue";
      postAjudante(7);
    } else  if (addAjudante4.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "blue";
      addAjudante2.corBt = "blue";
      addAjudante3.corBt = "blue";
      addAjudante4.corBt = "#066315";
      postAjudante(8);
    }
}