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

let posicaoPrato1X, posicaoPrato1Y;
let posicaoPrato2X, posicaoPrato2Y;
let posicaoPrato3X, posicaoPrato3Y;
let posicaoPrato4X, posicaoPrato4Y;
let posicaoPrato5X, posicaoPrato5Y;
let posicaoPrato6X, posicaoPrato6Y;
let posicaoPrato7X, posicaoPrato7Y;
let posicaoPrato8X, posicaoPrato8Y;
let posicaoPrato9X, posicaoPrato9Y;
let posicaoPrato10X, posicaoPrato10Y;
let posicaoPrato11X, posicaoPrato11Y;
let posicaoPrato12X, posicaoPrato12Y;
let posicaoPrato13X, posicaoPrato13Y;
let posicaoPrato14X, posicaoPrato14Y;

function cenario(){
    entrada(); 
    mesas();
    balcao();
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

    // Atualize a representação visual dos espaços ocupados
    if (espaco1ocupado1) {
        image(espaco1S,  posicaoPrato1X, posicaoPrato1Y, width/30, height/20);
    }

    if (espaco1ocupado2) {
        image(espaco2S,  posicaoPrato2X, posicaoPrato2Y, width/30, height/20);
    }

    if (espaco2ocupado1) {
        image(espaco1D1,  posicaoPrato3X, posicaoPrato3Y, width/30, height/20);
        image(espaco1D2,  posicaoPrato4X, posicaoPrato4Y, width/30, height/20);
    }

    if (espaco2ocupado2) {
        image(espaco2D1,  posicaoPrato5X, posicaoPrato5Y, width/30, height/20);
        image(espaco2D2,  posicaoPrato6X, posicaoPrato6Y, width/30, height/20);
    }

    if (espaco4ocupado1) {
        image(espaco1G1, posicaoPrato7X, posicaoPrato7Y, width/30, height/20);
        image(espaco1G2, posicaoPrato8X, posicaoPrato8Y, width/30, height/20);
        image(espaco1G3, posicaoPrato9X, posicaoPrato9Y, width/30, height/20);
        image(espaco1G4, posicaoPrato10X, posicaoPrato10Y, width/30, height/20);
    }

    if (espaco4ocupado2) {
        image(espaco2G1, posicaoPrato11X, posicaoPrato11Y, width/30, height/20);
        image(espaco2G2, posicaoPrato12X, posicaoPrato12Y, width/30, height/20);
        image(espaco2G3, posicaoPrato13X, posicaoPrato13Y, width/30, height/20);
        image(espaco2G4, posicaoPrato14X, posicaoPrato14Y, width/30, height/20);
    }

    pop();
}

function drawLixo(){
    image(lixo, width*0.9, height*0.82, width/17, height/6);
}
