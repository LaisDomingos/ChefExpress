let avaliacoes1 = [
    "Experiência excelente! Comida deliciosa, atendimento impecável e serviço rápido.",
    "Refeição explosão de sabores! Atendimento atencioso, experiência memorável.",
    "Ótimo restaurante! Comida divina, atendimento cordial e serviço ágil.",
    "Jantar perfeito! Comida excepcional, atendimento amigável e serviço rápido.",
    "Experiência gastronômica incrível! Comida deliciosa, atendimento simpático e eficiente.",
    "Simplesmente maravilhoso! Comida deliciosa, atendimento atencioso e serviço rápido.",
    "Encantado com a experiência! Comida saborosa, atendimento amigável e serviço surpreendente.",
    "Prazer em jantar aqui! Comida divina, atendimento com sorrisos calorosos e rapidez no atendimento.",
    "Experiência cinco estrelas! Comida deliciosa, atendimento amável e rapidez impressionante.",
    "Adorei cada momento! Comida obra-prima, atendimento cortês e rapidez na refeição. Recomendo."
  ]; //Comida boa e atendimento bom
  
  let avaliacoes2 = [
    "Comida deliciosa, atendimento razoável. Experiência positiva pelo sabor incrível.",
    "Gostei da qualidade da comida, atendimento mediano. Poderia ser excelente com mais atenção.",
    "Comida saborosa, mas atendimento precisa melhorar. Espero melhorias para uma experiência completa.",
    "Sabores surpreendentes, mas atendimento desatento. Mais atenção aos clientes seria incrível.",
    "Pratos deliciosos, atendimento um pouco desatento. Espero melhorias para uma experiência completa.",
    "Comida boa, atendimento mediano. Com melhoria na hospitalidade, pode ser um destino imperdível.",
    "Pratos saborosos, atendimento desatento. Boa experiência, com potencial para ser melhor.",
    "Cozinha elogiável, atendimento ponto fraco. Espero equipe dedicada para elevar padrão.",
    "Comida muito saborosa, atendimento regular. Com melhoria na interação, lugar se destacará mais.",
    "Pratos incríveis, atendimento deixou a desejar."
  ]; //Comida boa e atendimento mais ou menos
  
  let avaliacoes3 = [
    "Comida abaixo das expectativas, atendimento excepcional.",
    "Pratos aquém em sabor, atendimento ponto positivo. Equipe atenciosa e prestativa.",
    "Comida não atendeu, atendimento eficiente e cordial proporcionou conforto.",
    "Gastronomia decepcionou, atendimento bastante elogiável.",
    "Sabores negativos, elogio ao atendimento, amigável e atencioso.",
    "Comida abaixo do esperado, atendimento ponto positivo. Equipe dedicada e receptiva.",
    "Pratos não atenderam em sabor, atendimento notavelmente bom. Equipe dedicada e receptiva.",
    "Culinária não esta à altura, mas a equipe fez o possível para garantir experiência positiva.",
    "Comida abaixo das expectativas, atendimento ponto forte.",
    "Experiência não positiva, destaque para atendimento, demonstrando profissionalismo e cortesia."
  ];//Comida ruim e atendimento bom
  
  let avaliacoes4 = [
    "Comida e atendimento abaixo do esperado. Experiência que não atendeu expectativas.",
    "Comida aquém, atendimento insatisfatório. Combinação comprometeu totalmente experiência.",
    "Qualidade da comida e atendimento muito abaixo. Não pretendo repetir.",
    "Comida pouco apetitosa e atendimento desinteressado. Não recomendaria.",
    "Experiência negativa, tanto na qualidade da comida quanto no atendimento.",
    "Comida abaixo do esperado em sabor, atendimento desatento. Necessita melhorias para se destacar.",
    "Pratos não atenderam em sabor, atendimento abaixo. Experiência que não correspondeu às expectativas.",
    "Culinária questionável, atendimento deixou a desejar. Experiência com impressão negativa.",
    "Comida aquém, atendimento pouco acolhedor. Experiência sem prazer gastronômico.",
    "Comida insatisfatória, atendimento pouco acolhedor. "
  ];//Comida ruim e atendimento ruim
  
let comentarios;
let estrela;

function avaliacao(){
    if (qtdPrato <= 10 && tempoRestaurante <=25 ){
        comentarios = random(avaliacoes3);
        estrela = 2;
    } else if (qtdPrato <= 10 && tempoRestaurante > 25 ) {
        comentarios = random(avaliacoes4);
        estrela = 0;
    } else if (qtdPrato > 10 && tempoRestaurante <=25){
        comentarios = random(avaliacoes1);
        estrela = 5;
    } else {
        comentarios = random(avaliacoes2);
        estrela = 4;
    }
    postavaliacao(estrela, comentarios);
}

function janelaAvaliacoes() {
    push();
    fill('#acefea');
    rect(width * 0.1, height * 0.02, width * 0.7, height * 0.9);
    fecharAvaliacoes.draw_ButtonFechar(width * 0.8, height * 0.03);
    pop();
  
    push();
    fill('black');
    textSize(20);
    text('Últimas Avaliações:', width * 0.20, height * 0.14);
    pop();
  
    // Posição inicial para exibir as avaliações
    let x = width * 0.15;
    let y = height * 0.2;
  
    // Espaçamento vertical entre as avaliações
    const spacing = 50;
  
    // Itera sobre as avaliações e as exibe
    for (let i = 0; i < avaliacoes.length; i++) {
      const estrelas = avaliacoes[i].estrelas;
      const comentarios = avaliacoes[i].comentarios;
  
      // Exibe estrelas
      push();
      fill('black');
      textSize(14);
      text('Estrelas: ' + estrelas, x, y + i * spacing);
      pop();
  
      // Exibe comentários
      push();
      fill('black');
      textSize(14);
      text('Comentários: ' + comentarios, x + 110, y + i * spacing);
      pop();
    }
  }
  

function telaAvaliacoes() {
    mostrarTelaAvaliacoes = true;
}
  