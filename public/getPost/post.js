function postDinheiroServicos() { //Atualiza o dinheiro de acordo com o o chef e ajudante que tem
  let servicos = valorAjudante + valorChef;  
    if (dinheiro >= servicos) {
      let attDinheiro = dinheiro - servicos;
      let attBancoDinheiro = {
        "dinheiro": attDinheiro
      };
    // Enviar a atualização para o servidor
    httpPost('/postDinheiroServicos', attBancoDinheiro, 'json', (respostaServidor) => {
      console.log(respostaServidor);
      if (respostaServidor.status === 200) {
        // Atualize o dinheiro após a atualização bem-sucedida
        getDinheiro();
       
      } else {
        console.error('Erro ao atualizar o dinheiro:', respostaServidor.statusText);
      }
      });
    } else {
      console.error('Saldo insuficiente para concluir a transação.');
    }
    loop();
}

function postChef(chefId){ //Coloca o chef que o usuário contratou na BD
    let dataToSend = {
      chefId: chefId
    }
    httpPost('/postChef', dataToSend, 'json', (data) => {
      console.log(data);
      loop();
    });
} 
  
function postAjudante(ajudanteIdId){ //Coloca o ajudante que o usuário contratou na BD
  let dataToSend = {
    ajudanteId: ajudanteIdId
  }
  httpPost('/postAjudante', dataToSend, 'json', (data) => {
    console.log(data);
    loop();
  });
}