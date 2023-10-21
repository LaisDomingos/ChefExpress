function tela3Registro(){
    background('black');
    image(title, width*0.32, height*0.1, width/3, height/5);
    user.draw_Input(width * 0.37, height * 0.4, 310, 20, "User:");
    email.draw_Input(width * 0.37, height * 0.5, 310, 20, "Email:");
    pass.draw_Input(width * 0.37, height * 0.6, 310, 20, "Password:");
    passConf.draw_Input(width * 0.37, height * 0.7, 310, 20, "Confirm Password:");
    registrar.draw_Button(200, 50, width*0.485, height*0.82, "Registrar", 20);
}