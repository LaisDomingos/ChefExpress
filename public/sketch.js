let tela = 1;

let imgLogo;
let title;

let dinheiro;

function setup() {
  createCanvas(windowWidth, windowHeight);

  start = new Button();
  login = new Button();
  registrar = new Button();
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

  check1 = new Checkbox();
  check2 = new Checkbox();
  check3 = new Checkbox();
  check4 = new Checkbox();
  check5 = new Checkbox();
  check6 = new Checkbox();
  check7 = new Checkbox();
  check8 = new Checkbox();
  check9 = new Checkbox();
  check10 = new Checkbox();
  check11 = new Checkbox();
  check12 = new Checkbox();
  check13 = new Checkbox();
  check14 = new Checkbox();
  check15 = new Checkbox();
  check16 = new Checkbox();
  check17 = new Checkbox();
  check18 = new Checkbox();
  check19 = new Checkbox();
  check20 = new Checkbox();
  check21 = new Checkbox();
  check22 = new Checkbox();
  check23 = new Checkbox();
  check24 = new Checkbox();
  check25 = new Checkbox();
  check26 = new Checkbox();
  check27 = new Checkbox();
  check28 = new Checkbox();
  check29 = new Checkbox();
  check30 = new Checkbox();
  
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
    cenario();
    menu();
    chamarClientes();
    movimentoGarcon();
    telasMenu();
  } 
  //noLoop();
  
}

