function balaoGarcom(){ //Preparando pedido
    let textS1 = width/105;
    push();
    fill('white');
    stroke('green')
    strokeWeight(2);
    let xCircle = xGarcon + width * 0.01
    circle(xCircle, yGarcon, 70);
    pop();
    push();

    let texto = "Seu pedido ";
    let texto1 = "está sendo";
    let texto2 = "preparado";

    let xTexto = xCircle;
    let yTexto = yGarcon - width * 0.01;

    textSize(textS1)
    fill('black');
    textAlign(CENTER, CENTER);
    text(texto, xTexto, yTexto);
    text(texto1,xTexto , yTexto + 15);
    text(texto2,xTexto , yTexto +30);

    pop();
}

function balaoCliente(){ 
    let textS1 = width/105;
    push();
    fill('white');
    stroke('red')
    strokeWeight(2);
    let xCircle = xGarcon + width * 0.05
    circle(xCircle, yGarcon, 60);
    pop();
    push();

    let texto = "Esse";
    let texto1 = "pedido não ";
    let texto2 = "é daqui!";

    let xTexto = xCircle;
    let yTexto = yGarcon - width * 0.012;

    textSize(textS1)
    fill('black');
    textAlign(CENTER, CENTER);
    text(texto, xTexto, yTexto);
    text(texto1,xTexto , yTexto + 15);
    text(texto2,xTexto , yTexto +30);

    pop();
}

function estresses1(){
    switch (cliente.mesa) {
        case 1:
            image(carinhas[0], width*0.23, height * 0.5, width / 40, height / 23);
            break;
        case 2:
            image(carinhas[0], width*0.23, height * 0.15, width / 40, height / 23);
            break;
        case 3:
            image(carinhas[0], width*0.38, height * 0.5, width / 40, height / 23);
            break;
        case 4:
            image(carinhas[0], width*0.38, height * 0.15, width / 40, height / 23);
            break;
        case 5:
            image(carinhas[0], width*0.58, height * 0.5, width / 40, height / 23);
            break;
        case 6:
            image(carinhas[0], width*0.58, height * 0.15, width / 40, height / 23);
            break;
        case 7:
            image(carinhas[0], width*0.73, height * 0.5, width / 40, height / 23);
            break;
        case 8:
            image(carinhas[0], width*0.73, height * 0.15, width / 40, height / 23);
            break;
    }
}

function estresses2(){
    switch (cliente.mesa) {
        case 1:
            image(carinhas[1], width*0.23, height * 0.5, width / 40, height / 23);
            break;
        case 2:
            image(carinhas[1], width*0.23, height * 0.15, width / 40, height / 23);
            break;
        case 3:
            image(carinhas[1], width*0.38, height * 0.5, width / 40, height / 23);
            break;
        case 4:
            image(carinhas[1], width*0.38, height * 0.15, width / 40, height / 23);
            break;
        case 5:
            image(carinhas[1], width*0.58, height * 0.5, width / 40, height / 23);
            break;
        case 6:
            image(carinhas[1], width*0.58, height * 0.15, width / 40, height / 23);
            break;
        case 7:
            image(carinhas[1], width*0.73, height * 0.5, width / 40, height / 23);
            break;
        case 8:
            image(carinhas[1], width*0.73, height * 0.15, width / 40, height / 23);
            break;
    }
}

function estresses3(){
    switch (cliente.mesa) {
        case 1:
            image(carinhas[2], width*0.23, height * 0.5, width / 30, height / 15);
            break;
        case 2:
            image(carinhas[2], width*0.23, height * 0.15, width / 30, height / 15);
            break;
        case 3:
            image(carinhas[2], width*0.38, height * 0.5, width / 30, height / 15);
            break;
        case 4:
            image(carinhas[2], width*0.38, height * 0.15, width / 30, height / 15);
            break;
        case 5:
            image(carinhas[2], width*0.58, height * 0.5, width / 30, height / 15);
            break;
        case 6:
            image(carinhas[2], width*0.58, height * 0.15, width / 30, height / 15);
            break;
        case 7:
            image(carinhas[2], width*0.73, height * 0.5, width / 30, height / 15);
            break;
        case 8:
            image(carinhas[2], width*0.73, height * 0.15, width / 30, height / 15);
            break;
    }
}