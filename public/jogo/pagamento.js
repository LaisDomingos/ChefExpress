let pagamentoMesa1;
let pagamentoMesa2;
let pagamentoMesa3;
let pagamentoMesa4;
let pagamentoMesa5;
let pagamentoMesa6;
let pagamentoMesa7;
let pagamentoMesa8;

function pagamento(){
    if (pagamentoMesa1){
        image(imgDinheiro,width*0.27, height*0.52,  width/25, height/12);
    }
    if (pagamentoMesa2){
        image(imgDinheiro,width*0.27, height*0.17,  width/25, height/12);
    }
    if (pagamentoMesa3){
        image(imgDinheiro,width*0.42, height*0.52,  width/25, height/12);
    }
    if (pagamentoMesa4){
        image(imgDinheiro,width*0.42, height*0.17,  width/25, height/12);
    }
    if (pagamentoMesa5){
        image(imgDinheiro,width*0.62, height*0.52,  width/25, height/12);
    }
    if (pagamentoMesa6){
        image(imgDinheiro,width*0.62, height*0.17,  width/25, height/12);
    }
    if (pagamentoMesa7){
        image(imgDinheiro,width*0.77, height*0.52,  width/25, height/12);
    }
    if (pagamentoMesa8){
        image(imgDinheiro,width*0.77, height*0.17,  width/25, height/12);
    }
    loop();
}