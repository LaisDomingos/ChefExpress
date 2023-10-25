let registroBemSucedido = false;
function tela3Registro() {
    background('black');
    image(title, width * 0.32, height * 0.1, width / 3, height / 5);

    userR.draw_Input(width * 0.37, height * 0.4, "User:");
    email.draw_Input(width * 0.37, height * 0.5, "Email:");
    passR.draw_Input(width * 0.37, height * 0.6, "Password:");
    passConf.draw_Input(width * 0.37, height * 0.7, "Confirm Password:");
    
    registrar.draw_Button(200, 50, width * 0.485, height * 0.82, "Registrar", 20);

    buttonVoltar2.draw_ButtonVoltar();

}

