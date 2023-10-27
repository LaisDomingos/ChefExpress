let registrado = false;
let senhasNao = false;
let camposPreencherRegistro = false;
let nomeExiste = false;

function tela3Registro() {
    registradoText = new MensagemDB();
    senhasNaoText = new MensagemDB();
    camposPreencherRegistroText = new MensagemDB();
    nomeExisteText = new MensagemDB();

    background('black');
    image(title, width * 0.32, height * 0.1, width / 3, height / 5);
    userR.draw_Input(width * 0.37, height * 0.402, "User:");
    email.draw_Input(width * 0.37, height * 0.502, "Email:");
    passR.draw_Input(width * 0.37, height * 0.602, "Password:");
    passConf.draw_Input(width * 0.37, height * 0.702, "Confirm Password:");
    
    registrar.draw_Button(200, 30, width * 0.485, height * 0.82, "Registrar", 20);

    buttonVoltar2.draw_ButtonVoltar();

    if(registrado){
        registradoText.draw_Text("Registro bem-sucedido. Volte e faça o login!")
    } else if (senhasNao){
        senhasNaoText.corText='red';
        senhasNaoText.draw_Text("As senhas não coincidem.");
    } else if (camposPreencherRegistro){
        camposPreencherRegistroText.corText='red';
        camposPreencherRegistroText.draw_Text("Preencha todos os campos!");
    } else if (nomeExiste){
        nomeExisteText.corText='red';
        nomeExisteText.draw_Text("Já existe um jogador com esse usuário. Troque o nome!");
    }
}
function destruirInputs3(){
    userR.destroy_Input();
    email.destroy_Input();
    passR.destroy_Input(); 
    passConf.destroy_Input();
}

function criarInputs3(){
    userR = new Inputs();
    email = new Inputs();
    passR = new Inputs();
    passConf = new Inputs();
}