class Checkbox {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.checked = false; //Salvar o estado do Checkbox
        this.checkbox = null;
    }

    draw_checkbox(pX, pY) {
        this.x = pX;
        this.y = pY;

        if (!this.checkbox) {
            this.checkbox = createCheckbox();
            this.checkbox.position(this.x, this.y);
            this.checkbox.checked(this.checked); // Define o estado do Checkbox
            this.checkbox.changed(this.checkboxChanged.bind(this));
        }
    }

    checkboxChanged() {
        this.checked = this.checkbox.checked(); // Salva o estado do Checkbox
        console.log("Checkbox marcado:", this.checked);
    }

    destroy_checkbox() {
        if (this.checkbox) {
            this.checked = this.checkbox.checked(); // Salva o estado do Checkbox antes de destruí-lo
            this.checkbox.remove();
            this.checkbox = null;
        }
    }
}
