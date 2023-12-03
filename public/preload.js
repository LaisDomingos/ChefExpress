let loading = [];
let tudoCarregado = false;
function preload(){
  loading.push(loadImage('imagens/loading1.png', carregar));
  loading.push(loadImage('imagens/loading2.png', carregar));
  loading.push(loadImage('imagens/loading3.png', carregar));
  loading.push(loadImage('imagens/loading4.png', carregar));
  loading.push(loadImage('imagens/loading5.png', carregar));
  loading.push(loadImage('imagens/loading6.png', carregar));
  loading.push(loadImage('imagens/loading7.png', carregar));
  loading.push(loadImage('imagens/loading8.png', carregar));
  loading.push(loadImage('imagens/loading9.png', carregar));

}
function carregandoImg(){
  imgLogo = loadImage('imagens/logoJogo.png', carregar);
  title = loadImage('imagens/title.png', carregar);
  
  piso = loadImage('imagens/piso.jpg', carregar);
  barra = loadImage('imagens/barra.png', carregar);
  escada = loadImage('imagens/escada.png', carregar);
  mesasImagens.push(loadImage('imagens/mesa2.png', carregar));
  mesasImagens.push(loadImage('imagens/mesa4.png', carregar));
  lixo = loadImage('imagens/lixo.png', carregar);
  menuImg = loadImage('imagens/menu.png', carregar);
  check = loadImage('imagens/check.svg', carregar);
  imgDinheiro = loadImage('imagens/dinheiro.svg', carregar);
  garcomInicial = loadImage('imagens/garcon.svg', carregar);

  clienteImagens.push(loadImage('imagens/cliente1pe.png', carregar));
  clienteImagens.push(loadImage('imagens/cliente2pe.png', carregar));
  clienteImagens.push(loadImage('imagens/cliente3pe.png', carregar));
  clienteImagens.push(loadImage('imagens/cliente4pe.png', carregar));
  clienteImagens.push(loadImage('imagens/cliente5pe.png', carregar));

  clienteSentadoImagens.push(loadImage('imagens/cliente1fre.png', carregar));
  clienteSentadoImagens.push(loadImage('imagens/cliente2fre.png', carregar));
  clienteSentadoImagens.push(loadImage('imagens/cliente3fre.png', carregar));
  clienteSentadoImagens.push(loadImage('imagens/cliente4fre.png', carregar));
  clienteSentadoImagens.push(loadImage('imagens/cliente5fre.png', carregar));

  clienteMaoImagens.push(loadImage('imagens/cliente1mao.png', carregar));
  clienteMaoImagens.push(loadImage('imagens/cliente2mao.png', carregar));
  clienteMaoImagens.push(loadImage('imagens/cliente3mao.png', carregar));
  clienteMaoImagens.push(loadImage('imagens/cliente4mao.png', carregar));
  clienteMaoImagens.push(loadImage('imagens/cliente5mao.png', carregar));

  clienteAposImagens.push(loadImage('imagens/clientes1aposPedido.png', carregar));
  clienteAposImagens.push(loadImage('imagens/clientes2aposPedido.png', carregar));
  clienteAposImagens.push(loadImage('imagens/clientes3aposPedido.png', carregar));
  clienteAposImagens.push(loadImage('imagens/clientes4aposPedido.png', carregar));
  clienteAposImagens.push(loadImage('imagens/clientes5aposPedido.png', carregar));

  clienteGrupoImagens.push(loadImage('imagens/clientesgrupo1pe.png', carregar));
  clienteGrupoImagens.push(loadImage('imagens/clientesgrupo2pe.png', carregar));

  clienteSentadoGrupoImagens.push(loadImage('imagens/clientesgrupo1.png', carregar));
  clienteSentadoGrupoImagens.push(loadImage('imagens/clientesgrupo2.png', carregar));

  clienteGrupoMaoImagens.push(loadImage('imagens/clientesgrupo1mao.png', carregar));
  clienteGrupoMaoImagens.push(loadImage('imagens/clientesgrupo2mao.png', carregar));

  clienteGrupoAposImagens.push(loadImage('imagens/clientesGrupo1aposPedido.png', carregar));
  clienteGrupoAposImagens.push(loadImage('imagens/clientesGrupo2aposPedido.png', carregar));

  clienteDuplaImagens.push(loadImage('imagens/clientesdupla1pe.png', carregar));
  clienteDuplaImagens.push(loadImage('imagens/clientesdupla2pe.png', carregar));
  clienteDuplaImagens.push(loadImage('imagens/clientesdupla3pe.png', carregar));

  clienteDuplaMaoImagens.push(loadImage('imagens/clientesdupla1mao.png', carregar));
  clienteDuplaMaoImagens.push(loadImage('imagens/clientesdupla2mao.png', carregar));
  clienteDuplaMaoImagens.push(loadImage('imagens/clientesdupla3mao.png', carregar));

  clienteSentadoDuplaImagens.push(loadImage('imagens/clientesdupla1.png', carregar));
  clienteSentadoDuplaImagens.push(loadImage('imagens/clientesdupla2.png', carregar));
  clienteSentadoDuplaImagens.push(loadImage('imagens/clientesdupla3.png', carregar));

  clienteDuplaAposImagens.push(loadImage('imagens/clientesDupla1aposPedido.png', carregar));
  clienteDuplaAposImagens.push(loadImage('imagens/clientesDupla2aposPedido.png', carregar));
  clienteDuplaAposImagens.push(loadImage('imagens/clientesDupla3aposPedido.png', carregar));

  garconImagens.push(loadImage('imagens/garcomP7.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP8.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP9.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP10.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP11.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP12.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP13.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP14.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP15.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP16.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP17.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP18.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP19.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP20.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP21.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP22.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP23.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP24.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP25.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP26.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP27.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP28.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP29.svg', carregar));
  garconImagens.push(loadImage('imagens/garcomP30.svg', carregar));
  
  garcomImagensPratosIni.push(loadImage('imagens/garcomP1.svg', carregar));
  garcomImagensPratosIni.push(loadImage('imagens/garcomP2.svg', carregar));
  garcomImagensPratosIni.push(loadImage('imagens/garcomP3.svg', carregar));
  garcomImagensPratosIni.push(loadImage('imagens/garcomP4.svg', carregar));
  garcomImagensPratosIni.push(loadImage('imagens/garcomP5.svg', carregar));
  garcomImagensPratosIni.push(loadImage('imagens/garcomP6.svg', carregar));

  pratosIniciais.push(loadImage('imagens/prato1Ini.png', carregar));
  pratosIniciais.push(loadImage('imagens/prato2Ini.png', carregar));
  pratosIniciais.push(loadImage('imagens/prato3Ini.png', carregar));
  pratosIniciais.push(loadImage('imagens/prato4Ini.png', carregar));
  pratosIniciais.push(loadImage('imagens/prato5Ini.png', carregar));
  pratosIniciais.push(loadImage('imagens/prato6Ini.png', carregar));
  
  pratosGerais.push(loadImage('imagens/prato7.png', carregar));
  pratosGerais.push(loadImage('imagens/prato8.png', carregar));
  pratosGerais.push(loadImage('imagens/prato9.png', carregar));
  pratosGerais.push(loadImage('imagens/prato10.png', carregar));
  pratosGerais.push(loadImage('imagens/prato11.png', carregar));
  pratosGerais.push(loadImage('imagens/prato12.png', carregar));
  pratosGerais.push(loadImage('imagens/prato13.png', carregar));
  pratosGerais.push(loadImage('imagens/prato14.png', carregar));
  pratosGerais.push(loadImage('imagens/prato15.png', carregar));
  pratosGerais.push(loadImage('imagens/prato16.png', carregar));
  pratosGerais.push(loadImage('imagens/prato17.png', carregar));
  pratosGerais.push(loadImage('imagens/prato18.png', carregar));
  pratosGerais.push(loadImage('imagens/prato19.png', carregar));
  pratosGerais.push(loadImage('imagens/prato20.png', carregar));
  pratosGerais.push(loadImage('imagens/prato21.png', carregar));
  pratosGerais.push(loadImage('imagens/prato22.png', carregar));
  pratosGerais.push(loadImage('imagens/prato23.png', carregar));
  pratosGerais.push(loadImage('imagens/prato24.png', carregar));
  pratosGerais.push(loadImage('imagens/prato25.png', carregar));
  pratosGerais.push(loadImage('imagens/prato26.png', carregar));
  pratosGerais.push(loadImage('imagens/prato27.png', carregar));
  pratosGerais.push(loadImage('imagens/prato28.png', carregar));
  pratosGerais.push(loadImage('imagens/prato29.png', carregar));
  pratosGerais.push(loadImage('imagens/prato30.png', carregar));

  listaPedido = loadImage('imagens/pedido.png', carregar);

  imgTelaFuncionarios.push(loadImage('imagens/chef1.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/chef2.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/chef3.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/chef4.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante1.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante2.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante3.png', carregar));
  imgTelaFuncionarios.push(loadImage('imagens/ajudante4.png', carregar));

  imgEstrela.push(loadImage('imagens/estrela0.svg', carregar));
  imgEstrela.push(loadImage('imagens/estrela1.svg', carregar));
  imgEstrela.push(loadImage('imagens/estrela2.svg', carregar));
  imgEstrela.push(loadImage('imagens/estrela3.svg', carregar));
  imgEstrela.push(loadImage('imagens/estrela4.svg', carregar));
  imgEstrela.push(loadImage('imagens/estrela5.svg', carregar));
  
}


let imagensCarregadas = 0;

function carregar() {
  imagensCarregadas++;
  console.log(imagensCarregadas)
  if(imagensCarregadas <= 14 ){
    imgLoading = loading[0];
  } else if(imagensCarregadas > 14 &&  imagensCarregadas <= 28){
    imgLoading = loading[1];
  } else if(imagensCarregadas > 28 &&  imagensCarregadas <= 42){
    imgLoading = loading[2];
  } else if(imagensCarregadas > 42 &&  imagensCarregadas <= 56){
    imgLoading = loading[3];
  } else if(imagensCarregadas > 56 &&  imagensCarregadas <= 70){
    imgLoading = loading[4];
  } else if(imagensCarregadas > 70 &&  imagensCarregadas <= 84){
    imgLoading = loading[5];
  } else if(imagensCarregadas > 84 &&  imagensCarregadas <= 98){
    imgLoading = loading[6];
  } else if(imagensCarregadas > 98 &&  imagensCarregadas <= 112){
    imgLoading = loading[7];
  } else if(imagensCarregadas > 112 &&  imagensCarregadas <= 126){
    imgLoading = loading[8];
  } else if (imagensCarregadas > 135){
    tudoCarregado = true;
  }
}