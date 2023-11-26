class Inputs {
  constructor() {
      this.posX = width * 0.4;
      this.posY = height * 0.4;
      this.sizeW = 310;
      this.sizeH = 30;
      this.corText = "#00bdae";
      this.tamText = 18;
      this.labelT = "User";
      this.input = createInput('');
      this.input.size(this.sizeW, this.sizeH);
      this.input.style('border-radius', '10px');
  }

  draw_Input(x, y, label) {
      this.posX = x;
      this.posY = y;
      this.labelT = label;
      this.input.position(this.posX, this.posY);
      push();
      textSize(this.tamText);
      fill(this.corText);
      text(this.labelT, this.posX, this.posY - 15);
      pop();
  }

  destroy_Input() {
    if (this.input) {
        this.input.remove();
        this.input = null;
    }
  }
}

class InputTrade {
  constructor() {
      this.posX = width * 0.4;
      this.posY = height * 0.4;
      this.sizeW = 220;
      this.sizeH = 20;
      this.corText = "#00bdae";
      this.tamText = 18;
      this.labelT = "User";
      this.input = createInput('');
      this.input.size(this.sizeW, this.sizeH);
      this.input.style('border-radius', '10px');
  }

  draw_Input(x, y, label) {
      this.posX = x;
      this.posY = y;
      this.labelT = label;
      this.input.position(this.posX, this.posY);
      push();
      textSize(this.tamText);
      fill(this.corText);
      text(this.labelT, this.posX, this.posY - 15);
      pop();
  }

  value() {
    return this.input.value();
  }

  destroy_Input() {
    if (this.input) {
        this.input.remove();
        this.input = null;
    }
  }
}