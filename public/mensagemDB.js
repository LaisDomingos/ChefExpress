class MensagemDB{
    constructor() {
        this.posX = width * 0.34;
        this.posY = height * 0.9;
        this.corText = "#04ba0a";
        this.tamText = 20;
        this.text = "Registro bem-sucedido. Volte e faça o login!";
    }
  
    draw_Text(mensagem) {
        this.text = mensagem;
        push();
        textSize(this.tamText);
        fill(this.corText);
        text(this.text, this.posX, this.posY);
        pop();
    }
}