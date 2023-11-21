let data;

function janelaRanking(){
  fill('#acefea');
  rect(width*0.1, height*0.02, width*0.77, height*0.9);
  fecharRanking.draw_ButtonFechar(width*0.87, height*0.05);
  push();
  fill('black');
  textSize(25);
  text('Ranking' , width*0.12, height*0.1);
  textSize(15);
  text('Ranking dos 10 jogadores mais ricos' , width*0.12, height*0.2);
pop();
  push();
    // Verificar se os dados foram carregados
    if (data) {
      // Definir as posições iniciais para a tabela
      let x = 720;
      let y = 200;

      // Definir a largura e a altura das células
      const cellWidth = 150;
      const cellHeight = 30;

      // Desenhar o cabeçalho da tabela
      fill('#acefea');
      textAlign(CENTER, CENTER);
      textSize(16);
      
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