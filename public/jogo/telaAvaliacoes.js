let avaliacoes1 = [
    "Experiência excelente! Comida deliciosa, atendimento impecável.",
    "Refeição saborosa! Atendimento atencioso, experiência memorável.",
    "Ótimo restaurante! Comida divina, atendimento cordial e ágil.",
    "Jantar perfeito! Comida excepcional, atendimento amigável e rápido.",
    "Experiência gastronômica incrível! Atendimento simpático e eficiente.",
    "Simplesmente maravilhoso! Comida deliciosa, atendimento atencioso.",
    "Encantado com a experiência! Comida saborosa, serviço surpreendente.",
    "Prazer em jantar aqui! Comida divina, atendimento calorosos.",
    "Experiência cinco estrelas! Comida e atendimento perfeito.",
    "Adorei cada momento! Recomendo."
  ]; //Comida boa e atendimento bom
  
  let avaliacoes2 = [
    "Comida deliciosa, atendimento razoável.",
    "Gostei da qualidade da comida, atendimento mediano.",
    "Comida saborosa, mas atendimento precisa melhorar.",
    "Sabores surpreendentes, mas atendimento desatento. ",
    "Pratos deliciosos, atendimento um pouco desatento.",
    "Comida boa, atendimento ruim;",
    "Pratos saborosos, mas o atendimento precisa melhorar.",
    "Cozinha elogiável, atendimento é ponto fraco.",
    "Comida muito saborosa, atendimento lento.",
    "Pratos incríveis, mas atendimento deixou a desejar."
  ]; //Comida boa e atendimento mais ou menos
  
  let avaliacoes3 = [
    "Comida abaixo das expectativas, atendimento excepcional.",
    "Pratos mais ou menos, atendimento é ponto positivo.",
    "Atendimento eficiente, mas a comida ficou a desejar.",
    "Gastronomia decepcionou, mas o atendimento bastante elogiável.",
    "Sabores negativos, elogio ao atendimento, amigável e atencioso.",
    "Comida abaixo do esperado, mas a equipe é dedicada e receptiva.",
    "Pratos não atenderam no sabor, atendimento notavelmente bom.",
    "Culinária ruim, mas a equipe fez o possível para garantir experiência.",
    "Comida abaixo das expectativas, atendimento ponto forte.",
    "Experiência negativa, destaque para atendimento."
  ];//Comida ruim e atendimento bom
  
  let avaliacoes4 = [
    "Comida e atendimento abaixo do esperado.",
    "Comida ruim, atendimento insatisfatório.",
    "Qualidade da comida e atendimento muito abaixo.",
    "Comida pouco apetitosa e atendimento desinteressado.",
    "Experiência negativa, não recomendo.",
    "Comida abaixo do esperado em sabor, atendimento desatento.",
    "Pratos não atenderam em sabor, atendimento ruim.",
    "Culinária questionável, atendimento deixou a desejar. Experiência negativa.",
    "Comida ruim, atendimento pouco acolhedor. Experiência sem prazer gastronômico.",
    "Comida insatisfatória, atendimento pouco acolhedor. "
  ];//Comida ruim e atendimento ruim
  
let comentarios;
let estrela;
let imgEstrela = [];

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
  let textS1 = width/70;
  let textS2 = width/85;
    push();
    fill('#acefea');
    rect(width * 0.1, height * 0.02, width * 0.7, height * 0.9);
    fecharAvaliacoes.draw_ButtonFechar(width * 0.8, height * 0.03);
    pop();
  
    push();
    fill('black');
    textSize(textS1);
    text('Últimas Avaliações:', width * 0.20, height * 0.14);
    pop();
  
   
    // Posição inicial para exibir as avaliações
    let x = width * 0.15;
    let y = height * 0.2;
  
    let xImg = width * 0.14;
    let yImg = height * 0.16;
    // Espaçamento vertical entre as avaliações
    const spacing = 50;
    let imgEstrelaC;
    // Itera sobre as avaliações e as exibe
    for (let i = 0; i < avaliacoes.length; i++) {
      const estrelas = avaliacoes[i].estrelas;
      const comentarios = avaliacoes[i].comentarios;

      if (estrelas === 0){
        imgEstrelaC = imgEstrela[0];
      } else if (estrelas === 1){
        imgEstrelaC = imgEstrela[1];
      } else if (estrelas === 2){
        imgEstrelaC = imgEstrela[2];
      } else if (estrelas === 3){
        imgEstrelaC = imgEstrela[3];
      } else if (estrelas === 4){
        imgEstrelaC = imgEstrela[4];
      } else if (estrelas === 5){
        imgEstrelaC = imgEstrela[5];
      }
      // Exibe estrelas
      push();
      fill('black');
      image(imgEstrelaC,xImg, yImg + i * spacing,  width/11, height/15);
      pop();
  
      // Exibe comentários
      push();
      fill('black');
      textSize(textS2);
      text('Comentários: ' + comentarios, x + 110, y + i * spacing);
      pop();
    }
  }
  

function telaAvaliacoes() {
    mostrarTelaAvaliacoes = true;
}

// Função para calcular a média das avaliações
function mediaAvaliacao() {
  let totalEstrelas = 0;

  // Iterar sobre as avaliações e somar as estrelas
  for (let i = 0; i < avaliacoes.length; i++) {
    totalEstrelas += avaliacoes[i].estrelas;
  }

  // Calcular a média das estrelas
  const media = totalEstrelas/avaliacoes.length;

  postMediaAvaliacao(media);
  
  loop();
}
  