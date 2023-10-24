let tela = 1;

let imgLogo;
let title;

function preload(){
  imgLogo = loadImage('imagens/logoJogo.png');
  title = loadImage('imagens/title.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  start = new Button();
  user = new Inputs();
  pass = new Inputs();
  login = new Button();
  userR = new Inputs();
  email = new Inputs();
  passR = new Inputs();
  passConf = new Inputs();
  registrar = new Button();
  buttonVoltar1 = new ButtonVoltar();
  buttonVoltar2 = new ButtonVoltar();
}

function draw() {
  if (tela == 1){
    tela1()
  } else if (tela == 2){
    tela2Login();
  } else if (tela == 3){
    tela3Registro();
  }
}


function mousePressed() {
  if (start.on_Click(mouseX, mouseY) && tela == 1) {
    tela = 2;
  } 
  if (tela == 2){
    if (mouseX > width * 0.53 && mouseX < width * 0.53 + 70 && mouseY > height * 0.77 && mouseY < height * 0.77 + 30) {
      tela = 3;
    } 
    if(buttonVoltar1.on_ClickVoltar(mouseX,mouseY)){
      tela = 1;
    }
  }
  if(buttonVoltar2.on_ClickVoltar(mouseX,mouseY) && tela == 3){
    tela = 2;
  }
}

