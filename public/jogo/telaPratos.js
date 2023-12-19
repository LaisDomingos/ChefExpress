let mostrarTelaPresente = false;
let mostrarTelaTrocas = false;
let adicionadoLista = false;
function janelaPratos(){
    let textS1 = width/75;
    let textS2 = width/80;
    let textS3 = width/83;
    fill('#acefea');
    rect(width*0.1, height*0.02, width*0.7, height*0.9);
    fecharPratos.draw_ButtonFechar(width*0.8, height*0.03);
    push();
        fill('black');
        textSize(textS1);
        text('Escolha os pratos que deseja adicionar à lista de trocas.' , width*0.26, height*0.1);
        textSize(textS2);
        text('Ao comprar um presente no valor de 30€, você ganha um prato aleatório.' , width*0.24, height*0.87);
        if(adicionadoLista){
            fill('green');
            text('Pratos adicionados a lista de trocas' , width*0.24, height*0.75);
        }
    pop();
    image(pratosIniciais[0], width * 0.18, height * 0.15, width / 18, height / 18);
    image(pratosIniciais[1], width * 0.28, height * 0.15, width / 18, height / 18);
    image(pratosIniciais[2], width * 0.38, height * 0.15, width / 18, height / 18);
    image(pratosIniciais[3], width * 0.48, height * 0.15, width / 18, height / 18);
    image(pratosIniciais[4], width * 0.58, height * 0.15, width / 18, height / 18);
    image(pratosIniciais[5], width * 0.68, height * 0.15, width / 18, height / 18);
    image(pratosGerais[0], width * 0.18, height * 0.28, width / 18, height / 18);
    image(pratosGerais[1], width * 0.28, height * 0.28, width / 18, height / 18);
    image(pratosGerais[2], width * 0.38, height * 0.28, width / 18, height / 18);
    image(pratosGerais[3], width * 0.48, height * 0.28, width / 18, height / 18);
    image(pratosGerais[4], width * 0.58, height * 0.28, width / 18, height / 18);
    image(pratosGerais[5], width * 0.68, height * 0.28, width / 18, height / 18);
    image(pratosGerais[6], width * 0.18, height * 0.41, width / 18, height / 18);
    image(pratosGerais[7], width * 0.28, height * 0.41, width / 18, height / 18);
    image(pratosGerais[8], width * 0.38, height * 0.41, width / 18, height / 18);
    image(pratosGerais[9], width * 0.48, height * 0.41, width / 18, height / 18);
    image(pratosGerais[10], width * 0.58, height * 0.41, width / 18, height / 18);
    image(pratosGerais[11], width * 0.68, height * 0.41, width / 18, height / 18);
    image(pratosGerais[12], width * 0.18, height * 0.54, width / 18, height / 18);
    image(pratosGerais[13], width * 0.28, height * 0.54, width / 18, height / 18);
    image(pratosGerais[14], width * 0.38, height * 0.54, width / 18, height / 18);
    image(pratosGerais[15], width * 0.48, height * 0.54, width / 18, height / 18);
    image(pratosGerais[16], width * 0.58, height * 0.54, width / 18, height / 18);
    image(pratosGerais[17], width * 0.68, height * 0.54, width / 18, height / 18);
    image(pratosGerais[18], width * 0.18, height * 0.67, width / 18, height / 18);
    image(pratosGerais[19], width * 0.28, height * 0.67, width / 18, height / 18);
    image(pratosGerais[20], width * 0.38, height * 0.67, width / 18, height / 18);
    image(pratosGerais[21], width * 0.48, height * 0.67, width / 18, height / 18);
    image(pratosGerais[22], width * 0.58, height * 0.67, width / 18, height / 18);
    image(pratosGerais[23], width * 0.68, height * 0.67, width / 18, height / 18);
    push();
        textSize(textS3);
        fill('green');
        text(qtd0, width * 0.24, height * 0.33);
        text(qtd1, width * 0.34, height * 0.33);
        text(qtd2, width * 0.44, height * 0.33);
        text(qtd3, width * 0.54, height * 0.33);
        text(qtd4, width * 0.64, height * 0.33);
        text(qtd5, width * 0.74, height * 0.33);
        text(qtd6, width * 0.24, height * 0.46);
        text(qtd7, width * 0.34, height * 0.46);
        text(qtd8, width * 0.44, height * 0.46);
        text(qtd9, width * 0.54, height * 0.46);
        text(qtd10, width * 0.64, height * 0.46);
        text(qtd11, width * 0.74, height * 0.46);
        text(qtd12, width * 0.24, height * 0.59);
        text(qtd13, width * 0.34, height * 0.59);
        text(qtd14, width * 0.44, height * 0.59);
        text(qtd15, width * 0.54, height * 0.59);
        text(qtd16, width * 0.64, height * 0.59);
        text(qtd17, width * 0.74, height * 0.59);
        text(qtd18, width * 0.24, height * 0.72);
        text(qtd19, width * 0.34, height * 0.72);
        text(qtd20, width * 0.44, height * 0.72);
        text(qtd21, width * 0.54, height * 0.72);
        text(qtd22, width * 0.64, height * 0.72);
        text(qtd23, width * 0.74, height * 0.72);
    pop();
    
    if(qtd0 > 0) {
        check1.draw_checkbox(width * 0.21, height * 0.27);
    } 
    if(qtd1 > 0) {
        check2.draw_checkbox(width * 0.31, height * 0.27);
    } 
    if(qtd2 > 0) {
        check3.draw_checkbox(width * 0.41, height * 0.27);
    } 
    if(qtd3 > 0) {
        check4.draw_checkbox(width * 0.51, height * 0.27);
    } 
    if(qtd4 > 0) {
        check5.draw_checkbox(width * 0.61, height * 0.27);
    } 
    if(qtd5 > 0) {
        check6.draw_checkbox(width * 0.71, height * 0.27);
    } 
    if(qtd6 > 0) {
        check7.draw_checkbox(width * 0.21, height * 0.4);
    } 
    if(qtd7 > 0) {
        check8.draw_checkbox(width * 0.31, height * 0.4);
    } 
    if(qtd8 > 0) {
        check9.draw_checkbox(width * 0.41, height * 0.4);
    } 
    if(qtd9 > 0) {
        check10.draw_checkbox(width * 0.51, height * 0.4);  
    } 
    if(qtd10 > 0) {
        check11.draw_checkbox(width * 0.61, height * 0.4);
    } 
    if(qtd11 > 0) {
        check12.draw_checkbox(width * 0.71, height * 0.4);
    } 
    if(qtd12 > 0) {
        check13.draw_checkbox(width * 0.21, height * 0.53);
    } 
    if(qtd13 > 0) {
        check14.draw_checkbox(width * 0.31, height * 0.53);
    } 
    if(qtd14 > 0) {
        check15.draw_checkbox(width * 0.41, height * 0.53);
    } 
    if(qtd15 > 0) {
        check16.draw_checkbox(width * 0.51, height * 0.53);
    } 
    if(qtd16 > 0) {
        check17.draw_checkbox(width * 0.61, height * 0.53);
    }
    if(qtd17 > 0) {
        check18.draw_checkbox(width * 0.71, height * 0.53);
    } 
    if(qtd18 > 0) {
        check19.draw_checkbox(width * 0.21, height * 0.66);
    } 
    if(qtd19 > 0) {
        check20.draw_checkbox(width * 0.31, height * 0.66);
    } 
    if(qtd20 > 0) {
        check21.draw_checkbox(width * 0.41, height * 0.66);
    } 
    if(qtd21 > 0) {
        check22.draw_checkbox(width * 0.51, height * 0.66);
    } 
    if(qtd22 > 0) {
        check23.draw_checkbox(width * 0.61, height * 0.66);
    } 
    if(qtd23 > 0) {
        check24.draw_checkbox(width * 0.71, height * 0.66);
    }

    pratosLista.draw_Button(200, 20, width*0.245, height*0.8, "Adiconar a lista de troca", 13);
    verListaTrocas.draw_Button(200, 20, width*0.67, height*0.8, "Lista de trocas", 13);
    presente.draw_Button(200, 20, width*0.45, height*0.8, "Comprar presente", 13);
    
}

//let pratosSelecionados = [];
function adicionarPratos(){
    let pratosSelecionados = [];
    if (check1.checkbox && check1.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 0, quantidade: qtd0 });
    }
    if (check2.checkbox && check2.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 1, quantidade: qtd1 });
    }
    if (check3.checkbox && check3.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 2, quantidade: qtd2 });
    }
    if (check4.checkbox && check4.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 3, quantidade: qtd3 });
    }
    if (check5.checkbox && check5.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 4, quantidade: qtd4});
    }
    if (check6.checkbox && check6.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 5, quantidade: qtd5 });
    }
    if (check7.checkbox && check7.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 6, quantidade: qtd6 });
    }
    if (check8.checkbox && check8.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 7, quantidade: qtd7 });
    }
    if (check9.checkbox && check9.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 8, quantidade: qtd8 });
    }
    if (check10.checkbox && check10.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 9, quantidade: qtd9 });
    }
    if (check11.checkbox && check11.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 10, quantidade: qtd10 });
    }
    if (check12.checkbox && check12.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 11, quantidade: qtd11 });
    }
    if (check13.checkbox && check13.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 12, quantidade: qtd12 });
    }
    if (check14.checkbox && check14.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 13, quantidade: qtd13 });
    }
    if (check15.checkbox && check15.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 14, quantidade: qtd14 });
    }
    if (check16.checkbox && check16.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 15, quantidade: qtd15 });
    }
    if (check17.checkbox && check17.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 16, quantidade: qtd16 });
    }
    if (check18.checkbox && check18.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 17, quantidade: qtd17 });
    }
    if (check19.checkbox && check19.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 18, quantidade: qtd18 });
    }
    if (check20.checkbox && check20.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 19, quantidade: qtd19 });
    }
    if (check21.checkbox && check21.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 20, quantidade: qtd20 });
    }
    if (check22.checkbox && check22.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 21, quantidade: qtd21 });
    }
    if (check23.checkbox && check23.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 22, quantidade: qtd22 });
    }
    if (check24.checkbox && check24.checkbox.checked()) {
        pratosSelecionados.push({ idPrato: 23, quantidade: qtd23 });
    }
    
    return pratosSelecionados;
}
function telaPratos() {
    mostrarTelaPratos = true;   
}

function criarCheck(){
    check1 = new Checkbox();
    check2 = new Checkbox();
    check3 = new Checkbox();
    check4 = new Checkbox();
    check5 = new Checkbox();
    check6 = new Checkbox();
    check7 = new Checkbox();
    check8 = new Checkbox();
    check9 = new Checkbox();
    check10 = new Checkbox();
    check11 = new Checkbox();
    check12 = new Checkbox();
    check13 = new Checkbox();
    check14 = new Checkbox();
    check15 = new Checkbox();
    check16 = new Checkbox();
    check17 = new Checkbox();
    check18 = new Checkbox();
    check19 = new Checkbox();
    check20 = new Checkbox();
    check21 = new Checkbox();
    check22 = new Checkbox();
    check23 = new Checkbox();
    check24 = new Checkbox();
}

function retirarCheck(){
    check1.destroy_checkbox();
    check2.destroy_checkbox();
    check3.destroy_checkbox();
    check4.destroy_checkbox();
    check5.destroy_checkbox();
    check6.destroy_checkbox();
    check7.destroy_checkbox();
    check8.destroy_checkbox();
    check9.destroy_checkbox();
    check10.destroy_checkbox();
    check11.destroy_checkbox();
    check12.destroy_checkbox();
    check13.destroy_checkbox();
    check14.destroy_checkbox();
    check15.destroy_checkbox();
    check16.destroy_checkbox();
    check17.destroy_checkbox();
    check18.destroy_checkbox();
    check19.destroy_checkbox();
    check20.destroy_checkbox();
    check21.destroy_checkbox();
    check22.destroy_checkbox();
    check23.destroy_checkbox();
    check24.destroy_checkbox();
}

let qtd0;
let qtd1;
let qtd2;
let qtd3;
let qtd4;
let qtd5;
let qtd6;
let qtd7;
let qtd8;
let qtd9;
let qtd10;
let qtd11;
let qtd12;
let qtd13;
let qtd14;
let qtd15;
let qtd16;
let qtd17;
let qtd18;
let qtd19;
let qtd20;
let qtd21;
let qtd22;
let qtd23;

let pratoAdicionado0 = false;
let pratoAdicionado1 = false;
let pratoAdicionado2 = false;
let pratoAdicionado3 = false;
let pratoAdicionado4 = false;
let pratoAdicionado5 = false;
let pratoAdicionado6 = false;
let pratoAdicionado7 = false;
let pratoAdicionado8 = false;
let pratoAdicionado9 = false;
let pratoAdicionado10 = false;
let pratoAdicionado11 = false;
let pratoAdicionado12 = false;
let pratoAdicionado13 = false;
let pratoAdicionado14 = false;
let pratoAdicionado15 = false;
let pratoAdicionado16 = false;
let pratoAdicionado17 = false;
let pratoAdicionado18 = false;
let pratoAdicionado19 = false;
let pratoAdicionado20 = false;
let pratoAdicionado21 = false;
let pratoAdicionado22 = false;
let pratoAdicionado23 = false;

function qtdPratos() {
    for (let i = 0; i < pratosGanhados.length; i++) {
       const idPratos = pratosGanhados[i].idPratos;
       const qtdPrato = pratosGanhados[i].qtdPrato;

       if (idPratos === 0) {
           qtd0 = qtdPrato;  
           if(!pratoAdicionado0){
            pratosIniciais.push(pratosGerais[0]);
            garcomImagensPratosIni.push(garconImagens[0]);
            pratoAdicionado0 = true;
           }
       } 
       if (idPratos === 1) {
           qtd1 = qtdPrato;  
           if(!pratoAdicionado1){
            pratosIniciais.push(pratosGerais[1]);
            garcomImagensPratosIni.push(garconImagens[1]);
            pratoAdicionado1 = true;
           }
       } 
       if (idPratos === 2) {
           qtd2 = qtdPrato;  
           if(!pratoAdicionado2){
            pratosIniciais.push(pratosGerais[2]);
            garcomImagensPratosIni.push(garconImagens[2]);
            pratoAdicionado2 = true;
           }
       } 
       if (idPratos === 3) {
           qtd3 = qtdPrato;  
           if(!pratoAdicionado3){
            pratosIniciais.push(pratosGerais[3]);
            garcomImagensPratosIni.push(garconImagens[3]);
            pratoAdicionado3 = true;
           }
       } 
       if (idPratos === 4) {
           qtd4 = qtdPrato;  
           if(!pratoAdicionado0){
            pratosIniciais.push(pratosGerais[4]);
            garcomImagensPratosIni.push(garconImagens[4]);
            pratoAdicionado4 = true;
           }
       } 
       if (idPratos === 5) {
           qtd5 = qtdPrato; 
           if(!pratoAdicionado5){
            pratosIniciais.push(pratosGerais[5]);
            garcomImagensPratosIni.push(garconImagens[5]);
            pratoAdicionado5 = true;
           } 
       } 
       if (idPratos === 6) {
           qtd6 = qtdPrato;  
           if(!pratoAdicionado6){
            pratosIniciais.push(pratosGerais[6]);
            garcomImagensPratosIni.push(garconImagens[6]);
            pratoAdicionado6 = true;
           }
       } 
       if (idPratos === 7) {
           qtd7 = qtdPrato;  
           if(!pratoAdicionado7){
            pratosIniciais.push(pratosGerais[7]);
            garcomImagensPratosIni.push(garconImagens[7]);
            pratoAdicionado7 = true;
           }
       } 
       if (idPratos === 8) {
           qtd8 = qtdPrato;
           if(!pratoAdicionado8){
            pratosIniciais.push(pratosGerais[8]);
            garcomImagensPratosIni.push(garconImagens[8]);
            pratoAdicionado8 = true;
           }  
       } 
       if (idPratos === 9) {
           qtd9 = qtdPrato;  
           if(!pratoAdicionado9){
            pratosIniciais.push(pratosGerais[9]);
            garcomImagensPratosIni.push(garconImagens[9]);
            pratoAdicionado9 = true;
           }
       } 
       if (idPratos === 10) {
           qtd10 = qtdPrato; 
           if(!pratoAdicionado10){
            pratosIniciais.push(pratosGerais[10]);
            garcomImagensPratosIni.push(garconImagens[10]);
            pratoAdicionado10 = true;
           } 
       } 
       if (idPratos === 11) {
           qtd11 = qtdPrato;  
           if(!pratoAdicionado11){
            pratosIniciais.push(pratosGerais[11]);
            garcomImagensPratosIni.push(garconImagens[11]);
            pratoAdicionado11 = true;
           }
       } 
       if (idPratos === 12) {
           qtd12 = qtdPrato; 
           if(!pratoAdicionado12){
            pratosIniciais.push(pratosGerais[12]);
            garcomImagensPratosIni.push(garconImagens[12]);
            pratoAdicionado12 = true;
           }
       } 
       if (idPratos === 13) {
           qtd13 = qtdPrato;  
           if(!pratoAdicionado13){
            pratosIniciais.push(pratosGerais[13]);
            garcomImagensPratosIni.push(garconImagens[13]);
            pratoAdicionado13 = true;
           }
       } 
       if (idPratos === 14) {
           qtd14 = qtdPrato;  
           if(!pratoAdicionado14){
            pratosIniciais.push(pratosGerais[14]);
            garcomImagensPratosIni.push(garconImagens[14]);
            pratoAdicionado14 = true;
           }
       } 
       if (idPratos === 15) {
           qtd15 = qtdPrato;  
           if(!pratoAdicionado15){
            pratosIniciais.push(pratosGerais[15]);
            garcomImagensPratosIni.push(garconImagens[15]);
            pratoAdicionado15 = true;
           }
       } 
       if (idPratos === 16) {
           qtd16 = qtdPrato;  
           if(!pratoAdicionado16){
            pratosIniciais.push(pratosGerais[16]);
            garcomImagensPratosIni.push(garconImagens[16]);
            pratoAdicionado16 = true;
           }
       } 
       if (idPratos === 17) {
           qtd17 = qtdPrato;  
           if(!pratoAdicionado17){
            pratosIniciais.push(pratosGerais[17]);
            garcomImagensPratosIni.push(garconImagens[17]);
            pratoAdicionado17 = true;
           }
       } 
       if (idPratos === 18) {
           qtd18 = qtdPrato;  
           if(!pratoAdicionado18){
            pratosIniciais.push(pratosGerais[18]);
            garcomImagensPratosIni.push(garconImagens[18]);
            pratoAdicionado18 = true;
           }
       } 
       if (idPratos === 19) {
           qtd19 = qtdPrato;  
           if(!pratoAdicionado19){
            pratosIniciais.push(pratosGerais[19]);
            garcomImagensPratosIni.push(garconImagens[19]);
            pratoAdicionado19 = true;
           }
       } 
       if (idPratos === 20) {
           qtd20 = qtdPrato; 
           if(!pratoAdicionado20){
            pratosIniciais.push(pratosGerais[20]);
            garcomImagensPratosIni.push(garconImagens[20]);
            pratoAdicionado20 = true;
           } 
       } 
       if (idPratos === 21) {
           qtd21 = qtdPrato;
           if(!pratoAdicionado21){
            pratosIniciais.push(pratosGerais[21]);
            garcomImagensPratosIni.push(garconImagens[21]);
            pratoAdicionado21 = true;
           }   
       } 
       if (idPratos === 22) {
           qtd22 = qtdPrato; 
           if(!pratoAdicionado22){
            pratosIniciais.push(pratosGerais[22]);
            garcomImagensPratosIni.push(garconImagens[22]);
            pratoAdicionado22 = true;
           }  
       } 
       if (idPratos === 23) {                
           qtd23 = qtdPrato; 
           if(!pratoAdicionado23){
            pratosIniciais.push(pratosGerais[23]);
            garcomImagensPratosIni.push(garconImagens[23]);
            pratoAdicionado23 = true;
           } 
       }        

   }
   



   loop();
}