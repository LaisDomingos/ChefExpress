let pratosIniciais = [];
let pratosGerais = [];

let listaPedido;

let imagensPedido;

let pedidoAImg;
let pedidoBImg;
let pedidoCImg;
let pedidoDImg;

function gerarImagensPedidoAleatorias() {
    const pedidoAImg = random(pratosIniciais);
    const pedidoBImg = random(pratosIniciais);
    const pedidoCImg = random(pratosIniciais);
    const pedidoDImg = random(pratosIniciais);

    return {
        pedidoAImg,
        pedidoBImg,
        pedidoCImg,
        pedidoDImg,
    };
}

let indiceMesa1 = [];
let indiceMesa2 = [];
let indiceMesa3 = [];
let indiceMesa4 = [];
let indiceMesa5 = [];
let indiceMesa6 = [];
let indiceMesa7 = [];
let indiceMesa8 = [];
let indicesSalvosMesa1 = false;
let indicesSalvosMesa2 = false;
let indicesSalvosMesa3 = false;
let indicesSalvosMesa4 = false;
let indicesSalvosMesa5 = false;
let indicesSalvosMesa6 = false;
let indicesSalvosMesa7 = false;
let indicesSalvosMesa8 = false;

function checkImg(){
  image(check,cliente.pedidoX, cliente.pedidoA,  width/30, height/18 )
  image(check,cliente.pedidoX, cliente.pedidoB,  width/30, height/18 )
  image(check,cliente.pedidoX, cliente.pedidoC,  width/30, height/18 )
  image(check,cliente.pedidoX, cliente.pedidoD,  width/30, height/18 )
}

function checkImgD(){
  image(check,cliente.pedidoX, cliente.pedidoA,  width/30, height/18 )
  image(check,cliente.pedidoX, cliente.pedidoB,  width/30, height/18 )
}

function checkImgS(){
  image(check,cliente.pedidoX, cliente.pedidoA,  width/30, height/18 )
}

function pedir(cliente) {
    const { pedidoAImg, pedidoBImg, pedidoCImg, pedidoDImg } = cliente.imagensPedido;

    // Verifique se o cliente chegou
    if (cliente.atendido) {
        if (cliente.pertenceAoGrupo) {
            image(listaPedido, cliente.listaPedidoX, cliente.destinoY, width/23, height/4);
            image(pedidoAImg, cliente.pedidoX, cliente.pedidoA, width/30, height/20);
            image(pedidoBImg, cliente.pedidoX, cliente.pedidoB, width/30, height/20);
            image(pedidoCImg, cliente.pedidoX, cliente.pedidoC, width/30, height/20);
            image(pedidoDImg, cliente.pedidoX, cliente.pedidoD, width/30, height/20);
            if (cliente.mesa == 3) {
              if(!indicesSalvosMesa3){
                indiceMesa3.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa3.push(pratosIniciais.indexOf(pedidoBImg));
                indiceMesa3.push(pratosIniciais.indexOf(pedidoCImg));
                indiceMesa3.push(pratosIniciais.indexOf(pedidoDImg));
                indicesSalvosMesa3 = true;
              } 
              if(tudoAtendido3){
                checkImg();
                sairMesa(cliente);
              }
            }
            else if (cliente.mesa == 4){
              if(!indicesSalvosMesa4){
                indiceMesa4.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa4.push(pratosIniciais.indexOf(pedidoBImg));
                indiceMesa4.push(pratosIniciais.indexOf(pedidoCImg));
                indiceMesa4.push(pratosIniciais.indexOf(pedidoDImg));
                indicesSalvosMesa4 = true;
              }
              if(tudoAtendido4){
                checkImg();
                sairMesa(cliente);
              }
            } else if (cliente.mesa == 5){
              if(!indicesSalvosMesa5){
                indiceMesa5.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa5.push(pratosIniciais.indexOf(pedidoBImg));
                indiceMesa5.push(pratosIniciais.indexOf(pedidoCImg));
                indiceMesa5.push(pratosIniciais.indexOf(pedidoDImg));
                indicesSalvosMesa5 = true;
              }
              if(tudoAtendido5){
                checkImg();
                sairMesa(cliente);
              }
            }
            else if (cliente.mesa == 6){
              if(!indicesSalvosMesa6){
                indiceMesa6.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa6.push(pratosIniciais.indexOf(pedidoBImg));
                indiceMesa6.push(pratosIniciais.indexOf(pedidoCImg));
                indiceMesa6.push(pratosIniciais.indexOf(pedidoDImg));
                indicesSalvosMesa6 = true;
              }
              if(tudoAtendido6){
                checkImg();
                sairMesa(cliente);
              }
            }

            cliente.tempoPedido++;
            cliente.fazerPedido = true;
        } else if (cliente.dupla) {
            image(listaPedido, cliente.listaPedidoX, cliente.destinoY, width/23, height/4);
            image(pedidoAImg, cliente.pedidoX, cliente.pedidoA, width/30, height/20);
            image(pedidoBImg, cliente.pedidoX, cliente.pedidoB, width/30, height/20);
            if (cliente.mesa == 1){
              if(!indicesSalvosMesa1){
                indiceMesa1.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa1.push(pratosIniciais.indexOf(pedidoBImg));
                indicesSalvosMesa1 = true;
              }
              if(tudoAtendido1){
                checkImgD();
                sairMesa(cliente);
              }
            } else if (cliente.mesa == 2){
              if(!indicesSalvosMesa2){
                indiceMesa2.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa2.push(pratosIniciais.indexOf(pedidoBImg));
                indicesSalvosMesa2 = true;
              }
              if(tudoAtendido2){
                checkImgD();
                sairMesa(cliente);
              }
            } else if (cliente.mesa == 7){
              if(!indicesSalvosMesa7){
                indiceMesa7.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa7.push(pratosIniciais.indexOf(pedidoBImg));
                indicesSalvosMesa7 = true;
              }
              if(tudoAtendido7){
                checkImgD();
                sairMesa(cliente);
              }
            } else if (cliente.mesa == 8){
              if(!indicesSalvosMesa8){
                indiceMesa8.push(pratosIniciais.indexOf(pedidoAImg));
                indiceMesa8.push(pratosIniciais.indexOf(pedidoBImg));
                indicesSalvosMesa8 = true;
              }
              if(tudoAtendido8){
                checkImgD();
                sairMesa(cliente);
              }
            }
            cliente.tempoPedido++;
            cliente.fazerPedido = true;
        } else {
            image(listaPedido, cliente.listaPedidoX, cliente.destinoY, width/23, height/4);
            image(pedidoAImg, cliente.pedidoX, cliente.pedidoA, width/30, height/20);
            if (cliente.mesa == 1) {
              if(!indicesSalvosMesa1){
                indiceMesa1.push(pratosIniciais.indexOf(pedidoAImg));
                indicesSalvosMesa1 = true;
              }
              if(tudoAtendido1){
                checkImgS();
                sairMesa(cliente);
              }
            } if (cliente.mesa == 2) {
              if(!indicesSalvosMesa2){
                indiceMesa2.push(pratosIniciais.indexOf(pedidoAImg));
                indicesSalvosMesa2 = true;
              }
              if(tudoAtendido2){
                checkImgS();
                sairMesa(cliente);
              }
            } if (cliente.mesa == 7) {
              if(!indicesSalvosMesa7){
                indiceMesa7.push(pratosIniciais.indexOf(pedidoAImg));
                indicesSalvosMesa7 = true;
              }
              if(tudoAtendido7){
                checkImgS();
                sairMesa(cliente);
              }
            } if (cliente.mesa == 8) {
              if(!indicesSalvosMesa8){
                indiceMesa8.push(pratosIniciais.indexOf(pedidoAImg));
                indicesSalvosMesa8 = true;
              }
              if(tudoAtendido8){
                checkImgS();
                sairMesa(cliente);
              }
            }
            cliente.tempoPedido++;
            cliente.fazerPedido = true;
        }
    }
    if (cliente.fazerPedido){
        if (cliente.tempoPedido >= tempoPreparo*60 && !cliente.jaAtendeuPedido){
            atenderPedido(cliente);
            cliente.jaAtendeuPedido = true; 
        }
    }
    
}

let espacoocupado1 = false;
let espacoocupado2 = false;
let espacoocupado3 = false;
let espacoocupado4 = false;
let espacoocupado5 = false;
let espacoocupado6 = false;
let espacoocupado7 = false;
let espacoocupado8 = false;
let espacoocupado9 = false;
let espacoocupado10 = false;
let espacoocupado11 = false;
let espacoocupado12 = false;
let espacoocupado13 = false;
let espacoocupado14 = false;
let espacoocupado15 = false;

let espaco1;
let espaco2;
let espaco3;
let espaco4;
let espaco5;
let espaco6;
let espaco7;
let espaco8;
let espaco9;
let espaco10;
let espaco11;
let espaco12;
let espaco13;
let espaco14;

function aguardarEspacoDisponivel() {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (
        !espacoocupado1 ||
        !espacoocupado2 ||
        !espacoocupado3 ||
        !espacoocupado4 ||
        !espacoocupado5 ||
        !espacoocupado6 ||
        !espacoocupado7 ||
        !espacoocupado8 ||
        !espacoocupado9 ||
        !espacoocupado10 ||
        !espacoocupado11 ||
        !espacoocupado12 ||
        !espacoocupado13 ||
        !espacoocupado14 
      ) {
        clearInterval(interval);
        resolve();
      }
    }, 1000); // Verifique a cada segundo se há espaço disponível
  });
}

async function atenderPedido(cliente) {
  const { pedidoAImg, pedidoBImg, pedidoCImg, pedidoDImg } = cliente.imagensPedido;

  if (cliente.pertenceAoGrupo) {
    if (!espacoocupado7 && !espacoocupado8 && !espacoocupado9 && !espacoocupado10) {
      espaco7 = pedidoAImg;
      espaco8 = pedidoBImg;
      espaco9 = pedidoCImg;
      espaco10 = pedidoDImg;
      espacoocupado7 = true;
      espacoocupado8 = true;
      espacoocupado9 = true;
      espacoocupado10 = true;
    } else if (!espacoocupado11 && !espacoocupado12 && !espacoocupado13 && !espacoocupado14) {
      espaco11 = pedidoAImg;
      espaco12 = pedidoBImg;
      espaco13 = pedidoCImg;
      espaco14 = pedidoDImg;
      espacoocupado11 = true;
      espacoocupado12 = true;
      espacoocupado13 = true;
      espacoocupado14 = true;
    } else {
      await aguardarEspacoDisponivel();
      // Quando o espaço estiver disponível, a função irá continuar a partir daqui
      return await atenderPedido(cliente);
    }
  } else if (cliente.dupla) {
    if (!espacoocupado3 && !espacoocupado4) {
      espaco3 = pedidoAImg;
      espaco4 = pedidoBImg;
      espacoocupado3 = true;
      espacoocupado4 = true;
    } else if (!espacoocupado5 && !espacoocupado6) {
      espaco5 = pedidoAImg;
      espaco6 = pedidoBImg;
      espacoocupado5 = true;
      espacoocupado6 = true;
    } else {
      await aguardarEspacoDisponivel();
      return await atenderPedido(cliente);
    }
  } else {
    if (!espacoocupado1) {
      espaco1 = pedidoAImg;
      espacoocupado1 = true;
    } else if (!espacoocupado2) {
      espaco2 = pedidoAImg;
      espacoocupado2 = true;
    } else {
      await aguardarEspacoDisponivel();
      return await atenderPedido(cliente);
    }
  }

  cliente.fazerPedido = false;
}