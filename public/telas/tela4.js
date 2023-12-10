function tela4Regras() {
    comecarJogar = new Button();
    background('#acefea');
    let textS1 = width/40;
    let textS2 = width/60;
    let textS3 = width/70;
    push();
        fill('#00bdae');
        textSize(textS1);
        text("Bem-vindo ao Chef Express!", width * 0.35, height * 0.15);
        text("Boa sorte e divirta-se!",width * 0.37, height * 0.85);
    pop();
    push();
        fill('#610c06');
        textSize(textS2);
        text("Objetivo do Jogo:", width * 0.1, height * 0.22)
        text("Como jogar:", width * 0.1, height * 0.38)
        text("Dicas:", width * 0.1, height * 0.53)
    pop();
    push();
        fill('black');
        textSize(textS3);
        text("Se torne um chef de sucesso administrando seu próprio restaurante. Atenda clientes, adquira pratos deliciosos e aprimore seu estabelecimento ", width * 0.06, height * 0.27);
        text("para alcançar as posições mais altas no ranking.", width * 0.06, height * 0.32);
        text("O jogo é controlado pelo mouse. Clique nas mesas dos clientes para atendê-los e coletar o pagamento. Gerencie o tempo com habilidade para", width * 0.06, height * 0.43);
        text("evitar clientes insatisfeitos.", width * 0.06, height * 0.48);
        text("Gestão Eficiente do Tempo: Evite clientes insatisfeitos gerenciando o tempo com eficiência. ", width * 0.06, height * 0.58);
        text("Diversifique o Menu: Adquira novos pratos para oferecer variedade e aumentar os ganhos. Troque com outros jogadores para ter.", width * 0.06, height * 0.63);
        text("Contrate Chefs e Ajudantes Habilidosos: Melhore pagamentos e satisfação do cliente contratando chefs experientes. Melhore o atendimento", width * 0.06, height * 0.68);
        text("contratando ajudantes melhores.", width * 0.06, height * 0.73);
    pop();
    
    comecarJogar.draw_Button(200, 30, width*0.49, height*0.92, "Jogar", 20);
}