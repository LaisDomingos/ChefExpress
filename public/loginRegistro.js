function registrarBD(){
  registrado = false;
  nomeExiste = false;
  camposPreencherRegistro = false;

  let userRValue = userR.input.value();
  let emailValue = email.input.value();
  let passRValue = passR.input.value();
  let passConfValue = passConf.input.value();
    
  // Verifique se todos os campos estão preenchidos
  if (userRValue && emailValue && passRValue && passConfValue) {
    // Verifique se passRValue é igual a passConfValue
    if (passRValue === passConfValue) {
      // Se todas as verificações passarem, faça a solicitação POST para o servidor
      let dataToSend = {
        userRValue: userRValue,
        emailValue: emailValue,
        passRValue: passRValue
      };
   
      httpPost('/postRegistrar', dataToSend, 'json', (data) => {
        console.log(data);
        if (data.message == 'Registro bem-sucedido' && !nomeExiste) {
          registrado = true;
        } else if (data.message == 'Já existe um usuário com este nome' && !registrado) {
          nomeExiste = true;
        }
      });
    } else {
      senhasNao = true;
    }
  } else {
    camposPreencherRegistro = true;
  }
}

function loginBD(){
  loginSucesso = false;
  usuarioInexistente = false;
  senhaErrada = false;
  camposPreencherLogin= false;

  let userValue = user.input.value();
  let passValue = pass.input.value();
  if (userValue && passValue ) {
    let dataToSend = {
      userValue: userValue,
      passValue: passValue
    };

    httpPost('/postLogin', dataToSend, 'json', (data) => {
      console.log(data);
      if(data.message == 'Login bem-sucedido' && !usuarioInexistente && !senhaErrada){
        loginSucesso = true;
        setTimeout(function() {
          tela = 4; // Define a variável tela como 4 após 3 segundos
        }, 1000); // 3000 milissegundos = 3 segundos
      } else if(data.message == 'Usuário não encontrado' && !loginSucesso && !senhaErrada){
        usuarioInexistente = true;
      } else if(data.message == 'Senha incorreta' && !usuarioInexistente && !loginSucesso){
        senhaErrada = true;
      }
    });
  } else {
    camposPreencherLogin = true;
  }
}