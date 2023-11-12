let tela = 1;
let cobranca;

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

  posicaoPrato1Y = posicaoPrato2Y = posicaoPrato3Y = posicaoPrato4Y = posicaoPrato5Y = posicaoPrato6Y = posicaoPrato7Y = height * 0.85;
  posicaoPrato8Y = posicaoPrato9Y = posicaoPrato10Y = posicaoPrato11Y = posicaoPrato12Y = posicaoPrato13Y = posicaoPrato14Y = height * 0.85;

  //Posições das mesas
  mesa12X = width*0.25;
  mesa34X = width*0.4;
  mesa56X = width*0.6;
  mesa78X = width*0.75;
  mesa1357Y = height*0.45;
  mesa2468Y = height*0.1;

  garcom  = garconImagens[0]
  //Telas fe funiconários e pratos
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
}
  
function draw() {
  if (tela == 1){
    tela1();
  } else if (tela == 2){
    tela2Login();
  } else if (tela == 3){
    tela3Registro();
  } else if (tela == 4){
    destruirInputs2();
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
    test();
    noLoop();
  } 
  
}
function test(){
  console.log("mesa 1:",mesa1O)
  console.log("mesa 2:",mesa2O)
  /*console.log("mesa 3:",mesa3O)
  console.log("mesa 4:",mesa4O)
  console.log("mesa 5:",mesa5O)
  console.log("mesa 6:",mesa6O)
  console.log("mesa 7:",mesa7O)
  console.log("mesa 8:",mesa8O)*/
  loop();
}





