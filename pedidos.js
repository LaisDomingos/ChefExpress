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
}

function atenderPedido(cliente) {
    if (cliente.fazerPedido) {
        if (cliente.tempoPedido >= 10 * 60) { 
            // Obtenha todas as imagens de pedido do cliente
            const { pedidoAImg, pedidoBImg, pedidoCImg, pedidoDImg } = cliente.imagensPedido;

            if (cliente.pertenceAoGrupo) {
                // Se pertence ao grupo, exiba todas as imagens A, B, C e D
                image(pedidoAImg, posXPedido, height * 0.85, width/30, height/20);
                posXPedido += width/30 + 10;
                image(pedidoBImg, posXPedido, height * 0.85, width/30, height/20);
                posXPedido += width/30 + 10;
                image(pedidoCImg, posXPedido, height * 0.85, width/30, height/20);
                posXPedido += width/30 + 10;
                image(pedidoDImg, posXPedido, height * 0.85, width/30, height/20);
            } else if (cliente.dupla) {
                // Se for uma dupla, exiba as imagens A e B
                image(pedidoAImg, posXPedido, height * 0.85, width/30, height/20);
                posXPedido += width/30 + 10;
                image(pedidoBImg, posXPedido, height * 0.85, width/30, height/20);
            } else {
                // Se for apenas um cliente, exiba a imagem A
                image(pedidoAImg, posXPedido, height * 0.85, width/30, height/20);
            }
            
            // Marque o pedido como concluído
            cliente.fazerPedido = false;
        }
    }
}


