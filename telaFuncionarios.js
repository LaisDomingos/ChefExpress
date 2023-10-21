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
        textSize(18);
        text('Chefs : Deve ter um chef e esse é pago diariamente, sendo possível contratá-lo e demiti-lo conforme necessário' , width*0.12, height*0.1);
        text('Ajudantes: Pode ter de 0 a 2 ajudantes, que recebem pagamento diário, sendo possível contratá-los ou demiti-los' , width*0.12, height*0.5);
        text('conforme necessário.', width*0.12, height*0.55)
    pop();
    image(imgTelaFuncionarios[0], width * 0.22, height * 0.15, width / 18, height / 6);
    image(imgTelaFuncionarios[1], width * 0.37, height * 0.15, width / 20, height / 6); 
    image(imgTelaFuncionarios[2], width * 0.52, height * 0.15, width / 20, height / 6); 
    image(imgTelaFuncionarios[3], width * 0.67, height * 0.15, width / 20, height / 6); 
    image(imgTelaFuncionarios[4], width * 0.23, height * 0.6, width / 22, height / 6); 
    image(imgTelaFuncionarios[5], width * 0.38, height * 0.6, width / 22, height / 6); 
    image(imgTelaFuncionarios[6], width * 0.53, height * 0.6, width / 22, height / 6); 
    image(imgTelaFuncionarios[7], width * 0.68, height * 0.6, width / 22, height / 6);
    push();
        fill('black');
        textSize(10);
        text('Lucro Adicional:  0%' , width*0.28, height*0.245);
        text('Valor: 70€', width*0.28, height*0.275)
        text('Lucro Adicional:  +10%' , width*0.43, height*0.245);
        text('Valor: 130€', width*0.43, height*0.275)
        text('Lucro Adicional:  +20%' , width*0.58, height*0.245);
        text('Valor: 180€', width*0.58, height*0.275)
        text('Lucro Adicional:  +40%' , width*0.73, height*0.245);
        text('Valor: 300€', width*0.73, height*0.275)
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
        addChef1.draw_Button(100, 20, width*0.245, height*0.35, "Contratar", 13);
        addChef2.draw_Button(100, 20, width*0.395, height*0.35, "Contratar", 13);
        addChef3.draw_Button(100, 20, width*0.545, height*0.35, "Contratar", 13);
        addChef4.draw_Button(100, 20, width*0.695, height*0.35, "Contratar", 13);
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
