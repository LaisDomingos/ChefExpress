function tela1(){
    background('black');
    image(imgLogo, width*0.32, height*0.1, width/3, height/1.5);
    start.draw_Button(width*0.5, height*0.85, "Start");
}

function tela2(){
    background('black');
    image(title, width*0.35, height*0.1, width/3, height/5);
    user.draw_Input(width * 0.2, height * 0.4, 310, 20, "User:");
    pass.draw_Input(width * 0.2, height * 0.55, 310, 20, "Password:");
    login.draw_Button(width*0.32, height*0.7, "Login");

    user.draw_Input(width * 0.6, height * 0.4, 310, 20, "User:");
    email.draw_Input(width * 0.6, height * 0.5, 310, 20, "Email:");
    pass.draw_Input(width * 0.6, height * 0.6, 310, 20, "Password:");
    passConf.draw_Input(width * 0.6, height * 0.7, 310, 20, "Confirm Password:");
    registrar.draw_Button(width*0.72, height*0.82, "Registrar");
    
}

