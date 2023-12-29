let presenteComprado;
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
  if (dinheiro >= 30){
    presenteComprado = true;
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
  } else {
    presenteComprado = false;
  }
}

function postPratos(idPrato){
  let dataToSend = {
    idPrato: idPrato
  } 
  httpPost('/postPratos', dataToSend, 'json', (data) => {
    loop();
  });
}

function postavaliacao(estrelas, comentarios) {
  let dataToSend = {
    estrelas: estrelas,
    comentarios: comentarios,
  };
  //console.log(dataToSend)
  httpPost('/postAvaliacao', dataToSend, 'json', (data) => {
  });
}

function postMediaAvaliacao(mediaAvaliacao){
  let dataToSend = {
    mediaAvaliacao: mediaAvaliacao
  };
  //console.log(dataToSend)
  httpPost('/postMediaAvaliacao', dataToSend, 'json', (data) => {
  });
}

function postListaTrocas(pratosSelecionados) {
  for (let i = 0; i < pratosSelecionados.length; i++) {
    const idPrato = pratosSelecionados[i].idPrato;
    const qtdPrato = pratosSelecionados[i].quantidade;

    const dataToSend = {
      idPrato: idPrato,
      qtdPrato: qtdPrato 
    };
    httpPost('/postListaTrocas', dataToSend, 'json', (data) => {
    });
  }
}

let trocaRealizada;
function postTrocarPratosidUser(idPrato, idUsersClicado) {
  console.log(idPrato, idUsersClicado);
  const dataToSend = {
    idPrato: idPrato,
    idUserEscolhido: idUsersClicado,
  };

  httpPost('/postTrocarPratosidUser', dataToSend, 'json', (data) => {
    // Manipule a resposta do servidor aqui
    if (data.message === 'Troca realizada') {
      trocaRealizada = true;
      let idPratoTrocar = data.idPratoComMaisQtd;
      let idUserEscolhido = data.idUserEscolhido;
      postPratosTrocar(idUserEscolhido, idPratoTrocar)
    } else if (data.message === 'Não tem prato para trocar') {
      trocaRealizada = false;
    } else {
      trocaRealizada = false;
      console.log('Resposta desconhecida:', data);
    }
    
  });
}

function postTrocarPratosidEscolhido(idPrato, idUsersClicado) {
  console.log(idPrato, idUsersClicado);
  const dataToSend = {
    idPrato: idPrato,
    idUserEscolhido: idUsersClicado,
  };

  httpPost('/postTrocarPratosidEscolhido', dataToSend, 'json', (data) => {
  });
}

function postPratosTrocar(idUserEscolhido, idPratoTrocar){
  let dataToSend = {
    idUserEscolhido: idUserEscolhido,
    idPratoTrocar: idPratoTrocar
  } 
  httpPost('/postPratosTrocar', dataToSend, 'json', (data) => {
    loop();
  });
}