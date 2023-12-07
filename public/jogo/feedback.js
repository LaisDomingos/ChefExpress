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