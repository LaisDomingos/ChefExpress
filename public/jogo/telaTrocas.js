let mostrarTelaIdPratos;
let idUsersClicado; // Variável para armazenar o idUsers clicado
let usersClicado; // Variável para armazenar o usuário clicado
let imgPratoClicado;
let trocaEfetuada = false;
let idPrato;

function janelaTrocas() {
  let textS1 = width / 70;
  let textS2 = width / 85;

  if (!mostrarTelaIdPratos) {
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
        mostrarTelaIdPratos = true;
        idUsersClicado = idUsers; // Armazena o idUsers clicado
        usersClicado = users; // Armazena o usuário clicado
        getPratosUsers(idUsersClicado);
      }
    }
  } else {
    push();
    fill('#acefea');
    rect(width * 0.1, height * 0.02, width * 0.7, height * 0.9);
    fecharIdTrocas.draw_ButtonFechar(width * 0.8, height * 0.03);
    pop();

    push();
    fill('black');
    textSize(textS1);
    text("User escolhido: " + usersClicado + '  -  ' + 'Id do User: ' + idUsersClicado , width * 0.20, height * 0.14);
    textSize(textS2);
    text("Selecione qual deseja trocar" , width * 0.20, height * 0.18);
    const pratosPorLinha = 6;
    const larguraPrato = width / 18;
    const alturaPrato = height / 18;
    const espacamentoHorizontal = 0.05 * width;
    const espacamentoVertical = 0.05 * height;
    pop();
    for (let i = 0; i < pratosUser.length; i++) {
    idPrato = pratosUser[i].idPratos;
    let qtdPratos = pratosUser[i].qtdPratos;
    
    let linha = Math.floor(i / pratosPorLinha);
    let coluna = i % pratosPorLinha;

    let x = width * 0.18 + coluna * (larguraPrato + espacamentoHorizontal);
    let y = height * 0.28 + linha * (alturaPrato + espacamentoVertical);

    
    
    if (idPrato >= 0 && idPrato < pratosGerais.length) {
      image(pratosGerais[idPrato], x, y, larguraPrato, alturaPrato);
      
      // Verifique se o mouse está sobre o retângulo atual
      if (mouseX >= x && mouseX <= x + larguraPrato && mouseY >= y && mouseY <= y + alturaPrato && mouseIsPressed) {
        console.log("Clicado no idPrato:", idPrato);
        imgPratoClicado = pratosGerais[idPrato];
        trocaEfetuada = false;
      }
    }
    
  }
  if (imgPratoClicado) {
    image(imgPratoClicado, width * 0.3, height * 0.8, width / 18, height / 18);
    push();
    fill('black');
    textSize(textS2);
    text("Realiza uma troca utilizando o prato", width * 0.37, height * 0.8);
    text("que você possui em maior quantidade", width * 0.37, height * 0.84);
    pop();
    trocaBtn.draw_Button(100, 30, width*0.67, height*0.81, "Trocar", 13);
    if(trocaBtn.on_Click(mouseX,mouseY) && mouseIsPressed){
      postTrocarPratos(idPrato,idUsersClicado);
    }
  }
  if (trocaEfetuada){
    push();
    fill('green');
    textSize(textS2);
    if(trocaRealizada){
      text("Troca realizada", width * 0.3, height * 0.8);
    } else {
      text("Você não possui prato para trocar", width * 0.3, height * 0.8);
    }
    pop();
    imgPratoClicado = false;
  }
  } 
  
}