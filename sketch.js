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

let mostrarMenu = false;
let mostrarTelaFuncionarios = false;
let mostrarTelaPratos = false;

let imgTelaFuncionarios;

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

  fecharFuncionarios = new ButtonFechar();
  fecharPratos = new ButtonFechar();
  
  setInterval(gerarCliente, 4000);
}
  
function draw() {
  background(piso);   
  cenario();
  menu();
  chamarClientes();
  movimentoGarcon();
  telasMenu();
  
}


function mousePressed() {
  if (isMouseOver && mostrarMenu) {
    if (mouseX > width * 0.91 && mouseX < width * 0.91 + width / 16 && mouseY > height * 0.32 && mouseY < height * 0.32 + height / 5.5) {
      telaFuncionarios();
      mostrarTelaPratos = false;
    } else if(mouseX > width * 0.91 && mouseX < width * 0.91 + width / 15.2 && mouseY > height * 0.6 && mouseY < height * 0.6 + height / 11){
      telaPratos();
      mostrarTelaFuncionarios = false;
    }
  }
  if (fecharFuncionarios.on_Click(mouseX, mouseY) && mostrarTelaFuncionarios) {
    console.log("fechar funcionários");
    mostrarTelaFuncionarios = false;
  }
  if (fecharPratos.on_Click(mouseX, mouseY) && mostrarTelaPratos) {
    console.log("fechar pratos");
    mostrarTelaPratos = false;
  }
}
