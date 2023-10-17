let tela = 2;

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
}

function draw() {
  if (tela == 1){
    tela1()
  } else if (tela == 2){
    tela2();
  }
}


function mousePressed() {
  if (start.on_Click(mouseX, mouseY) && tela == 1) {
    tela = 2;
    console.log("2")
  } 
  
}

