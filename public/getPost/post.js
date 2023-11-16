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
        getDinheiro();
       
      } else {
        console.error('Erro ao atualizar o dinheiro:', respostaServidor.statusText);
      }
      });
    } else {
      httpPost('/postAjudanteAtivo', { ativo: 0 }, 'json', (respostaAtivo) => {
        console.log(respostaAtivo);
      });
      httpPost('/postChefAtivo', { ativo: 0 }, 'json', (respostaAtivo) => {
        console.log(respostaAtivo);
      });
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

function postDinheiroPagamento() { //Atualiza o dinheiro de acordo com o o chef e ajudante que tem
  let valorComLucro = ((lucroMais/100) * valorPagamento) + valorPagamento;
  let attDinheiroP = dinheiro + valorComLucro;
  
  let attDinheiroPagamento = {
    "dinheiro": attDinheiroP
  };
  // Enviar a atualização para o servidor
  httpPost('/postDinheiroServicos', attDinheiroPagamento, 'json', (respostaServidor) => {
  console.log(respostaServidor);
  if (respostaServidor.status === 200) {
    getDinheiro();
   
  } else {
    console.error('Erro ao atualizar o dinheiro:', respostaServidor.statusText);
  }
  });
  loop();
}

function postGastoPresente(){
  let attDinheiroPre = dinheiro - 30;
  
  let attDinheiroPresente = {
    "dinheiro": attDinheiroPre
  };
  // Enviar a atualização para o servidor
  httpPost('/postGastoPresente', attDinheiroPresente, 'json', (respostaServidor) => {
  console.log(respostaServidor);
  if (respostaServidor.status === 200) {
    getDinheiro();
   
  } else {
    console.error('Erro ao atualizar o dinheiro:', respostaServidor.statusText);
  }
  });
  loop();
}