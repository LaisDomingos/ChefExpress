function tela2Login(){
    background('black');
    image(title, width*0.32, height*0.1, width/3, height/5);
    user.draw_Input(width * 0.37, height * 0.4, 310, 20, "User:");
    pass.draw_Input(width * 0.37, height * 0.55, 310, 20, "Password:");
    login.draw_Button(200, 50, width*0.485, height*0.7, "Login", 20);
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
}