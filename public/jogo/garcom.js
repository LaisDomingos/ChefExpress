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

function movimentoGarcon(){
  image(garcom, xGarcon, yGarcon, width/8, height/3);
  if (garconMovendo1) {
    if (xGarcon !== width * 0.2 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.16;
      yGarcon = height * 0.05;
      garconMovendo1 = false;
    }
  }
  if (garconMovendo2) {
    if (xGarcon !== width * 0.2 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.16;
      yGarcon = height * 0.4;
      garconMovendo2 = false;
    }
  }
  if (garconMovendo3) {
    if (xGarcon !== width * 0.35 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.31;
      yGarcon = height * 0.05;
      garconMovendo3 = false;
    }
  }
  if (garconMovendo4) {
    if (xGarcon !== width * 0.35 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.31;
      yGarcon = height * 0.4;
      garconMovendo4 = false;
    }
  }
  if (garconMovendo5) {
    if (xGarcon !== width * 0.55 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.51;
      yGarcon = height * 0.05;
      garconMovendo5 = false;
    }
  }
  if (garconMovendo6) {
    if (xGarcon !== width * 0.55 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.51;
      yGarcon = height * 0.4;
      garconMovendo6= false;
    }
  }
  if (garconMovendo7) {
    if (xGarcon !== width * 0.7 || yGarcon !== mesa2468Y) {
      xGarcon = width * 0.66;
      yGarcon = height * 0.05;
      garconMovendo7 = false;
    }
  }
  if (garconMovendo8) {
    if (xGarcon !== width * 0.7 || yGarcon !== mesa1357Y) {
      xGarcon = width * 0.66;
      yGarcon = height * 0.4;
      garconMovendo8 = false;
    }
  }
  if (buscarPrato1) {
    if (xGarcon !== width * 0.14 || yGarcon !== height * 0.62) {
      xGarcon = width * 0.1;
      yGarcon = height * 0.52;
      buscarPrato1 = false;
  
      if (espacoocupado1) {
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco1)];// Nova imagem do garçom 
        
        console.log('Pegar prato 1 individual');
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
      garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco2)];// Nova imagem do garçom
      
      console.log('Pegar prato 2 individual');
      espacoocupado2 = false;
    }
  }
  if (buscarPrato3) {
    if (xGarcon !== width * 0.24 || yGarcon !== height*0.62) {
      xGarcon = width * 0.2;
      yGarcon = height * 0.52;
      buscarPrato3 = false;
      if(espacoocupado3){
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco3)];// Nova imagem do garçom
  
        console.log('Pegar prato 1 da primeira dupla');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco4)];// Nova imagem do garçom
    
        console.log('Pegar prato 2 da primeira dupla');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco5)];// Nova imagem do garçom
       
        console.log('Pegar prato 1 da segunda dupla');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco6)];// Nova imagem do garçom
       
        console.log('Pegar prato 2 da segunda dupla');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco7)];// Nova imagem do garçom
        
        console.log('Pegar prato 1 do primeiro grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco8)];// Nova imagem do garçom
        
        console.log('Pegar prato 2 do primeiro grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco9)];// Nova imagem do garçom
        
        console.log('Pegar prato 3 do primeiro grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco10)];// Nova imagem do garçom
        
        console.log('Pegar prato 4 do primeiro grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco11)];// Nova imagem do garçom
      
        console.log('Pegar prato 1 do segundo grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco12)];// Nova imagem do garçom
        
        console.log('Pegar prato 2 do segundo grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco13)];// Nova imagem do garçom
        
        console.log('Pegar prato 3 do segundo grupo');
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
        garcom = garcomImagensPratosIni[pratosIniciais.indexOf(espaco14)];// Nova imagem do garçom
      
        console.log('Pegar prato 4 do segundo grupo');
        espacoocupado14 = false;
      }
    }
  }
  loop();
}

function movimentoAteMesa(){
  if (mouseX > mesa12X && mouseX < mesa12X + width / 14){
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo1= true;
    }
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo2= true;
    }
  }
  if (mouseX > mesa34X && mouseX < mesa34X + width / 10){
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo3= true;
    }
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo4= true; 
    }
  }
  if (mouseX > mesa56X && mouseX < mesa56X + width / 10){
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo5= true;
    }
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
      garconMovendo6= true;
    }
  }
  if (mouseX > mesa78X && mouseX < mesa78X + width / 14){
    if (mouseY > mesa2468Y && mouseY < mesa2468Y + height / 4 ) {
      garconMovendo7= true;
    }
    if (mouseY > mesa1357Y && mouseY < mesa1357Y + height / 4 ) {
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