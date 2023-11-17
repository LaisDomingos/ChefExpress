let garconImagens = [];
let garcomImagensPratosIni = [];

let xGarcon;
let yGarcon;

let garconMovendo1 = false; 
let garconMovendo2 = false; 
let garconMovendo3 = false; 
let garconMovendo4 = false; 
let garconMovendo5 = false; 
let garconMovendo6 = false; 
let garconMovendo7 = false; 
let garconMovendo8 = false; 

let buscarPrato1 = false; 
let buscarPrato2 = false; 
let buscarPrato3 = false; 
let buscarPrato4 = false; 
let buscarPrato5 = false; 
let buscarPrato6 = false; 
let buscarPrato7 = false; 
let buscarPrato8 = false; 
let buscarPrato9 = false; 
let buscarPrato10 = false; 
let buscarPrato11 = false; 
let buscarPrato12 = false; 
let buscarPrato13 = false; 
let buscarPrato14 = false;
let garcom;
let garcomPedido;

let garcomImgI;
let garcomComPedido = false;

function movimentoGarcon(){
  if (!garcomComPedido){
    image(garcom, xGarcon, yGarcon, width/8, height/3);
  } else {
    image(garcomPedido, xGarcon, yGarcon, width/8, height/3);
  }
  
  if (garconMovendo1) {
    if (xGarcon !== width * 0.2 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.16;
      yGarcon = height * 0.4;
      let mesaAtendida = 1;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa1){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa1 = false;
        mesa1O = false;
      }
      garconMovendo1 = false;
    }
  }
  if (garconMovendo2) {
    if (xGarcon !== width * 0.2 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.16;
      yGarcon = height * 0.05;
      let mesaAtendida = 2;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa2){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa2 = false;
        mesa2O = false;
      }
      garconMovendo2 = false;
    }
  }
  if (garconMovendo3) {
    if (xGarcon !== width * 0.35 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.31;
      yGarcon = height * 0.4;
      let mesaAtendida = 3;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa3){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa3 = false;
        mesa3O = false;
      }
      garconMovendo3 = false;
    }
  }
  if (garconMovendo4) {
    if (xGarcon !== width * 0.35 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.31;
      yGarcon = height * 0.05;
      let mesaAtendida = 4;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa4){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa4 = false;
        mesa4O = false;
      }
      garconMovendo4 = false;
    }
  }
  if (garconMovendo5) {
    if (xGarcon !== width * 0.55 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.51;
      yGarcon = height * 0.4;
      let mesaAtendida = 5;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa5){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa5 = false;
        mesa5O = false;
      }
      garconMovendo5 = false;
    }
  }
  if (garconMovendo6) {
    if (xGarcon !== width * 0.55 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.51;
      yGarcon = height * 0.05;
      let mesaAtendida = 6;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa6){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa6 = false;
        mesa6O = false;
      }
      garconMovendo6= false;
    }
  }
  if (garconMovendo7) {
    if (xGarcon !== width * 0.7 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.66;
      yGarcon = height * 0.4;
      let mesaAtendida = 7;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa7){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa7 = false;
        mesa7O = false;
      }
      garconMovendo7 = false;
    }
  }
  if (garconMovendo8) {
    if (xGarcon !== width * 0.7 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.66;
      yGarcon = height * 0.05;
      let mesaAtendida = 8;
      if(garcomComPedido){
        verificarPedidos(mesaAtendida);
      }
      if(pagamentoMesa8){
        //console.log('Pegando dinheiro');
        postDinheiroPagamento();
        pagamentoMesa8 = false;
        mesa8O = false;
      }
      garconMovendo8 = false;
    }
  }
  if (buscarPrato1) {
    if (xGarcon !== width * 0.14 || yGarcon !== height * 0.62) {
      xGarcon = width * 0.1;
      yGarcon = height * 0.52;
      buscarPrato1 = false;
      if (espacoocupado1) {
        const indicePrato = pratosIniciais.indexOf(espaco1);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado1 = false;
      }
    }
  }
  if (buscarPrato2) {
    if (xGarcon !== width * 0.19 || yGarcon !== height*0.62) {
      xGarcon = width * 0.15;
      yGarcon = height * 0.52;
      buscarPrato2 = false;
    }
    if(espacoocupado2){
      const indicePrato = pratosIniciais.indexOf(espaco2);
      garcomImgI = indicePrato;
      garcomPedido = garcomImagensPratosIni[indicePrato];
      garcomComPedido = true;
      espacoocupado2 = false;
    }
  }
  if (buscarPrato3) {
    if (xGarcon !== width * 0.24 || yGarcon !== height*0.62) {
      xGarcon = width * 0.2;
      yGarcon = height * 0.52;
      buscarPrato3 = false;
      if(espacoocupado3){
        const indicePrato = pratosIniciais.indexOf(espaco3);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado3 = false;
      }
    }
  }
  if (buscarPrato4) {
    if (xGarcon !== width * 0.29 || yGarcon !== height*0.62) {
      xGarcon = width * 0.25;
      yGarcon = height * 0.52;
      buscarPrato4 = false;
      if(espacoocupado4){
        const indicePrato = pratosIniciais.indexOf(espaco4);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado4 = false;
      }
    }
  }
  if (buscarPrato5) {
    if (xGarcon !== width * 0.34 || yGarcon !== height*0.62) {
      xGarcon = width * 0.3;
      yGarcon = height * 0.52;
      buscarPrato5 = false;
      if(espacoocupado5){
        const indicePrato = pratosIniciais.indexOf(espaco5);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado5 = false;
      }
    }
  }
  if (buscarPrato6) {
    if (xGarcon !== width * 0.39 || yGarcon !== height*0.62) {
      xGarcon = width * 0.35;
      yGarcon = height * 0.52;
      buscarPrato6 = false;
      if(espacoocupado6){
        const indicePrato = pratosIniciais.indexOf(espaco6);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado6 = false;
      }
    }
  }
  if (buscarPrato7) {
    if (xGarcon !== width * 0.44 || yGarcon !== height*0.62) {
      xGarcon = width * 0.4;
      yGarcon = height * 0.52;
      buscarPrato7 = false;
      if(espacoocupado7){
        const indicePrato = pratosIniciais.indexOf(espaco7);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado7 = false;
      }
    }
  }
  if (buscarPrato8) {
    if (xGarcon !== width * 0.49 || yGarcon !== height*0.62) {
      xGarcon = width * 0.45;
      yGarcon = height * 0.52;
      buscarPrato8 = false;
      if(espacoocupado8){
        const indicePrato = pratosIniciais.indexOf(espaco8);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado8 = false;
      }
    }
  }
  if (buscarPrato9) {
    if (xGarcon !== width * 0.54 || yGarcon !== height*0.62) {
      xGarcon = width * 0.5;
      yGarcon = height * 0.52;
      buscarPrato9 = false;
      if(espacoocupado9){
        const indicePrato = pratosIniciais.indexOf(espaco9);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado9 = false;
      }
    }
  }
  if (buscarPrato10) {
    if (xGarcon !== width * 0.59 || yGarcon !== height*0.62) {
      xGarcon = width * 0.55;
      yGarcon = height * 0.52;
      buscarPrato10 = false;
      if(espacoocupado10){
        const indicePrato = pratosIniciais.indexOf(espaco10);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado10 = false;
      }
    }
  }
  if (buscarPrato11) {
    if (xGarcon !== width * 0.64 || yGarcon !== height*0.62) {
      xGarcon = width * 0.6;
      yGarcon = height * 0.52;
      buscarPrato11 = false;
      if(espacoocupado11){
        const indicePrato = pratosIniciais.indexOf(espaco11);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado11 = false;
      }
    }
  }
  if (buscarPrato12) {
    if (xGarcon !== width * 0.69 || yGarcon !== height*0.62) {
      xGarcon = width * 0.65;
      yGarcon = height * 0.52;
      buscarPrato12 = false;
      if(espacoocupado12){
        const indicePrato = pratosIniciais.indexOf(espaco12);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado12 = false;
      }
    }
  }
  if (buscarPrato13) {
    if (xGarcon !== width * 0.74 || yGarcon !== height*0.62) {
      xGarcon = width * 0.7;
      yGarcon = height * 0.52;
      buscarPrato13 = false;
      if(espacoocupado13){
        const indicePrato = pratosIniciais.indexOf(espaco13);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado13 = false;
      }
    }
  }
  if (buscarPrato14) {
    if (xGarcon !== width * 0.79 || yGarcon !== height*0.62) {
      xGarcon = width * 0.75;
      yGarcon = height * 0.52;
      buscarPrato14 = false;
      if(espacoocupado14){
        const indicePrato = pratosIniciais.indexOf(espaco14);
        garcomImgI = indicePrato;
        garcomPedido = garcomImagensPratosIni[indicePrato];
        garcomComPedido = true;
        espacoocupado14 = false;
      }
    }
  }
  loop();
}

function movimentoAteMesa(){
  if (mouseX > mesa12X && mouseX < mesa12X + width / 14){
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo1= true;
    }
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo2= true;
    }
  }
  if (mouseX > mesa34X && mouseX < mesa34X + width / 10){
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo3= true;
    }
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo4= true; 
    }
  }
  if (mouseX > mesa56X && mouseX < mesa56X + width / 10){
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo5= true;
    }
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo6= true;
    }
  }
  if (mouseX > mesa78X && mouseX < mesa78X + width / 14){
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo7= true;
    }
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
    
      garconMovendo8= true;
    }
  }
  loop();
}

function movimentoAtePedidos(){
  if(mouseY > height * 0.85 && mouseY < height * 0.85 + height / 20){
    if ( mouseX > width * 0.15 && mouseX < width * 0.15 + width / 30) {
      buscarPrato1 = true;
    }
    if ( mouseX > width * 0.2 && mouseX < width * 0.2 + width / 30) {
      buscarPrato2 = true;
    }
    if ( mouseX > width * 0.25 && mouseX < width * 0.25 + width / 30) {
      buscarPrato3 = true;
    }
    if ( mouseX > width * 0.3 && mouseX < width * 0.3 + width / 30) {
      buscarPrato4 = true;
    }
    if ( mouseX > width * 0.35 && mouseX < width * 0.35 + width / 30) {
      buscarPrato5 = true;
    }
    if ( mouseX > width * 0.4 && mouseX < width * 0.4 + width / 30) {
      buscarPrato6 = true;
    }
    if ( mouseX > width * 0.45 && mouseX < width * 0.45 + width / 30) {
      buscarPrato7 = true;
    }
    if ( mouseX > width * 0.5 && mouseX < width * 0.5 + width / 30) {
      buscarPrato8 = true;
    }
    if ( mouseX > width * 0.55 && mouseX < width * 0.55 + width / 30) {
      buscarPrato9 = true;
    }
    if ( mouseX > width * 0.6 && mouseX < width * 0.6 + width / 30) {
      buscarPrato10 = true;
    }
    if ( mouseX > width * 0.65 && mouseX < width * 0.65 + width / 30) {
      buscarPrato11 = true;
    }
    if ( mouseX > width * 0.7 && mouseX < width * 0.7 + width / 30) {
      buscarPrato12 = true;
    }
    if ( mouseX > width * 0.75 && mouseX < width * 0.75 + width / 30) {
      buscarPrato13= true;
    }
    if ( mouseX > width * 0.8 && mouseX < width * 0.8 + width / 30) {
      buscarPrato14= true;
    }
  }
  loop();
}

let check;
let tudoAtendido1 = false;
let tudoAtendido2 = false;
let tudoAtendido3 = false;
let tudoAtendido4 = false;
let tudoAtendido5 = false;
let tudoAtendido6 = false;
let tudoAtendido7 = false;
let tudoAtendido8 = false;

function verificarPedidos(mesaAtendida) {
  //console.log(garcomImgI);
  if (mesaAtendida == 1){
    //console.log("Mesa 1:", indiceMesa1);
    for (var i = 0; i < indiceMesa1.length; i++) {
      if (indiceMesa1[i] === garcomImgI) {
        indiceMesa1.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa1.length === 0) {
      tudoAtendido1 = true;
    }
  } else if (mesaAtendida == 2){
    //console.log("Mesa 2:", indiceMesa2);
    for (var i = 0; i < indiceMesa2.length; i++) {
      if (indiceMesa2[i] === garcomImgI) {
        indiceMesa2.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa2.length === 0) {
      tudoAtendido2 = true;
    }
  } else if (mesaAtendida == 3) {
    //console.log("Mesa 3:", indiceMesa3);
    for (var i = 0; i < indiceMesa3.length; i++) {
      if (indiceMesa3[i] === garcomImgI) {
        indiceMesa3.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
      //Verifica se todos os pedidos foram atendidos
    if (indiceMesa3.length === 0) {
      tudoAtendido3 = true;
    }
  }
   else if (mesaAtendida == 4){    
    //console.log("Mesa 4:", indiceMesa4);
    for (var i = 0; i < indiceMesa4.length; i++) {
      if (indiceMesa4[i] === garcomImgI) {
        indiceMesa4.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa4.length === 0) {
      tudoAtendido4 = true;
    }
  } else if (mesaAtendida == 5){
    //console.log("Mesa 5:", indiceMesa5);
    for (var i = 0; i < indiceMesa5.length; i++) {
      if (indiceMesa5[i] === garcomImgI) {
        indiceMesa5.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa5.length === 0) {
      tudoAtendido5 = true;
    }
  } else if (mesaAtendida == 6){
    //console.log("Mesa 6:", indiceMesa6);
    for (var i = 0; i < indiceMesa6.length; i++) {
      if (indiceMesa6[i] === garcomImgI) {
        indiceMesa6.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa6.length === 0) {
      tudoAtendido6 = true;
    }
  } else if (mesaAtendida == 7){
    //console.log("Mesa 7:", indiceMesa7);
    for (var i = 0; i < indiceMesa7.length; i++) {
      if (indiceMesa7[i] === garcomImgI) {
        indiceMesa7.splice(i, 1);
        garcomComPedido = false;
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa7.length === 0) {
      tudoAtendido7 = true;
    }
  } else if (mesaAtendida == 8){
    //console.log("Mesa 8:", indiceMesa8);
    for (var i = 0; i < indiceMesa8.length; i++) {
      if (indiceMesa8[i] === garcomImgI) {
        garcomComPedido = false;
        indiceMesa8.splice(i, 1);
        break;
      }
    }
    //Verifica se todos os pedidos foram atendidos
    if (indiceMesa8.length === 0) {
      tudoAtendido8 = true;
    }
  }
   
}