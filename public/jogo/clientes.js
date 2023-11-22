let clienteImagens = [];
let clienteSentadoImagens = [];
let clienteMaoImagens = [];
let clienteAposImagens = [];

let clienteGrupoImagens = [];
let clienteSentadoGrupoImagens = [];
let clienteGrupoMaoImagens = [];
let clienteGrupoAposImagens = [];

let clienteDuplaImagens = [];
let clienteSentadoDuplaImagens = [];
let clienteDuplaMaoImagens = [];
let clienteDuplaAposImagens = [];

let clientes = [];
let cliente;

let mesa1O;
let mesa2O;
let mesa3O;
let mesa4O;
let mesa5O;
let mesa6O;
let mesa7O;
let mesa8O;

function chamarClientes(){
    mostrarClientes();
    moverClientes();
    loop();
}

function mostrarClientes() {
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i];
        if (!cliente.chegou) {
            if(cliente.pertenceAoGrupo == true){
                image(cliente.imagemPe, cliente.x, cliente.y,  width/5, height/6); 
            } else {
                if(cliente.dupla == true){
                    image(cliente.imagemPe, cliente.x, cliente.y,  width/9, height/6); 
                } else {
                    image(cliente.imagemPe, cliente.x, cliente.y, width/19, height/6);
                } 
            }
        } else {
            if(cliente.pertenceAoGrupo == true){
                image(cliente.imagemFre, cliente.sentarX, cliente.sentarY,  width/9, height/3.5); 
           } else {
                if(cliente.dupla == true){
                    image(cliente.imagemFre, cliente.sentarX, cliente.sentarY,  width/15, height/3); 
                } else {
                    image(cliente.imagemFre, cliente.sentarX, cliente.sentarY, width/19, height/6);
                }
           }
        }
    }
}

function criarClienteNaMesa(numeroMesa) { 
    let imagemCliente;
    let imagemSentadoCliente;
    let imagemMao;
    let mesaX, mesaY;
    let mesaXSentar, mesaYSentar;
    let pedidoX;
    let pedidoA, pedidoB, pedidoC, pedidoD;
    let listaPedidoX;
    let pertenceAoGrupo;
    let dupla;
    

    if (numeroMesa === 1 || numeroMesa === 2 || numeroMesa === 7 || numeroMesa === 8) {
        if (Math.random() < 0.5) {
            imagemCliente = random(clienteImagens);
            imagemSentadoCliente = clienteSentadoImagens[clienteImagens.indexOf(imagemCliente)];
            imagemMao = clienteMaoImagens[clienteImagens.indexOf(imagemCliente)];
            dupla = false;
        } else {
            imagemCliente = random(clienteDuplaImagens);
            imagemSentadoCliente = clienteSentadoDuplaImagens[clienteDuplaImagens.indexOf(imagemCliente)];
            imagemMao = clienteDuplaMaoImagens[clienteDuplaImagens.indexOf(imagemCliente)];
            dupla = true;
        }
        pertenceAoGrupo = false;
    } else {
        // Mesa para clienteGrupoImagens
        imagemCliente = random(clienteGrupoImagens);
        imagemSentadoCliente = clienteSentadoGrupoImagens[clienteGrupoImagens.indexOf(imagemCliente)];
        imagemMao = clienteGrupoMaoImagens[clienteGrupoImagens.indexOf(imagemCliente)];
        pertenceAoGrupo = true;
        dupla = false;
    }

    switch (numeroMesa) { //O número da mesa depende de qual esta livre, com a variável mesaN.
        case 1:
            mesaX = width*0.2; 
            mesaY = height*0.45;
            listaPedidoX = width*0.32;
            if (dupla == true){
                mesaXSentar = mesaX*1.26;
                mesaYSentar = mesaY*0.82;
            } else {
                mesaXSentar = (width*0.2)*1.29;
                mesaYSentar = mesaY/1.2;
            }
            pedidoX = width*0.325;
            pedidoA = mesa1357Y*1.025;
            pedidoB = mesa1357Y*1.15;
            //mesa1O = true;
            break;
        case 2:
            mesaX = width*0.2;
            mesaY = height*0.1;
            listaPedidoX = width*0.32;
            if (dupla == true){
                mesaXSentar = mesaX*1.26;
                mesaYSentar = mesaY/15;
            } else {
                mesaXSentar = (width*0.2)*1.29;
                mesaYSentar = mesaY/4;
            }
            pedidoX = width*0.325;
            pedidoA = mesa2468Y*1.07;
            pedidoB = mesa2468Y*1.66;
            //mesa2O = true;
            break;
        case 3:
            mesaX = width * 0.35;
            mesaY = height * 0.45;
            mesaXSentar = mesaX*1.13;
            mesaYSentar = mesaY/1.1;
            listaPedidoX = width*0.495;
            pedidoX = width*0.5;
            pedidoA = mesa1357Y*1.025;
            pedidoB = mesa1357Y*1.15;
            pedidoC = mesa1357Y*1.28;
            pedidoD = mesa1357Y*1.42;
            //mesa3O = true;
            break;
        case 4:
            mesaX = width * 0.35;
            mesaY = height * 0.1;
            mesaXSentar = mesaX*1.13;
            mesaYSentar = mesaY/1.5;
            listaPedidoX = width*0.495;
            pedidoX = width*0.5;
            pedidoA = mesa2468Y*1.07;
            pedidoB = mesa2468Y*1.66;
            pedidoC = mesa2468Y*2.25;
            pedidoD = mesa2468Y*2.85;
            //mesa4O = true;
            break;
        case 5:
            mesaX = width * 0.55;
            mesaY = height * 0.45;
            mesaXSentar = mesaX*1.085;
            mesaYSentar = mesaY/1.1;
            listaPedidoX = width*0.695;
            pedidoX = width*0.7;
            pedidoA = mesa1357Y*1.025;
            pedidoB = mesa1357Y*1.15;
            pedidoC = mesa1357Y*1.28;
            pedidoD = mesa1357Y*1.42;
            //mesa5O = true;
            break;
        case 6:
            mesaX = width * 0.55;
            mesaY = height * 0.1;
            mesaXSentar = mesaX*1.09;
            mesaYSentar = mesaY/1.5;
            listaPedidoX = width*0.695;
            pedidoX = width*0.7;
            pedidoA = mesa2468Y*1.07;
            pedidoB = mesa2468Y*1.66;
            pedidoC = mesa2468Y*2.25;
            pedidoD = mesa2468Y*2.85;
            //mesa6O = true;
            break;
        case 7:
            mesaX = width * 0.7;
            mesaY = height * 0.45;
            listaPedidoX = width*0.82;
            if (dupla == true){
                mesaXSentar = mesaX*1.075;
                mesaYSentar = mesaY*0.82;
            } else {
                mesaXSentar = mesaX*1.09;
                mesaYSentar = mesaY/1.2;
            }
            pedidoX = width*0.825;
            pedidoA = mesa1357Y*1.025;
            pedidoB = mesa1357Y*1.15;
            //mesa7O = true;
            break;
        case 8:
            case 8:
            mesaX = width * 0.7;
            mesaY = height * 0.1;
            listaPedidoX = width*0.82;
            if (dupla == true){
                mesaXSentar = mesaX *1.08;
                mesaYSentar = mesaY / 4;
            } else {
                mesaXSentar = mesaX * 1.09;
                mesaYSentar = mesaY / 4;
            }
            pedidoX = width * 0.825;
            pedidoA = mesa2468Y * 1.07;
            pedidoB = mesa2468Y * 1.66;
            //mesa8O = true;
            break;
    }
    // Gerar imagens de pedido aleatórias e armazená-las no objeto do cliente
    imagensPedido = gerarImagensPedidoAleatorias();
    let novoCliente = {// JSON com as informações do cliente
        x: 0,
        y: 200,
        destinoX: mesaX,
        destinoY: mesaY,
        sentarX: mesaXSentar,
        sentarY: mesaYSentar,
        listaPedidoX: listaPedidoX,
        chegou: false,
        imagemPe: imagemCliente,
        imagemFre: imagemSentadoCliente,
        imagemMao: imagemMao,
        pedidoX: pedidoX,
        pedidoA: pedidoA,
        pedidoB: pedidoB,
        pedidoC: pedidoC,
        pedidoD: pedidoD,
        mesa: numeroMesa,
        tempoNaMesa: 0,
        pertenceAoGrupo: pertenceAoGrupo,
        dupla: dupla,
        imagensPedido,
        fazerPedido: false,
        jaAtendeuPedido: false,
        mostrouPedido: false,
        pediu: false,
        atendido: false,
        tempoPedido: 0, 
    };

    clientes.push(novoCliente); //Adiciona um novo cliente com as infromações do Json no array clientes
} 

function gerarCliente() {
    // Verificar se há mesas livres
    if (!mesa1O) {
        criarClienteNaMesa(1);
        mesa1O = true;
    } else if (!mesa2O) {
        criarClienteNaMesa(2);
        mesa2O = true;
    } else if (!mesa3O) {
        criarClienteNaMesa(3);
        mesa3O = true;
    } else if (!mesa4O) {
        criarClienteNaMesa(4);
        mesa4O = true;
    } else if (!mesa5O) {
        criarClienteNaMesa(5);
        mesa5O = true;
    } else if (!mesa6O) {
        criarClienteNaMesa(6);
        mesa6O = true;
    } else if (!mesa7O) {
        criarClienteNaMesa(7);
        mesa7O = true;
    } else if (!mesa8O) {
        criarClienteNaMesa(8);
        mesa8O = true;
    } else {
        // Todas as mesas estão ocupadas, nada acontece 
    }
    loop();
}

function moverClientes() {
    let velocidade = 2;
    
    for (let i = 0; i < clientes.length; i++) {
        cliente = clientes[i];
        if (!cliente.chegou) {
            // Calcula a direção em que o cliente deve se mover. 
            // Pega o destino final - o local do cliente e divide a distancia entre os pontos x e y do cliente e o x e y da mesa
            let direcaoX = (cliente.destinoX - cliente.x) / dist(cliente.x, cliente.y, cliente.destinoX, cliente.destinoY);
            let direcaoY = (cliente.destinoY - cliente.y) / dist(cliente.x, cliente.y, cliente.destinoX, cliente.destinoY);

            // Move o cliente na direção velocidade definida
            cliente.x += direcaoX * velocidade;
            cliente.y += direcaoY * velocidade;

            // Verifica se o cliente chegou à mesa
            if (dist(cliente.x, cliente.y, cliente.destinoX, cliente.destinoY) < 1) {
                cliente.chegou = true;
                cliente.tempoNaMesa = 0;
            } 
        }
        else {
            cliente.tempoNaMesa++;
            
            // Verifica se o cliente já tem 10 segundos na mesa para sair
            if (cliente.tempoNaMesa >= 5 * 60) { 
                cliente.imagemFre = cliente.imagemMao;
                cliente.pediu= true;                
            }
            for (let i = 0; i < clientes.length; i++) {
                let cliente = clientes[i];
                let distancia = dist(xGarcon, yGarcon, cliente.x, cliente.y)
                if (distancia < 80 && cliente.pediu == true) { 
                    cliente.atendido = true;
                    balaoGarcom();
                    
                }
            }
            
        }
        pedir(cliente);
    }
}

let imgDinheiro;
function sairMesa(cliente) {
    // Libere a mesa correspondente
    switch (cliente.mesa) {
        case 1:
            pagamentoMesa1 = true;
            indicesSalvosMesa1 = false;
            tudoAtendido1 = false;
            break;
        case 2:
            pagamentoMesa2 = true;
            indicesSalvosMesa2 = false;
            tudoAtendido2 = false;
            break;
        case 3:
            pagamentoMesa3 = true;
            indicesSalvosMesa3 = false;
            tudoAtendido3 = false;
            break;
        case 4:
            pagamentoMesa4 = true;
            indicesSalvosMesa4 = false;
            tudoAtendido4 = false;
            break;
        case 5:
            pagamentoMesa5 = true;
            indicesSalvosMesa5 = false;
            tudoAtendido5 = false;
            break;
        case 6:
            pagamentoMesa6 = true;
            indicesSalvosMesa6 = false;
            tudoAtendido6 = false;
            break;
        case 7:
            pagamentoMesa7 = true;
            indicesSalvosMesa7 = false;
            tudoAtendido7 = false;
            break;
        case 8:
            pagamentoMesa8 = true;
            indicesSalvosMesa8 = false;
            tudoAtendido8 = false;
            break;
    }
    
    condicoesPagemento();
    avaliacao();
    // Remove o cliente da lista para liberar recursos
    let index = clientes.indexOf(cliente);
    if (index !== -1) {
        clientes.splice(index, 1);
    }
}