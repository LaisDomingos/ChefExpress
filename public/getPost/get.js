function getDinheiro() {//Busca o valor que o usuário tem 
    loadJSON('/getDinheiro', (data) => {
      dinheiro = data.dinheiro;
      idUsuario = data.idUser;
    }, (error) => {
      console.error('Erro ao obter o valor do dinheiro:', error);
    });
    loop();
  }
  
  function getTempoPreparoValor() {//Busca o valor do ajudante contratado pelo usuário e o tempo de preparo que ele vai ter
    loadJSON('/getTempoPreparoValor', (data) => {
      tempoPreparo = data.tempoPreparo;
      valorAjudante = data.valor;
    }, (error) => {
      //console.error('Erro ao obter o tempo e valor:', error);
  
      tempoPreparo = 30;
      valorAjudante = 0;
    });
    loop();
  }
  
  function getValorChef() {//Busca o valor do chef contratado pelo usuário e o lucro a mais que ele terá
    loadJSON('/getValorChef', (data) => {
      lucroMais = data.lucro;
      valorChef = data.valor;
    }, (error) => {
      //console.error('Erro ao obter o tempo e valor:', error);
  
      lucroMais = 0;
      valorChef = 0;
    });
    loop();
  }