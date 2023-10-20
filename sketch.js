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

let imgTelaFuncionarios=[];

let contratarChef1 = false;
let contratarChef2 = false;
let contratarChef3 = false;
let contratarChef4 = false;

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
  if(mostrarTelaFuncionarios){
    if (fecharFuncionarios.on_Click(mouseX, mouseY)) {
      console.log("fechar funcionários");
      mostrarTelaFuncionarios = false;
    }
    if (addChef1.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "#066315";
      addChef2.corBt = "blue";
      addChef3.corBt = "blue";
      addChef4.corBt = "blue";
    } else if (addChef2.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "#066315";
      addChef3.corBt = "blue";
      addChef4.corBt = "blue";
    } else if (addChef3.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "blue";
      addChef3.corBt = "#066315";
      addChef4.corBt = "blue";
    } else  if (addChef4.on_Click(mouseX, mouseY)) {
      addChef1.corBt = "blue";
      addChef2.corBt = "blue";
      addChef3.corBt = "blue";
      addChef4.corBt = "#066315";
    }
    if (addAjudante1.on_Click(mouseX, mouseY)) {
      addAjudante1.corBt = "#066315";
    } else if (addAjudante2.on_Click(mouseX, mouseY)) {
      addAjudante2.corBt = "#066315";
    } else if (addAjudante3.on_Click(mouseX, mouseY)) {
      addAjudante3.corBt = "#066315";
    } else  if (addAjudante4.on_Click(mouseX, mouseY)) {
      addAjudante4.corBt = "#066315";
    }
  }
  
  if (fecharPratos.on_Click(mouseX, mouseY) && mostrarTelaPratos) {
    console.log("fechar pratos");
    mostrarTelaPratos = false;
    check1.destroy_checkbox();
    check2.destroy_checkbox();
    check3.destroy_checkbox();
    check4.destroy_checkbox();
    check5.destroy_checkbox();
    check6.destroy_checkbox();
    check7.destroy_checkbox();
    check8.destroy_checkbox();
    check9.destroy_checkbox();
    check10.destroy_checkbox();
    check11.destroy_checkbox();
    check12.destroy_checkbox();
    check13.destroy_checkbox();
    check14.destroy_checkbox();
    check15.destroy_checkbox();
    check16.destroy_checkbox();
    check17.destroy_checkbox();
    check18.destroy_checkbox();
    check19.destroy_checkbox();
    check20.destroy_checkbox();
    check21.destroy_checkbox();
    check22.destroy_checkbox();
    check23.destroy_checkbox();
    check24.destroy_checkbox();
    check25.destroy_checkbox();
    check26.destroy_checkbox();
    check27.destroy_checkbox();
    check28.destroy_checkbox();
    check29.destroy_checkbox();
    check30.destroy_checkbox();
  }
  
}
