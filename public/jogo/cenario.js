let piso;
let barra;
let escada;
let menuImg;
let lixo;

let mesa1 = false;
let mesa2 = false;
let mesa3 = false;
let mesa4 = false;
let mesa5 = false;
let mesa6 = false;
let mesa7 = false;
let mesa8 = false;

let mesasImagens = [];

let mesa12X;
let mesa34X;
let mesa56X;
let mesa78X;
let mesa1357Y;
let mesa2468Y;

let posicaoPrato1X;
let posicaoPrato2X;
let posicaoPrato3X;
let posicaoPrato4X;
let posicaoPrato5X;
let posicaoPrato6X;
let posicaoPrato7X;
let posicaoPrato8X;
let posicaoPrato9X;
let posicaoPrato10X;
let posicaoPrato11X;
let posicaoPrato12X;
let posicaoPrato13X;
let posicaoPrato14X;

function cenario(){
    entrada(); 
    mesas();
    drawLixo();
}

function entrada(){ 
    image(barra, 0, 0, width/45, height);
    image(escada, width*0.019, height*0.18, width/12, height/2);
}

function mesas(){
    image(mesasImagens[0], mesa12X, height*0.1, width/14, height/4);
    image(mesasImagens[0], mesa12X, height*0.45, width/14, height/4);
    image(mesasImagens[1], mesa34X, height*0.1, width/10, height/4);
    image(mesasImagens[1], mesa34X, height*0.45, width/10, height/4);
    image(mesasImagens[1], mesa56X, height*0.1, width/10, height/4);
    image(mesasImagens[1], mesa56X, height*0.45, width/10, height/4);
    image(mesasImagens[0], mesa78X, height*0.1, width/14, height/4);
    image(mesasImagens[0], mesa78X, height*0.45, width/14, height/4);
}

function balcao() {
    push();
        fill("#6a6c6d");
        noStroke();
        rect(width * 0.13, height * 0.83, width / 12, height / 6);
        rect(width * 0.13, height * 0.82, width / 1.4, height / 8);
    pop();
    // Atualize a imagem dos pedidos no balcão de acordo com o espaço ocupado
    if(espacoocupado1){
        image(espaco1,  posicaoPrato1X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado2){
        image(espaco2,  posicaoPrato2X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado3){
        image(espaco3,  posicaoPrato3X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado4){
        image(espaco4,  posicaoPrato4X, height * 0.85, width/30, height/20);
    }
    if(espacoocupado5){
        image(espaco5,  posicaoPrato5X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado6){
        image(espaco6,  posicaoPrato6X, height * 0.85, width/30, height/20);
    }
    if(espacoocupado7){
        image(espaco7,  posicaoPrato7X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado8){
        image(espaco8,  posicaoPrato8X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado9){
        image(espaco9,  posicaoPrato9X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado10){
        image(espaco10,  posicaoPrato10X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado11){
        image(espaco11,  posicaoPrato11X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado12){
        image(espaco12,  posicaoPrato12X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado13){
        image(espaco13,  posicaoPrato13X, height * 0.85, width/30, height/20);
    }
    if (espacoocupado14){
        image(espaco14,  posicaoPrato14X, height * 0.85, width/30, height/20);
    } 
    loop();
}

function drawLixo(){
    image(lixo, width*0.9, height*0.82, width/17, height/6);
}