let tela = 1;
let cobranca;

let somInicio;
let somRing;
let somJogo;

let dinheiro;
let idUsuario;
let tempoPreparo;
let lucroMais;
let valorAjudante;
let valorChef;
let tipoAjudante;
let tipoChef;
let chefAtivo;
let ajudanteAtivo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  carregandoImg();

  somInicio.play();
  
  cobranca = false;

  buttonVoltar1 = new ButtonVoltar();
  buttonVoltar2 = new ButtonVoltar();

  //Posição inicial do garçon
  xGarcon = width*0.48;
  yGarcon = height*0.25;

  //Posições iniciais dos pratos 
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

  //Posições das mesas
  mesa12X = width*0.25;
  mesa34X = width*0.4;
  mesa56X = width*0.6;
  mesa78X = width*0.75;
  mesa1357Y = height*0.45;
  mesa2468Y = height*0.1;

  garcom  = garcomInicial;
  //Telas fe funiconários e pratos
  fecharFuncionarios = new ButtonFechar();
  fecharPratos = new ButtonFechar();
  fecharPresentes = new ButtonFechar();
  fecharAvaliacoes = new ButtonFechar();
  fecharRanking = new ButtonFechar();
  fecharTrocas = new ButtonFechar();
  fecharIdTrocas = new ButtonFechar();

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
 
  comprarNovoP = new Button();

  trocaBtn = new Button();
  tradeBtn = new Button();
  findUserBtn = new Button();
  
  setInterval(gerarCliente, 4000); 
}

let imgLoading;

function draw() {
  if (!tudoCarregado){
    background('#acefea');
    image(imgLoading, width*0.3, height*0.3, width/2, height/3);
  } else {
    if (tela == 1){
      tela1();
    } else if (tela == 2){
      tela2Login();
    } else if (tela == 3){
      tela3Registro();
    } else if (tela == 4){
      destruirInputs2();
      tela4Regras();
    } else if (tela == 5){ 
      if (!somJogo.isPlaying()) {
        somJogo.play();
        somJogo.setVolume(0.2);
      }
      background(piso);  
      getDinheiro();
      if(dinheiro){
        if(!cobranca){
          postDinheiroServicos();
          cobranca = true;
        }
      }
      cenario();
      menu();
      balcao();
      chamarClientes();
      movimentoGarcon();
      telasMenu();
      getTempoPreparoValor();
      getValorChef();
      getRanking();
      pagamento();  
      getUltimasAvaliacoes();
      getPratos();
      qtdPratos();
      mediaAvaliacao();
    } 
  }
  if(!moverClientes){
    noLoop();
  }
  
}