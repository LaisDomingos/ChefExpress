function getDinheiro() {//Busca o valor que o usuário tem 
    loadJSON('/getDinheiro', (data) => {
      dinheiro = data.dinheiro;
      idUsuario = data.idUser;   
      console.log(dinheiro);  
    }, (error) => {
      console.error('Erro ao obter o valor do dinheiro:', error);
    });
    loop();
}
  
function getTempoPreparoValor() {//Busca o valor do ajudante contratado pelo usuário e o tempo de preparo que ele vai ter
    loadJSON('/getTempoPreparoValor', (data) => {
      if(data.ativo == 1){
        ajudanteAtivo = data.ativo;
        tipoAjudante = data.tipoFuncionario;
        tempoPreparo = data.tempoPreparo;
        valorAjudante = data.valor;
      } else {
        ajudanteAtivo = 0;
        tempoPreparo = 30;
        valorAjudante = 0;
      }
      
    }, (error) => {
      //console.error('Erro ao obter o tempo e valor:', error);
      ajudanteAtivo = 0;
      tempoPreparo = 30;
      valorAjudante = 0;
    });
    loop();
}
  
function getValorChef() {//Busca o valor do chef contratado pelo usuário e o lucro a mais que ele terá
    loadJSON('/getValorChef', (data) => {
      if(data.ativo == 1){
        chefAtivo = data.ativo;
        tipoChef = data.tipoFuncionario;
        lucroMais = data.lucro;
        valorChef = data.valor;
      } else {
        chefAtivo = 0;
        lucroMais = 0;
        valorChef = 0;
      }
    }, (error) => {
      //console.error('Erro ao obter o tempo e valor:', error);
      chefAtivo = 0;
      lucroMais = 0;
      valorChef = 0;
    });
    loop();
}