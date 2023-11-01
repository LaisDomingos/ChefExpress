class Button {
    constructor() {
      this.centroX = width * 0.5;
      this.centroY = height * 0.85;
      this.largura = 200;
      this.altura = 50;
      this.corBt = "blue";
      this.tamTexto = 20;
      this.corTexto = "white";
      this.conteudo ="Start";
    }
  
    draw_Button(l,a,x, y, texto, tamt) {
      this.largura = l;
      this.altura = a;
      this.centroX= x;
      this.centroY = y;
      this.conteudo = texto;
      this.tamTexto = tamt;
      push();
      rectMode(CENTER);
      fill(this.corBt);
      rect(this.centroX, this.centroY, this.largura, this.altura, 10);
      textAlign(CENTER, CENTER);
      textSize(this.tamTexto);
      fill(this.corTexto);
      text(this.conteudo, this.centroX, this.centroY);
      pop();
    }
    
    on_Click(x,y){
      if (
      x > this.centroX - this.largura / 2 &&
      x < this.centroX + this.largura / 2 &&
      y > this.centroY - this.altura / 2 &&
      y < this.centroY + this.altura / 2
    ) {
      return true;
    } else {
      return false;
    }
    }
}