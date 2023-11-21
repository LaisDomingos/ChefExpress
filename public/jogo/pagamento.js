let pagamentoMesa1;
let pagamentoMesa2;
let pagamentoMesa3;
let pagamentoMesa4;
let pagamentoMesa5;
let pagamentoMesa6;
let pagamentoMesa7;
let pagamentoMesa8;


let valorPagamento;
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

let tempoRestaurante;
let qtdPrato;
function condicoesPagemento(){
    tempoRestaurante = cliente.tempoNaMesa/60;
    qtdPrato = pratosIniciais.length;
    if (cliente.dupla) {
        valorPagamento = aumentarValorPrato(qtdPrato) * 2; 
        aumentarValorTempo(tempoRestaurante, qtdPrato);
    } else if (cliente.pertenceAoGrupo) {
        valorPagamento = aumentarValorPrato(qtdPrato) * 4; 
        aumentarValorTempo(tempoRestaurante, valorPagamento);
    } else {
        valorPagamento = aumentarValorPrato(qtdPrato); 
        aumentarValorTempo(tempoRestaurante, valorPagamento);
    }
}

//Depende de quantas variedades de pratos o utilizador possui
function aumentarValorPrato(qtdPrato) {
    if(qtdPrato <= 6){
        valorPagamento = 10
    } else if(qtdPrato <= 12){
        valorPagamento = 14
    } else if(qtdPrato <= 18){
        valorPagamento = 20
    } else if(qtdPrato <= 25){
        valorPagamento = 25
    } else if(qtdPrato <= 30){
        valorPagamento = 30
    }
    
    return valorPagamento; 
}

//Depende de do tempo que demorou para atender o cliente
function aumentarValorTempo(tempoRestaurante, valorPagamento){
    if(tempoRestaurante<=20){
        valorPagamento = valorPagamento + 15;
    } else if(tempoRestaurante<=30){
        valorPagamento = valorPagamento + 5;
    } else if(tempoRestaurante<=40){
        valorPagamento = valorPagamento + 2;
    } else {
        valorPagamento = valorPagamento;
    }
}