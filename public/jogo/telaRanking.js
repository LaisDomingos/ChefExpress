let data;

function janelaRanking(){
  let textS1 = width/70;
  let textS2 = width/82;
  let textS3 = width/75;
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
      let x = width * 0.37;
      let y = height * 0.26;

      // Definir a largura e a altura das células
      const cellWidth = 150;
      const cellHeight = 30;

      let imgEstrelaC;

      // Desenhar o cabeçalho da tabela
      fill('#acefea');
      textAlign(CENTER, CENTER);
      textSize(textS2);
      
      push();
      textSize(textS3);
      fill('blue')
      text("Usuário", width * 0.4, height * 0.25);
      text("Média - Avaliação", width * 0.4 + cellWidth, height * 0.25);
      text("Dinheiro", width * 0.4 + 2 * cellWidth, height * 0.25);
      pop();
      // Desenhar os dados na tabela
      for (let i = 0; i < data.length; i++) {
        y += cellHeight;

        fill('#acefea');
        rect(x, y, cellWidth, cellHeight); // Célula para o nome
        rect(x + cellWidth, y, cellWidth, cellHeight); // Célula para o avaliação
        rect(x + 2 * cellWidth, y, cellWidth, cellHeight); // Célula para o dinheiro
        
        if (data[i].avaliacao === 0){
          imgEstrelaC = imgEstrela[0];
        } else if (data[i].avaliacao === 1){
          imgEstrelaC = imgEstrela[1];
        } else if (data[i].avaliacao === 2){
          imgEstrelaC = imgEstrela[2];
        } else if (data[i].avaliacao === 3){
          imgEstrelaC = imgEstrela[3];
        } else if (data[i].avaliacao === 4){
          imgEstrelaC = imgEstrela[4];
        } else if (data[i].avaliacao === 5){
          imgEstrelaC = imgEstrela[5];
        }

        fill(0);
        textAlign(CENTER, CENTER);
        text(data[i].nome, x + cellWidth / 2, y + cellHeight / 2);
        
        let imgX = x + cellWidth + (cellWidth - width / 15) / 2; // Ajuste para centralizar horizontalmente
        let imgY = y + (cellHeight - height / 25) / 2; 
        image(imgEstrelaC, imgX, imgY, width/15, height/25);
        text(data[i].dinheiro, x + 5 * cellWidth / 2, y + cellHeight / 2); 
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