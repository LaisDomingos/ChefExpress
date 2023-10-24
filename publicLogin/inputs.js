/*class Inputs {
    constructor() {
      this.posX = width * 0.4;
      this.posY = height * 0.4;
      this.sizeW = 310;
      this.sizeH = 30;
      this.corText = "white";
      this.tamText = 18;
      this.labelT ="User";
    }
  
    draw_Input(pX, pY,sW,sH, label) {
      this.posX= pX;
      this.posY = pY;
      this.sizeW = sW;
      this.sizeH = sH;
      this.labelT = label;
      push();
        textSize(this.tamText);
        fill(this.corText)
        text(this.labelT, this.posX, this.posY-15)
      pop();
      let input = createInput('');
      input.position(this.posX, this.posY);
      input.size(this.sizeW,this.sizeH);
      input.style('border-radius', '10px');
    }
    
}*/
class Inputs {
    constructor() {
      this.posX = width * 0.4;
      this.posY = height * 0.4;
      this.sizeW = 310;
      this.sizeH = 30;
      this.corText = "white";
      this.tamText = 18;
      this.labelT ="User";
      this.input = null;
    }
  
    draw_Input(pX, pY,sW,sH, label) {
      this.posX= pX;
      this.posY = pY;
      this.sizeW = sW;
      this.sizeH = sH;
      this.labelT = label;
      push();
        textSize(this.tamText);
        fill(this.corText)
        text(this.labelT, this.posX, this.posY-15)
      pop();
      this.input = createInput('');
      this.input.position(this.posX, this.posY);
      this.input.size(this.sizeW,this.sizeH);
      this.input.style('border-radius', '10px');
    }
    destroy_Input() {
      if (this.input) {
          this.input.remove(); // Remova o elemento de entrada
          this.input = null; // Defina a referência do input como nula
      }
    }
  
}

  