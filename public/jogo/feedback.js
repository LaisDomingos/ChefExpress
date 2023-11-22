function balaoGarcom(){ //Preparando pedido
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

    textSize(10)
    fill('black');
    textAlign(CENTER, CENTER);
    text(texto, xTexto, yTexto);
    text(texto1,xTexto , yTexto + 15);
    text(texto2,xTexto , yTexto +30);

    pop();
}