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
            cliente.tempoPedido++;
            cliente.fazerPedido = true;
        } else if (cliente.dupla) {
            image(listaPedido, cliente.listaPedidoX, cliente.destinoY, width/23, height/4);
            image(pedidoAImg, cliente.pedidoX, cliente.pedidoA, width/30, height/20);
            image(pedidoBImg, cliente.pedidoX, cliente.pedidoB, width/30, height/20);
            cliente.tempoPedido++;
            cliente.fazerPedido = true;
        } else {
            image(listaPedido, cliente.listaPedidoX, cliente.destinoY, width/23, height/4);
            image(pedidoAImg, cliente.pedidoX, cliente.pedidoA, width/30, height/20);
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
      console.log("Aguardando espaço disponível...");
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
      console.log("Aguardando espaço disponível...");
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
      console.log("Aguardando espaço disponível...");
      await aguardarEspacoDisponivel();
      return await atenderPedido(cliente);
    }
  }

  cliente.fazerPedido = false;
}