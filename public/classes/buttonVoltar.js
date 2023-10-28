class ButtonVoltar {
    constructor() {
        this.circleX = width * 0.04;
        this.circleY = height * 0.1;
        this.raio = width*0.03;
        this.rectX = width * 0.035;
        this.rectY = height * 0.0925;
        this.largura = width/70;
        this.altura = height/80;
        this.trianX1 = this.rectX + 6 ;
        this.trianY1 = this.rectY - 2;
        this.trianX2 = this.rectX + 6;
        this.trianY2 = this.rectY + this.altura + 3;
        this.trianX3 = this.rectX - 7;
        this.trianY3 = this.rectY +  4;
        
        this.corCircle = "blue";
        this.corSeta ="white";
      }
    
      draw_ButtonVoltar() {
        push();
        noStroke();
        fill(this.corCircle);
        circle(this.circleX, this.circleY, this.raio);
        pop();
        push();
        noStroke();
        fill(this.corSeta);
        rect(this.rectX, this.rectY,this.largura, this.altura);
        triangle(this.trianX1, this.trianY1, this.trianX2, this.trianY2, this.trianX3, this.trianY3);
        pop();
      }

      on_ClickVoltar(x, y) {
        // Calcula a distância entre (x, y) e o centro do círculo
        let distancia = dist(x, y, this.circleX, this.circleY);
    
        // Se a distância for menor ou igual ao raio do círculo, o ponto está dentro do círculo
        if (distancia <= this.raio) {
          return true;
        } else {
          return false;
        }
      }
}