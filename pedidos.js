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
        if (cliente.tempoPedido >= 10*60 && !cliente.jaAtendeuPedido){
            atenderPedido(cliente);
            cliente.jaAtendeuPedido = true; 
        }
    }
    
}

let espaco4ocupado1 = false;
let espaco4ocupado2 = false;
let espaco2ocupado1 = false;
let espaco2ocupado2 = false;
let espaco1ocupado1 = false;
let espaco1ocupado2 = false;

/*
function atenderPedido(cliente) {
    const { pedidoAImg, pedidoBImg, pedidoCImg, pedidoDImg } = cliente.imagensPedido;
    if (cliente.pertenceAoGrupo) {
         if (!espaco4ocupado1) {
            image(pedidoAImg, width * 0.45, height * 0.85, width/30, height/20);
            image(pedidoBImg, width * 0.5, height * 0.85, width/30, height/20);
            image(pedidoCImg, width * 0.55, height * 0.85, width/30, height/20);
            image(pedidoDImg, width * 0.6, height * 0.85, width/30, height/20);
            
            espaco4ocupado1 = true;
            console.log("mudou espaco 4_1");

        } else if (!espaco4ocupado2) {
            image(pedidoAImg, width * 0.65, height * 0.85, width/30, height/20);
            image(pedidoBImg, width * 0.7, height * 0.85, width/30, height/20);
            image(pedidoCImg, width * 0.75, height * 0.85, width/30, height/20);
            image(pedidoDImg, width * 0.8, height * 0.85, width/30, height/20);
            espaco4ocupado2 = true;
            console.log("mudou espaco 4_2");
        } else {
            console.log("aguarda");
        }
    } else if (cliente.dupla) {
        if (!espaco2ocupado1) {
            image(pedidoAImg,  width * 0.25, height * 0.85, width/30, height/20);
            image(pedidoBImg,  width * 0.3, height * 0.85, width/30, height/20);
            espaco2ocupado1 = true;
            console.log("mudou espaco 2_1");
        } else if (!espaco2ocupado2) {
            image(pedidoAImg,  width * 0.35, height * 0.85, width/30, height/20);
            image(pedidoBImg,  width * 0.4, height * 0.85, width/30, height/20);
            espaco2ocupado2 = true;
            console.log("mudou espaco 2_2");
        } else {
            console.log("aguarda");
        }
    } else {
        if (!espaco1ocupado1) {
            image(pedidoAImg,  width * 0.15, height * 0.85, width/30, height/20);
            espaco1ocupado1 = true;
            console.log("mudou espaco 1_1");
        } else if (!espaco1ocupado2) {
            image(pedidoAImg,  width * 0.2, height * 0.85, width/30, height/20);
            espaco1ocupado2 = true;
            console.log("mudou espaco 1_2");
        } else {
            console.log("aguarda");
        }
    }
    cliente.fazerPedido = false;
    
}
*/

let espaco1S;
let espaco2S;
let espaco1D1;
let espaco1D2;
let espaco2D1;
let espaco2D2;
let espaco1G1;
let espaco1G2;
let espaco1G3;
let espaco1G4;
let espaco2G1;
let espaco2G2;
let espaco2G3;
let espaco2G4;

function atenderPedido(cliente) {
    const { pedidoAImg, pedidoBImg, pedidoCImg, pedidoDImg } = cliente.imagensPedido;
    if (cliente.pertenceAoGrupo) {
         if (!espaco4ocupado1) {
            espaco1G1 = pedidoAImg;
            espaco1G2 = pedidoBImg;
            espaco1G3 = pedidoCImg;
            espaco1G4 = pedidoDImg;

            espaco4ocupado1 = true;
            console.log("mudou espaco 4_1");

        } else if (!espaco4ocupado2) {
            espaco2G1 = pedidoAImg;
            espaco2G2 = pedidoBImg;
            espaco2G3 = pedidoCImg;
            espaco2G4 = pedidoDImg;
            espaco4ocupado2 = true;
            console.log("mudou espaco 4_2");
        } else {
            console.log("aguarda");
        }
    } else if (cliente.dupla) {
        if (!espaco2ocupado1) {
            espaco1D1 = pedidoAImg;
            espaco1D2 = pedidoBImg;
            espaco2ocupado1 = true;
            console.log("mudou espaco 2_1");
        } else if (!espaco2ocupado2) {
            espaco2D1 = pedidoAImg;
            espaco2D2 = pedidoBImg;
            espaco2ocupado2 = true;
            console.log("mudou espaco 2_2");
        } else {
            console.log("aguarda");
        }
    } else {
        if (!espaco1ocupado1) {
            espaco1S = pedidoAImg;
            espaco1ocupado1 = true;
            console.log("mudou espaco 1_1");
        } else if (!espaco1ocupado2) {
            espaco2S = pedidoAImg;
            espaco1ocupado2 = true;
            console.log("mudou espaco 1_2");
        } else {
            console.log("aguarda");
        }
    }
    cliente.fazerPedido = false;
    
}
