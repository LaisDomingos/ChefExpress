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
    if(login.on_Click(mouseX,mouseY)){
      let userValue = user.input.value();
      let passValue = pass.input.value();
      if (userValue && passValue ) {
        let dataToSend = {
          userValue: userValue,
          passValue: passValue
        };

        httpPost('/postLogin', dataToSend, 'json', (data) => {
          console.log(data);
        });
        console.log("Acessar!");
      } else {
        console.log("Preencha todos os campos.");
      }
    }
  }
  if(tela == 3){
    if(buttonVoltar2.on_ClickVoltar(mouseX,mouseY)){
      tela = 2;
    }
    if (tela == 3) {
      if (buttonVoltar2.on_ClickVoltar(mouseX, mouseY)) {
        tela = 2;
      } 
      if (registrar.on_Click(mouseX, mouseY)) {
        let userRValue = userR.input.value();
        let emailValue = email.input.value();
        let passRValue = passR.input.value();
        let passConfValue = passConf.input.value();
    
        // Verifique se todos os campos estão preenchidos
        if (userRValue && emailValue && passRValue && passConfValue) {
          // Verifique se passRValue é igual a passConfValue
          if (passRValue === passConfValue) {
            // Se todas as verificações passarem, faça a solicitação POST para o servidor
            let dataToSend = {
              userRValue: userRValue,
              emailValue: emailValue,
              passRValue: passRValue
            };
    
            httpPost('/postRegistrar', dataToSend, 'json', (data) => {
              console.log(data);
            });
            console.log("Usuário registrado!");
          } else {
            console.log("As senhas não coincidem.");
          }
        } else {
            console.log("Preencha todos os campos.");
        }
      }
    }
  }    
  
}

