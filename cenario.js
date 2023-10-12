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

function balcao(){
    push();
        fill("#6a6c6d");
        noStroke();
        rect(width*0.13, height*0.83, width/12, height/6);
        rect(width*0.13, height*0.82, width/1.4, height/8);
    pop();
}
function drawLixo(){
    image(lixo, width*0.9, height*0.82, width/17, height/6);
}