let tela = 1;

let imgLogo;
let title;

let dinheiro;
let idUsuario;
let tempoPreparo;
let lucroMais;
let valorAjudante;
let valorChef;

function setup() {
  createCanvas(windowWidth, windowHeight);

 
  //criarInputs3();
  buttonVoltar1 = new ButtonVoltar();
  buttonVoltar2 = new ButtonVoltar();

  xGarcon = width*0.52;
  yGarcon = height*0.3;

  posicaoPrato1X = width * 0.15;
  posicaoPrato2X = width * 0.2;
  posicaoPrato3X = width * 0.25;
  posicaoPrato4X = width * 0.3;
  posicaoPrato5X = width * 0.35;
  posicaoPrato6X = width * 0.4;
  posicaoPrato7X = width * 0.45;
  posicaoPrato8X = width * 0.5;
  posicaoPrato9X = width * 0.55;
  posicaoPrato10X = width * 0.6;
  posicaoPrato11X = width * 0.65;
  posicaoPrato12X = width * 0.7;
  posicaoPrato13X = width * 0.75;
  posicaoPrato14X = width * 0.8;

  posicaoPrato1Y = posicaoPrato2Y = posicaoPrato3Y = posicaoPrato4Y = posicaoPrato5Y = posicaoPrato6Y = posicaoPrato7Y = height * 0.85;
  posicaoPrato8Y = posicaoPrato9Y = posicaoPrato10Y = posicaoPrato11Y = posicaoPrato12Y = posicaoPrato13Y = posicaoPrato14Y = height * 0.85;

  mesa12X = width*0.25;
  mesa34X = width*0.4;
  mesa56X = width*0.6;
  mesa78X = width*0.75;
  mesa1357Y = height*0.45;
  mesa2468Y = height*0.1;

  fecharFuncionarios = new ButtonFechar();
  fecharPratos = new ButtonFechar();
  addChef1 = new Button();
  addChef2 = new Button();
  addChef3 = new Button();
  addChef4 = new Button();
  addAjudante1 = new Button();
  addAjudante2 = new Button();
  addAjudante3 = new Button();
  addAjudante4 = new Button();

  criarCheck();
  
  pratosLista = new Button();
  verListaTrocas = new Button();
  presente = new Button();
 
  setInterval(gerarCliente, 4000);
  //setInterval(atualizarDinheiro, 4000);
  
}
  
function draw() {
  if (tela == 1){
    tela1();
  } else if (tela == 2){
    tela2Login();
    
  } else if (tela == 3){
    tela3Registro();
  } else if (tela == 4){
    getDinheiro();
    destruirInputs2();
    background(piso);   
    cenario();
    menu();
    chamarClientes();
    movimentoGarcon();
    telasMenu();
    getTempoPreparoValor();
    getValorChef();
    
  } 

}

function getDinheiro() {
  // Aqui você pode chamar o endpoint "/getDinheiro" para obter o valor atual do dinheiro do usuário
  loadJSON('/getDinheiro', (data) => {
    dinheiro = data.dinheiro;
    idUsuario = data.idUser;
  }, (error) => {
    console.error('Erro ao obter o valor do dinheiro:', error);
  });
  loop();
}

function getTempoPreparoValor() {
  // Aqui você pode chamar o endpoint "/getDinheiro" para obter o valor atual do dinheiro do usuário
  loadJSON('/getTempoPreparoValor', (data) => {
    tempoPreparo = data.tempoPreparo;
    valorAjudante = data.valor;
  }, (error) => {
    //console.error('Erro ao obter o tempo e valor:', error);

    tempoPreparo = 30;
    valorAjudante = 0;
  });
  loop();
}

function getValorChef() {
  // Aqui você pode chamar o endpoint "/getDinheiro" para obter o valor atual do dinheiro do usuário
  loadJSON('/getValorChef', (data) => {
    lucroMais = data.lucro;
    valorChef = data.valor;
  }, (error) => {
    //console.error('Erro ao obter o tempo e valor:', error);

    lucroMais = 0;
    valorChef = 0;
  });
  loop();
}

function atualizarDinheiro() {
  let attDinheiro = dinheiro - (valorAjudante + valorChef);
  if (attDinheiro >= 0) {
    let attBancoDinheiro = {
      "dinheiro": attDinheiro
    };
  // Enviar a atualização para o servidor
  httpPost('/postDinheiro', attBancoDinheiro, 'json', (respostaServidor) => {
    console.log(respostaServidor);
    if (respostaServidor.status === 200) {
      // Atualize o dinheiro após a atualização bem-sucedida
      getDinheiro();
    } else {
      console.error('Erro ao atualizar o dinheiro:', respostaServidor.statusText);
    }
    });
  } else {
    console.error('Saldo insuficiente para concluir a transação.');
  }
  loop();
}

