let data;

function janelaRanking(){
  fill('#acefea');
  rect(width*0.1, height*0.02, width*0.77, height*0.9);
  fecharRanking.draw_ButtonFechar(width*0.87, height*0.05);
  push();
  fill('black');
  textSize(20);
  text('Ranking dos 10 restaurantes mais bem avalidados' , width*0.20, height*0.14);
pop();
  push();
    // Verificar se os dados foram carregados
    if (data) {
      // Definir as posições iniciais para a tabela
      let x = width * 0.4;
      let y = height * 0.25;

      // Definir a largura e a altura das células
      const cellWidth = 150;
      const cellHeight = 30;

      // Desenhar o cabeçalho da tabela
      fill('#acefea');
      textAlign(CENTER, CENTER);
      textSize(16);
      
      push();
      textSize(18);
      fill('blue')
      text("Usuário", width * 0.45, height * 0.25);
      text("Média - Avaliação", width * 0.45 + cellWidth, height * 0.25);
      pop();
      // Desenhar os dados na tabela
      for (let i = 0; i < data.length; i++) {
        y += cellHeight;

        fill('#acefea');
        rect(x, y, cellWidth, cellHeight); // Célula para o nome
        rect(x + cellWidth, y, cellWidth, cellHeight); // Célula para o dinheiro

        fill(0);
        textAlign(CENTER, CENTER);
        text(data[i].nome, x + cellWidth / 2, y + cellHeight / 2);
        text(data[i].dinheiro, x + 3 * cellWidth / 2, y + cellHeight / 2);
      }
    }
  pop(); 
}

function telaRanking() {
  mostrarTelaRanking = true;
}

function gotData(serverData) {
  // Armazenar os dados recebidos do servidor
  data = serverData;
}