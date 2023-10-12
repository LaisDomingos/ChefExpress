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
    let posXPedido = width * 0.15;
    if (cliente.fazerPedido) {
        if (cliente.tempoPedido >= 10 * 60) { 
            // Verifique se passaram 10 segundos desde o pedido

            // Obtenha todas as imagens de pedido do cliente
            const { pedidoAImg, pedidoBImg, pedidoCImg, pedidoDImg } = cliente.imagensPedido;

            // Função para renderizar uma imagem e atualizar a posição
            function renderizarImagem(imagem) {
                image(imagem, posXPedido, height * 0.85, width/30, height/20);
            }

            if (cliente.pertenceAoGrupo) {
                // Se pertence ao grupo, exiba todas as imagens A, B, C e D
                renderizarImagem(pedidoAImg);
                renderizarImagem(pedidoBImg);
                renderizarImagem(pedidoCImg);
                renderizarImagem(pedidoDImg);
            } else if (cliente.dupla) {
                // Se for uma dupla, exiba as imagens A e B
                renderizarImagem(pedidoAImg);
                renderizarImagem(pedidoBImg);
            } else {
                // Se for apenas um cliente, exiba a imagem A
                renderizarImagem(pedidoAImg);
            }
           
            // Marque o pedido como concluído
            cliente.fazerPedido = false;
        }
    }
}


