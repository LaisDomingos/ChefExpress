class ButtonFechar {
    constructor() {
      this.centroX = width * 0.5;
      this.centroY = height * 0.85;
      this.raio = 25;
      this.corBt = "red";
      this.tamTexto = 15;
      this.corTexto = "white";
      this.conteudo ="X";
    }
  
    draw_ButtonFechar(x, y) {
      this.centroX= x;
      this.centroY = y;
      push();
      fill(this.corBt);
      circle(this.centroX, this.centroY, this.raio);
      textAlign(CENTER, CENTER);
      textSize(this.tamTexto);
      fill(this.corTexto);
      text(this.conteudo, this.centroX, this.centroY);
      pop();
    }
    
    on_Click(x, y) {
        const distancia = dist(x, y, this.centroX, this.centroY);
        if (distancia < this.raio) {
            return true;
          } else {
            return false;
          }
    }
    
}
  