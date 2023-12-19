function janelaTrocas() {
  let textS1 = width / 70;
  let textS2 = width / 85;
  push();
  fill('#acefea');
  rect(width * 0.1, height * 0.02, width * 0.7, height * 0.9);
  fecharTrocas.draw_ButtonFechar(width * 0.8, height * 0.03);
  pop();

  push();
  fill('black');
  textSize(textS1);
  text('Usuários para trocas:', width * 0.20, height * 0.14);
  pop();

  let x = width * 0.22; // Iniciando em width*0.15
  let y = height * 0.3;

  const spacingX = 150;
  const spacingY = 50;
  const elementsPerRow = 5; // Número de elementos por linha

  for (let i = 0; i < usersTrocas.length; i++) {
    let users = usersTrocas[i].nome;
    let idUsers = usersTrocas[i].id;
    let row = floor(i / elementsPerRow); // Calcula a linha atual
    
    let button = new Button();
    button.draw_Button(100, 40, x + (i % elementsPerRow) * spacingX, y + row * spacingY, users, textS2);
    if (button.on_Click(mouseX, mouseY) && mouseIsPressed) {
      console.log(idUsers);
    }
  }
}


/*function destruirInputs4(){
  myUserIdInput.destroy_Input();
    otherUserIdInput.destroy_Input();
    yourPratoIdInput.destroy_Input(); 
    otherUserPratoIdInput.destroy_Input();
}

function criarInputs4(){ 
    myUserIdInput = new InputTrade();
    otherUserIdInput = new InputTrade();
    yourPratoIdInput  = new InputTrade();
    otherUserPratoIdInput = new InputTrade();
}


function findOtherUser() {
    let data = {
      "idUser": otherUserIdInput.value(),
    };
  
    // Envie uma solicitação para verificar o inventário do usuário
    httpPost('/checkUser', data, 'json', (respostaServidor) => {
      // Não exibir o inventário diretamente aqui, você pode apenas realizar verificações ou tomar decisões com base na resposta
      if (respostaServidor.ack === 1) {
        console.log("Usuário encontrado. Agora você pode prosseguir.");
        // Aqui, você pode realizar ações adicionais se necessário
      } else {
        console.log("Usuário não encontrado ou inventário vazio.");
      }
    });
}

function performTrade() {  
  
    if (!yourPratoIdInput || !otherUserPratoIdInput) {
      console.log("Insira IDs válidos para os itens.");
      return;
    }
  
    let data = {
      "user1Id": myUserIdInput.value(),
      "user2Id": otherUserIdInput.value(),
      "prato1Id": yourPratoIdInput.value(),
      "prato2Id": otherUserPratoIdInput.value(),
    };
  
    httpPost('/tradeItems', data, 'json', (respostaServidor) => {
  
      if (respostaServidor.ack === 1) {
        console.log("Troca de itens efetuada com sucesso!");
      } else {
        console.log("Erro ao efetuar troca de itens.");
      }
    });
} 
/*function janelaTrocas() {
  let textS1 = width/70;
  let textS2 = width/85;
    push();
    fill('#acefea');
    rect(width*0.1, height*0.02, width*0.7, height*0.9);
    fecharTrocas.draw_ButtonFechar(width*0.8, height*0.03);
    pop();
  
    push();
    fill('black');
    textSize(textS1);
    text('Usuários para trocas:', width * 0.20, height * 0.14);
    pop();
  
   
    // Posição inicial para exibir as avaliações
    let x = width * 0.15;
    let y = height * 0.2;
  
    // Espaçamento vertical entre as avaliações
    const spacing = 50;
    // Itera sobre as avaliações e as exibe
    for (let i = 0; i < usersTrocas.length; i++) {
      const users = usersTrocas[i].comentarios;
    
      push();
      fill('black');
      textSize(textS2);
      text(users, x + 110, y + i * spacing);
      pop();
    }
  } */