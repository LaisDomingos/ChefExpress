let pratoPresente;
function janelaPresente(){
    push();
    fill('#acefea');
    rect(width*0.1, height*0.02, width*0.7, height*0.9);
    fecharPresentes.draw_ButtonFechar(width*0.8, height*0.03);
    pop();
    if(presenteComprado){
    push();
    fill('black');
    textSize(18);
    text('Você ganhou esse prato:' , width*0.26, height*0.1);
    pop();
        
    image(pratoPresente, width * 0.33, height * 0.3, width / 4, height /3);
    comprarNovoP.draw_Button(200, 20, width*0.7, height*0.7, "Comprar presente", 13);
    } else{
    push();
    fill('black');
    textSize(18);
    text('Não tem dinheiro suficiente' , width*0.3, height*0.5);
    pop();
    }
    
}
    


