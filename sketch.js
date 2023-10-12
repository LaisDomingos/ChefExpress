let piso;
let barra;
let escada;
let menuImg;
let lixo;

let mesa1 = false;
let mesa2 = false;
let mesa3 = false;
let mesa4 = false;
let mesa5 = false;
let mesa6 = false;
let mesa7 = false;
let mesa8 = false;

let mesasImagens = [];
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

let garconImagens = [];
let clientes = [];
let pratosIniciais = [];

let listaPedido;
let xGarcon;
let yGarcon;

let mesa12X;
let mesa34X;
let mesa56X;
let mesa78X;
let mesa1357Y;
let mesa2468Y;

let imagensPedido;


function setup() {
  createCanvas(windowWidth, windowHeight);
  xGarcon = width*0.52;
  yGarcon = height*0.3;

  mesa12X = width*0.25;
  mesa34X = width*0.4;
  mesa56X = width*0.6;
  mesa78X = width*0.75;
  mesa1357Y = height*0.45;
  mesa2468Y = height*0.1;

  
  setInterval(gerarCliente, 4000);
}
  
function draw() {
  background(piso);   
  cenario();
  menu();
  chamarClientes();
  movimentoGarcon();

  /*image(pratosIniciais[0], width * 0.15, height * 0.85, width/30, height/20);
  image(pratosIniciais[1], width * 0.2, height * 0.85, width/30, height/20);
  image(pratosIniciais[2], width * 0.25, height * 0.85, width/30, height/20);
  image(pratosIniciais[3], width * 0.3, height * 0.85, width/30, height/20);
  image(pratosIniciais[4], width * 0.35, height * 0.85, width/30, height/20);
  image(pratosIniciais[5], width * 0.4, height * 0.85, width/30, height/20);
  image(pratosIniciais[0], width * 0.45, height * 0.85, width/30, height/20);
  image(pratosIniciais[1], width * 0.5, height * 0.85, width/30, height/20);
  image(pratosIniciais[2], width * 0.55, height * 0.85, width/30, height/20);
  image(pratosIniciais[3], width * 0.6, height * 0.85, width/30, height/20);
  image(pratosIniciais[4], width * 0.65, height * 0.85, width/30, height/20);
  image(pratosIniciais[5], width * 0.7, height * 0.85, width/30, height/20);
  image(pratosIniciais[0], width * 0.75, height * 0.85, width/30, height/20);
  image(pratosIniciais[1], width * 0.8, height * 0.85, width/30, height/20);*/
}
