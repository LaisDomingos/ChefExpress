let usuarioInexistente = false;
let camposPreencherLogin = false;
let senhaErrada = false;
let loginSucesso = false;

function tela2Login(){
    usuarioInexistenteText = new MensagemDB();
    camposPreencherLoginText = new MensagemDB();
    senhaErradaText = new MensagemDB();
    loginSucessoText = new MensagemDB();

    background('black');
    image(title, width*0.32, height*0.1, width/3, height/5);
    user.draw_Input(width * 0.37, height * 0.4, "User:");
    pass.draw_Input(width * 0.37, height * 0.55, "Password:");
   
    login.draw_Button(200, 30, width*0.485, height*0.7, "Login", 20);
    push();
        fill('white');
        textSize(15);
        text("Ainda não tem uma conta?", width * 0.38, height * 0.8)
    pop();
    push();
        fill('blue');
        textSize(15);
        textStyle(BOLD);
        text("Registrar", width * 0.53, height * 0.8)
    pop();

    buttonVoltar1.draw_ButtonVoltar();

    if(usuarioInexistente){
        usuarioInexistenteText.corText = 'red';
        usuarioInexistenteText.draw_Text("Usuário errado");
    } else if (camposPreencherLogin){
        camposPreencherLoginText.corText='red';
        camposPreencherLoginText.draw_Text("Preencha todos os campos!");
    } else if (senhaErrada){
        senhaErradaText.corText='red';
        senhaErradaText.draw_Text("Senha incorreta");
    } else if (loginSucesso){
        loginSucessoText.draw_Text("Login bem-sucedido");
    }
}

function destruirInputs2(){
    user.destroy_Input();
    pass.destroy_Input();
}

function criarInputs2(){
    user = new Inputs();
    pass = new Inputs();
}