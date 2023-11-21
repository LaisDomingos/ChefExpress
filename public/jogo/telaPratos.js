let mostrarTelaPresente = false;
function janelaPratos(){
    fill('#acefea');
    rect(width*0.1, height*0.02, width*0.7, height*0.9);
    fecharPratos.draw_ButtonFechar(width*0.8, height*0.03);
    push();
        fill('black');
        textSize(18);
        text('Escolha os pratos que deseja adicionar à lista de trocas.' , width*0.26, height*0.1);
        textSize(15);
        text('Ao comprar um presente no valor de 30€, você ganha um prato aleatório.' , width*0.24, height*0.87);
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

    qtdPratos();

    check1.draw_checkbox(width * 0.21, height * 0.27);
    check2.draw_checkbox(width * 0.31, height * 0.27);
    check3.draw_checkbox(width * 0.41, height * 0.27);
    check4.draw_checkbox(width * 0.51, height * 0.27);
    check5.draw_checkbox(width * 0.61, height * 0.27);
    check6.draw_checkbox(width * 0.71, height * 0.27);
    check7.draw_checkbox(width * 0.21, height * 0.4);
    check8.draw_checkbox(width * 0.31, height * 0.4);
    check9.draw_checkbox(width * 0.41, height * 0.4);
    check10.draw_checkbox(width * 0.51, height * 0.4);
    check11.draw_checkbox(width * 0.61, height * 0.4);
    check12.draw_checkbox(width * 0.71, height * 0.4);
    check13.draw_checkbox(width * 0.21, height * 0.53);
    check14.draw_checkbox(width * 0.31, height * 0.53);
    check15.draw_checkbox(width * 0.41, height * 0.53);
    check16.draw_checkbox(width * 0.51, height * 0.53);
    check17.draw_checkbox(width * 0.61, height * 0.53);
    check18.draw_checkbox(width * 0.71, height * 0.53);
    check19.draw_checkbox(width * 0.21, height * 0.66);
    check20.draw_checkbox(width * 0.31, height * 0.66);
    check21.draw_checkbox(width * 0.41, height * 0.66);
    check22.draw_checkbox(width * 0.51, height * 0.66);
    check23.draw_checkbox(width * 0.61, height * 0.66);
    check24.draw_checkbox(width * 0.71, height * 0.66);

    pratosLista.draw_Button(200, 20, width*0.245, height*0.8, "Adiconar a lista de troca", 13);
    verListaTrocas.draw_Button(200, 20, width*0.67, height*0.8, "Lista de trocas", 13);
    presente.draw_Button(200, 20, width*0.45, height*0.8, "Comprar presente", 13);
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

function qtdPratos() {
    for (let i = 0; i < pratosGanhados.length; i++) {
        const idPratos = pratosGanhados[i].idPratos;
        const qtdPrato = pratosGanhados[i].qtdPrato;

       
        
        if (idPratos === 0) {
            qtd0 = qtdPrato;  
        } else {
            qtd0 = 0;
        }
        if (idPratos === 1) {
            qtd1 = qtdPrato;  
        } else {
            qtd1 = 0;
        }
        if (idPratos === 2) {
            qtd2 = qtdPrato;  
        } else {
            qtd2 = 0;
        }
        if (idPratos === 3) {
            qtd3 = qtdPrato;  
        } else {
            qtd3 = 0;
        }
        if (idPratos === 4) {
            qtd4 = qtdPrato;  
        } else {
            qtd4 = 0;
        }
        if (idPratos === 5) {
            qtd5 = qtdPrato;  
        } else {
            qtd5 = 0;
        }
        if (idPratos === 6) {
            qtd6 = qtdPrato;  
        } else {
            qtd6 = 0;
        }
        if (idPratos === 7) {
            qtd7 = qtdPrato;  
        } else {
            qtd7 = 0;
        }
        if (idPratos === 8) {
            qtd8 = qtdPrato;  
        } else {
            qtd8 = 0;
        }
        if (idPratos === 9) {
            qtd9 = qtdPrato;  
        } else {
            qtd9 = 0;
        }
        if (idPratos === 10) {
            qtd10 = qtdPrato;  
        } else {
            qtd10 = 0;
        }
        if (idPratos === 11) {
            qtd11 = qtdPrato;  
        } else {
            qtd11 = 0;
        }
        if (idPratos === 12) {
            qtd12 = qtdPrato;  
        } else {
            qtd12 = 0;
        }
        if (idPratos === 13) {
            qtd13 = qtdPrato;  
        } else {
            qtd13 = 0;
        }
        if (idPratos === 14) {
            qtd14 = qtdPrato;  
        } else {
            qtd14 = 0;
        }
        if (idPratos === 15) {
            qtd15 = qtdPrato;  
        } else {
            qtd15 = 0;
        }
        if (idPratos === 16) {
            qtd16 = qtdPrato;  
        } else {
            qtd16 = 0;
        }
        if (idPratos === 17) {
            qtd17 = qtdPrato;  
        } else {
            qtd17 = 0;
        }
        if (idPratos === 18) {
            qtd18 = qtdPrato;  
        } else {
            qtd18 = 0;
        }
        if (idPratos === 19) {
            qtd19 = qtdPrato;  
        } else {
            qtd19 = 0;
        }
        if (idPratos === 20) {
            qtd20 = qtdPrato;  
        } else {
            qtd20 = 0;
        }
        if (idPratos === 21) {
            qtd21 = qtdPrato;  
        } else {
            qtd21 = 0;
        }
        if (idPratos === 22) {
            qtd22 = qtdPrato;  
        } else {
            qtd22 = 0;
        }
        if (idPratos === 23) {
            qtd23 = qtdPrato;  
        } else {
            qtd23= 0;
        }
    }
    push();
    textSize(14);
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
    loop();
}
