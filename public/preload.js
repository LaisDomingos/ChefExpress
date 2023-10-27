function preload(){
  imgLogo = loadImage('imagens/logoJogo.png');
  title = loadImage('imagens/title.png');
  
  piso = loadImage('imagens/piso.jpg');
  barra = loadImage('imagens/barra.png');
  escada = loadImage('imagens/escada.png');
  mesasImagens.push(loadImage('imagens/mesa2.png'));
  mesasImagens.push(loadImage('imagens/mesa4.png'));
  lixo = loadImage('imagens/lixo.png');
  menuImg = loadImage('imagens/menu.png')

  clienteImagens.push(loadImage('imagens/cliente1pe.png'));
  clienteImagens.push(loadImage('imagens/cliente2pe.png'));
  clienteImagens.push(loadImage('imagens/cliente3pe.png'));
  clienteImagens.push(loadImage('imagens/cliente4pe.png'));
  clienteImagens.push(loadImage('imagens/cliente5pe.png'));

  clienteSentadoImagens.push(loadImage('imagens/cliente1fre.png'));
  clienteSentadoImagens.push(loadImage('imagens/cliente2fre.png'));
  clienteSentadoImagens.push(loadImage('imagens/cliente3fre.png'));
  clienteSentadoImagens.push(loadImage('imagens/cliente4fre.png'));
  clienteSentadoImagens.push(loadImage('imagens/cliente5fre.png'));

  clienteMaoImagens.push(loadImage('imagens/cliente1mao.png'));
  clienteMaoImagens.push(loadImage('imagens/cliente2mao.png'));
  clienteMaoImagens.push(loadImage('imagens/cliente3mao.png'));
  clienteMaoImagens.push(loadImage('imagens/cliente4mao.png'));
  clienteMaoImagens.push(loadImage('imagens/cliente5mao.png'));

  clienteAposImagens.push(loadImage('imagens/clientes1aposPedido.png'));
  clienteAposImagens.push(loadImage('imagens/clientes2aposPedido.png'));
  clienteAposImagens.push(loadImage('imagens/clientes3aposPedido.png'));
  clienteAposImagens.push(loadImage('imagens/clientes4aposPedido.png'));
  clienteAposImagens.push(loadImage('imagens/clientes5aposPedido.png'));

  clienteGrupoImagens.push(loadImage('imagens/clientesgrupo1pe.png'));
  clienteGrupoImagens.push(loadImage('imagens/clientesgrupo2pe.png'));

  clienteSentadoGrupoImagens.push(loadImage('imagens/clientesgrupo1.png'));
  clienteSentadoGrupoImagens.push(loadImage('imagens/clientesgrupo2.png'));

  clienteGrupoMaoImagens.push(loadImage('imagens/clientesgrupo1mao.png'));
  clienteGrupoMaoImagens.push(loadImage('imagens/clientesgrupo2mao.png'));

  clienteGrupoAposImagens.push(loadImage('imagens/clientesGrupo1aposPedido.png'));
  clienteGrupoAposImagens.push(loadImage('imagens/clientesGrupo2aposPedido.png'));

  clienteDuplaImagens.push(loadImage('imagens/clientesdupla1pe.png'));
  clienteDuplaImagens.push(loadImage('imagens/clientesdupla2pe.png'));
  clienteDuplaImagens.push(loadImage('imagens/clientesdupla3pe.png'));

  clienteDuplaMaoImagens.push(loadImage('imagens/clientesdupla1mao.png'));
  clienteDuplaMaoImagens.push(loadImage('imagens/clientesdupla2mao.png'));
  clienteDuplaMaoImagens.push(loadImage('imagens/clientesdupla3mao.png'));

  clienteSentadoDuplaImagens.push(loadImage('imagens/clientesdupla1.png'));
  clienteSentadoDuplaImagens.push(loadImage('imagens/clientesdupla2.png'));
  clienteSentadoDuplaImagens.push(loadImage('imagens/clientesdupla3.png'));

  clienteDuplaAposImagens.push(loadImage('imagens/clientesDupla1aposPedido.png'));
  clienteDuplaAposImagens.push(loadImage('imagens/clientesDupla2aposPedido.png'));
  clienteDuplaAposImagens.push(loadImage('imagens/clientesDupla3aposPedido.png'));

  garconImagens.push(loadImage('imagens/garcon.png'));
  garconImagens.push(loadImage('imagens/garconPratos.png'));

  pratosIniciais.push(loadImage('imagens/prato1Ini.png'));
  pratosIniciais.push(loadImage('imagens/prato2Ini.png'));
  pratosIniciais.push(loadImage('imagens/prato6Ini.png'));
  pratosIniciais.push(loadImage('imagens/prato9Ini.png'));
  pratosIniciais.push(loadImage('imagens/prato11Ini.png'));
  pratosIniciais.push(loadImage('imagens/prato12Ini.png'));

  pratosGerais.push(loadImage('imagens/prato3.png'));
  pratosGerais.push(loadImage('imagens/prato4.png'));
  pratosGerais.push(loadImage('imagens/prato5.png'));
  pratosGerais.push(loadImage('imagens/prato7.png'));
  pratosGerais.push(loadImage('imagens/prato8.png'));
  pratosGerais.push(loadImage('imagens/prato10.png'));
  pratosGerais.push(loadImage('imagens/prato13.png'));
  pratosGerais.push(loadImage('imagens/prato14.png'));
  pratosGerais.push(loadImage('imagens/prato15.png'));
  pratosGerais.push(loadImage('imagens/prato16.png'));
  pratosGerais.push(loadImage('imagens/prato17.png'));
  pratosGerais.push(loadImage('imagens/prato18.png'));
  pratosGerais.push(loadImage('imagens/prato19.png'));
  pratosGerais.push(loadImage('imagens/prato20.png'));
  pratosGerais.push(loadImage('imagens/prato21.png'));
  pratosGerais.push(loadImage('imagens/prato22.png'));
  pratosGerais.push(loadImage('imagens/prato23.png'));
  pratosGerais.push(loadImage('imagens/prato24.png'));
  pratosGerais.push(loadImage('imagens/prato25.png'));
  pratosGerais.push(loadImage('imagens/prato26.png'));
  pratosGerais.push(loadImage('imagens/prato27.png'));
  pratosGerais.push(loadImage('imagens/prato28.png'));
  pratosGerais.push(loadImage('imagens/prato29.png'));
  pratosGerais.push(loadImage('imagens/prato30.png'));

  listaPedido = loadImage('imagens/pedido.png');

  imgTelaFuncionarios.push(loadImage('imagens/chef1.png'));
  imgTelaFuncionarios.push(loadImage('imagens/chef2.png'));
  imgTelaFuncionarios.push(loadImage('imagens/chef3.png'));
  imgTelaFuncionarios.push(loadImage('imagens/chef4.png'));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante1.png'));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante2.png'));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante3.png'));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante4.png'));
  
}