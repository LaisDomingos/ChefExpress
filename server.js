let idUser;

const express = require('express')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcrypt');

const app = express()
const port = 3000

const dbase = mysql.createConnection({ //Conecta ao BD
  host:"localhost",
  port: "3306",
  user:"root",
  password:"root",
  database: "chefexpress_user_teste"
});

dbase.connect(function(err){
  if (err) throw err;
  console.log("Database Connect");
})

/// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

//postRegistrar - registrar usuário
app.post('/postRegistrar', (req, res) => {
  const { userRValue, emailValue, passRValue } = req.body;

  // Verifique se existe um usuário com o mesmo nome
  const sql = 'SELECT * FROM users WHERE nome = ?';
  dbase.query(sql, [userRValue], (checkErr, checkResult) => {
    if (checkErr) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (checkResult.length > 0) {
      return res.json({ message: 'Já existe um usuário com este nome' });
    }

    // Se não existir um usuário com o mesmo nome, insere
    //Encriptar a senha usando bcrypt
    bcrypt.hash(passRValue, 10, (hashErr, hash) => {
      if (hashErr) {
        return res.status(500).json({ error: 'Erro ao criptografar a senha' });
      }

      const inSql = 'INSERT INTO users (nome, email, password) VALUES (?, ?, ?)';
      dbase.query(inSql, [userRValue, emailValue, hash], (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Erro no servidor' });
        }

        console.log('Registro bem-sucedido');
        res.json({ message: 'Registro bem-sucedido' });
      });
    });
  });
});

//postLogin - fazer o login
app.post('/postLogin', (req, res) => {
  const { userValue, passValue } = req.body;

  // Verifique se o usuário existe
  const sql = 'SELECT * FROM users WHERE nome = ?';
  dbase.query(sql, [userValue], (checkErr, checkResult) => {
    if (checkErr) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (checkResult.length === 0) {
      return res.json({ message: 'Usuário não encontrado' });
    }

    // Verifique se a senha está correta - encripta a senha digitada e compara
    const user = checkResult[0];
    bcrypt.compare(passValue, user.password, (hashErr, passwordMatch) => {
      if (hashErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (!passwordMatch) {
        return res.json({ message: 'Senha incorreta' });
      }
      idUser = user.id;
      res.json({ message: 'Login bem-sucedido' });
      
    });
  });
});

//getDinheiro - busca quanto o usuário tem de dinheiro
app.get("/getDinheiro", (req, res) => {
  // Certifique de que já possui idUser
  if (idUser) {
    let sql = "SELECT dinheiro FROM users WHERE id = ?";
    dbase.query(sql, [idUser], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        if (result.length > 0) {
          const dinheiro = result[0].dinheiro;
          res.json({ dinheiro, idUser});
          //console.log(dinheiro)
        } else {
          res.status(404).json({ error: 'Usuário não encontrado' });
        }
      }
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não definido' });
  }
});

//postDinheiro - atualiza o valor no banco, descontando o chef e ajudante
app.post("/postDinheiroServicos", (req, res) => {
  // Certifique-se de que idUser está definido antes de usar
  if (idUser) {
    const novoDinheiro = req.body.dinheiro;
    let sql = "UPDATE users SET dinheiro = ? WHERE id = ?";
    dbase.query(sql, [novoDinheiro, idUser], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        res.status(200).json({ message: 'Dinheiro atualizado com sucesso' });
      }
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não definido' });
  }
});

//postChef - coloca o chef que foi contratado na tabela users_chefs (idUser e idFuncionario)
app.post('/postChef', (req, res) => {
  const { chefId } = req.body;
  if (idUser) {
    // Verifique se o jogador já possui este chefe associado
    const sql = 'SELECT * FROM users_chefs WHERE idUser = ?';
    dbase.query(sql, [idUser], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        // O jogador já possui registros na tabela "users_chefs"
        // Atualize o idChef 
        const upSql = 'UPDATE users_chefs SET idChef = ?,  ativo = 1 WHERE idUser = ?';
        dbase.query(upSql, [chefId, idUser], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e chefe atualizada com sucesso' });
        });
      } else {
        // O jogador não possui registros na tabela "users_chefs"
        // Insira um novo registro com idUser e idChef
        const inSql = 'INSERT INTO users_chefs (idUser, idChef, ativo) VALUES (?, ?, 1)';
        dbase.query(inSql, [idUser, chefId], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e chefe criada com sucesso' });
        });
      }
      
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//postAjudante - coloca o ajudante que foi contratado na tabela users_ajudantes (idUser e idFuncionario)
app.post('/postAjudante', (req, res) => {
  const { ajudanteId } = req.body;

  if (idUser) {
    // Verifique se o jogador já possui este chefe associado
    const sql = 'SELECT * FROM users_ajudantes WHERE idUser = ?';
    dbase.query(sql, [idUser], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        // O jogador já possui registros na tabela
        // Atualize o idAjudante correspondente e defina ativo como 1
        const upSql = 'UPDATE users_ajudantes SET idAjudante = ?, ativo = 1 WHERE idUser = ?';
        dbase.query(upSql, [ajudanteId, idUser], (updateErr, updateResult) => {
          if (updateErr) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e ajudante atualizada com sucesso' });
        });
      } else {
        // O jogador não possui registros na tabela
        // Insira um novo registro com idUser, idAjudante e ativo igual a 1
        const inSql = 'INSERT INTO users_ajudantes (idUser, idAjudante, ativo) VALUES (?, ?, 1)';
        dbase.query(inSql, [idUser, ajudanteId], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e ajudante criada com sucesso' });
        });
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//getTempoPreparoValor - busca o tempo de preparo e valor do ajudante contratato
app.get('/getTempoPreparoValor', (req, res) => {
  if (idUser) {
    // Pegar todos os dados da tabela users_ajudantes faz uma ligação com a tabela funcionarios em que idAjudante = idFuncionario onde idUser foi igual o passado
    const sql = `SELECT u.*, f.*, u.ativo FROM users_ajudantes u JOIN funcionarios f ON u.idAjudante = f.idFuncionario WHERE u.idUser = ?;`;

    dbase.query(sql, [idUser], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        if (results.length > 0) {
          const tempoPreparo = results[0].tempoPreparo;
          const valor = results[0].valor;
          const tipoFuncionario = results[0].tipoFuncionario;
          const ativo = results[0].ativo;

          res.json({ tipoFuncionario, tempoPreparo, valor, ativo });
          //console.log("Ajudante: ", tipoFuncionario, tempoPreparo, valor, ativo);
        } else {
          res.json('Usuário não tem um ajudante associado');
        }
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//getValorChef - busca o valor do chef contratato
app.get('/getValorChef', (req, res) => {
  if (idUser) {
    // Pegar todos os dados da tabela users_chefs faz uma ligação com a tabela funcionarios em que idChef = idFuncionario onde idUser foi igual o passado
    const sql = `SELECT u.*, f.*, u.ativo FROM users_chefs u JOIN funcionarios f ON u.idChef = f.idFuncionario WHERE u.idUser = ?;`;

    dbase.query(sql, [idUser], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        if (results.length > 0) {
          const lucro = results[0].lucro;
          const valor = results[0].valor;
          const tipoFuncionario = results[0].tipoFuncionario;
          const ativo = results[0].ativo; // Novo campo adicionado

          res.json({ tipoFuncionario, lucro, valor, ativo });
          //console.log("Chefe: ", tipoFuncionario, lucro, valor, ativo);
        } else {
          res.json('Usuário não tem chef associado');
        }
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//postAjudanteAtivo - atualiza se o ajudante está ativo ou não
app.post('/postAjudanteAtivo', (req, res) => {
  const { ativo } = req.body;

  if (idUser) {
    // Atualize a coluna 'ativo' na tabela users_ajudantes
    const sql = 'UPDATE users_ajudantes SET ativo = ? WHERE idUser = ?';
    
    dbase.query(sql, [ativo, idUser], (updateErr, updateResult) => {
      if (updateErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//postChefAtivo - atualiza se o chef está ativo ou não
app.post('/postChefAtivo', (req, res) => {
  const { ativo } = req.body;

  if (idUser) {
    // Atualize a coluna 'ativo' na tabela users_ajudantes
    const sql = 'UPDATE users_chefs SET ativo = ? WHERE idUser = ?';
    
    dbase.query(sql, [ativo, idUser], (updateErr, updateResult) => {
      if (updateErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//postDinheiroPagamento -> atualizar o dinheiro com o pagamento dos clientes
app.post("/postDinheiroPagamento", (req, res) => {
  // Certifique-se de que idUser está definido antes de usar
  if (idUser) {
    const {novoDinheiro} = req.body.dinheiro;
    let sql = "UPDATE users SET dinheiro = ? WHERE id = ?";
    dbase.query(sql, [novoDinheiro, idUser], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        res.status(200).json({ message: 'Dinheiro atualizado com sucesso' });
        console.log(novoDinheiro);
      }
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não definido' });
  }
});

//postGastoPresente - atualiza o dinheiro com a compra do presente
app.post("/postGastoPresente", (req, res) => {
  // Certifique-se de que idUser está definido antes de usar
  if (idUser) {
    const novoDinheiro = req.body.dinheiro;
    let sql = "UPDATE users SET dinheiro = ? WHERE id = ?";
    dbase.query(sql, [novoDinheiro, idUser], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        res.status(200).json({ message: 'Dinheiro atualizado com sucesso' });
      }
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não definido' });
  }
});

//postPratos - atualiza a quantidade se tiver esse prato, se não adiciona
app.post('/postPratos', (req, res) => {
  const { idPrato } = req.body;
  if (idUser) {
    // Verifique se o jogador já possui este prato associado
    const sql = 'SELECT * FROM users_pratos WHERE idUser = ? AND idPratos = ?';
    dbase.query(sql, [idUser, idPrato], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        // O jogador já possui o prato na tabela "users_pratos"
        // Atualize a coluna quantidade
        const updateSql = 'UPDATE users_pratos SET qtdPrato = qtdPrato + 1 WHERE idUser = ? AND idPratos = ?';
        dbase.query(updateSql, [idUser, idPrato], (updateErr, updateResult) => {
            if (updateErr) {
                return res.status(500).json({ error: 'Erro no servidor' });
            }
            res.json({ message: 'Quantidade de pratos iguais alterada' });
        });
      } else {
        // Se o prato não existir, insira um novo registro
        const insertSql = 'INSERT INTO users_pratos (idUser, idPratos, qtdPrato) VALUES (?, ?, 1)';
        dbase.query(insertSql, [idUser, idPrato], (insertErr, insertResult) => {
            if (insertErr) {
                return res.status(500).json({ error: 'Erro no servidor' });
            }
            res.json({ message: 'Novo prato adicionado' });
        });
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

app.get('/getPratos', (req, res) => {
  if (idUser) {
    // Seleciona as últimas 5 avaliações do idUser ordenadas pela data de criação
    const sql = 'SELECT idPratos, qtdPrato FROM users_pratos WHERE idUser = ?';

    dbase.query(sql, [idUser], (err, result) => {
      if (err) {
        console.error('Erro ao obter os pratos:', err);
        return res.status(500).json({ error: 'Erro no servidor ao obter pratos' });
      }

      res.json(result);
      //console.log(result);
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não fornecido' });
  }
});

//postAvaliacao - insere a avaliação do cliente no bd
app.post('/postAvaliacao', (req, res) => {
  const { estrelas, comentarios } = req.body;
  const userId = idUser; 
 // Insere a avaliação na tabela
 const insertSql = 'INSERT INTO avaliacoes (idUser, estrelas, comentarios) VALUES (?, ?, ?)';
 dbase.query(insertSql, [userId, estrelas, comentarios], (insertErr, insertResult) => {
   if (insertErr) {
     console.error('Erro ao inserir avaliação:', insertErr);
     return res.status(500).json({ error: 'Erro no servidor ao inserir avaliação' });
   }

   res.json({ message: 'Avaliação registrada com sucesso' });
 });
});

//getUltimasAvaliacoes - busca as ultimas 9 avaliações feitas
app.get('/getUltimasAvaliacoes', (req, res) => {
  if (idUser) {
    // Seleciona as últimas 5 avaliações do idUser ordenadas pela data de criação
    const sql = 'SELECT estrelas, comentarios FROM avaliacoes WHERE idUser = ? ORDER BY dataCriacao DESC LIMIT 9';

    dbase.query(sql, [idUser], (err, result) => {
      if (err) {
        console.error('Erro ao obter as últimas avaliações:', err);
        return res.status(500).json({ error: 'Erro no servidor ao obter avaliações' });
      }

      res.json(result);
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não fornecido' });
  }
});

//postMediaAvalição - insere a media de avaliação do restaurante
app.post('/postMediaAvaliacao', (req, res) => {
  if(idUser){
    const {mediaAvaliacao } = req.body;
 
  // Atualiza a média de avaliação na tabela users
  const updateSql = 'UPDATE users SET avaliacao = ? WHERE id = ?';

  dbase.query(updateSql, [mediaAvaliacao, idUser], (updateErr, updateResult) => {
    if (updateErr) {
      console.error('Erro ao atualizar avaliação:', updateErr);
      return res.status(500).json({ error: 'Erro no servidor ao atualizar avaliação' });
    }

    res.json({ message: 'Avaliação atualizada com sucesso' });
  });
  }
  
});

//get10avaliacoes - pegas os 10 restaurantes mais bem avaliados
app.get('/get10avaliacoes', (req, res) => {
  const query = 'SELECT nome, avaliacao, dinheiro FROM users ORDER BY avaliacao DESC LIMIT 10';

  dbase.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

//postListaTrocas - coloca na lista de trocas
app.post('/postListaTrocas', (req, res) => {
  const { idPrato, qtdPrato } = req.body; 
  if (idUser) {
    // Verifique se o jogador já possui este prato associado
    const sql = 'SELECT * FROM trocas WHERE idUser = ? AND idPratos = ?';
    dbase.query(sql, [idUser, idPrato], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        const updateSql = 'UPDATE trocas SET qtdPrato = ? WHERE idUser = ? AND idPratos = ?';
        dbase.query(updateSql, [idUser, qtdPrato, idPrato], (updateErr, updateResult) => {
            if (updateErr) {
                return res.status(500).json({ error: 'Erro no servidor' });
            }
            res.json({ message: 'Quantidade de pratos iguais alterada' });
        });
      } else {
        // Se o prato não existir, insira um novo registro
        const insertSql = 'INSERT INTO trocas (idUser, idPratos, qtdPratos) VALUES (?, ?, ?)';
        dbase.query(insertSql, [idUser, idPrato, qtdPrato], (insertErr, insertResult) => {
          if (insertErr) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Prato adicionado na lista de trocas' });
        });
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

//getUsers - Busca os utilizadores
app.get('/getUsers', (req, res) => {
  const sql = 'SELECT id,nome FROM users WHERE id != ?';

  dbase.query(sql, [idUser], (err, result) => {
    if (err) {
      console.error('Erro ao obter os users:', err);
      return res.status(500).json({ error: 'Erro no servidor ao obter users' });
    }
    const usersData = result.map(user => {
      return {
        id: user.id,
        nome: user.nome
      };
    });

    res.json(usersData);
  });
});

//getPratosUsers - Busca os pratos dos utilizadores
app.get('/getPratosUsers', (req, res) => {
  const idUserEscolhido = req.query.idUserEscolhido; // Você pode passar o idUser como um parâmetro de consulta

  if (!idUserEscolhido) {
    return res.status(400).json({ error: 'Parâmetro idUser ausente' });
  }

  const sql = 'SELECT idPratos, qtdPratos FROM trocas WHERE idUser = ?';

  dbase.query(sql, [idUserEscolhido], (err, result) => {
    if (err) {
      console.error('Erro ao obter os pratos dos usuários:', err);
      return res.status(500).json({ error: 'Erro no servidor ao obter pratos dos usuários' });
    }

    const pratosData = result.map(prato => {
      return {
        idPratos: prato.idPratos,
        qtdPratos: prato.qtdPratos
      };
    });
    res.json(pratosData);
  });
});

//postTrocarPratosidUser- diminui os pratos do lado do idUser
app.post('/postTrocarPratosidUser', (req, res) => {
  const { idPrato, idUserEscolhido } = req.body;
  //console.log(idPrato, idUserEscolhido, idUser);

  const sql = 'SELECT idPratos, qtdPratos FROM trocas WHERE idUser = ? ORDER BY qtdPratos DESC LIMIT 1';
  dbase.query(sql, [idUser], (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta SQL:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }
      
    // Verifica se há resultados na consulta
    if (result.length > 0) {
      // O resultado é o idPrato com a maior qtdPrato
      const idPratoComMaisQtd = result[0].idPratos;
      idPratoTrocar = result[0].idPratos;
      if (result[0].qtdPratos > 1 ) {
        const sqlUpdateTrocas = 'UPDATE trocas SET qtdPratos = qtdPratos - 1 WHERE idUser = ? AND idPratos = ?';
        dbase.query(sqlUpdateTrocas, [idUser, idPratoComMaisQtd], (errUpdate, resultUpdate) => {
          if (errUpdate) {
            console.error('Erro ao executar o UPDATE SQL:', errUpdate);
            res.status(500).send('Erro interno do servidor');
            return;
          }
          //console.log(idPratoComMaisQtd);
          // Atualize a coluna qtdPrato na tabela users_pratos
          const sqlUpdatePratos = 'UPDATE users_pratos SET qtdPrato = qtdPrato - 1 WHERE idUser = ? AND idPratos = ?';
          dbase.query(sqlUpdatePratos, [idUser, idPratoComMaisQtd], (errUpdatePratos, resultUpdatePratos) => {
            if (errUpdatePratos) {
              console.error('Erro ao executar o UPDATE SQL:', errUpdatePratos);
              res.status(500).send('Erro interno do servidor');
              return;
            }
            //console.log('Update Pratos realizado com sucesso para idPrato:', idPratoComMaisQtd);
            res.json({ message: 'Troca realizada', idPratoComMaisQtd, idUserEscolhido });
          });
        });
      } else if (result[0].qtdPratos == 1) {
        const sqlDeleteTrocas = 'DELETE FROM trocas WHERE idUser = ? AND idPratos = ?';
        dbase.query(sqlDeleteTrocas, [idUser, idPratoComMaisQtd], (errUpdate, resultUpdate) => {
          if (errUpdate) {
            console.error('Erro ao executar o UPDATE SQL:', errUpdate);
            res.status(500).send('Erro interno do servidor');
            return;
          }
          //console.log(idPratoComMaisQtd);
          // Atualize a coluna qtdPrato na tabela users_pratos
          const sqlDeletePratos = 'DELETE FROM users_pratos WHERE idUser = ? AND idPratos = ?';
          dbase.query(sqlDeletePratos, [idUser, idPratoComMaisQtd], (errUpdatePratos, resultUpdatePratos) => {
            if (errUpdatePratos) {
              console.error('Erro ao executar o UPDATE SQL:', errUpdatePratos);
              res.status(500).send('Erro interno do servidor');
              return;
            }
            //console.log('Update Pratos realizado com sucesso para idPrato:', idPratoComMaisQtd);
            res.json({ message: 'Troca realizada', idPratoComMaisQtd });
          });
        });
      }
    } else {
      //console.log('Nenhum resultado encontrado para o idUser:', idUser);
      res.json({ message: 'Não tem prato para trocar' });
    }
  });
});

//postTrocarPratosidEscolhido- diminui os pratos do lado do idEscolhido
app.post('/postTrocarPratosidEscolhido', (req, res) => {
  const { idPrato, idUserEscolhido } = req.body;
  //console.log(idPrato, idUserEscolhido);

  const sql = 'SELECT idPratos, qtdPratos FROM trocas WHERE idUser = ? AND idPratos = ?';
  dbase.query(sql, [idUserEscolhido, idPrato], (err, result) => {
    if (err) {
      console.error('Erro ao executar a consulta SQL:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    // Verifica se há resultados na consulta
    if (result.length > 0) {
      // O resultado é o idPrato com a maior qtdPrato
      if (result[0].qtdPratos > 1 ) {
        const sqlUpdateTrocas = 'UPDATE trocas SET qtdPratos = qtdPratos - 1 WHERE idUser = ? AND idPratos = ?';
        dbase.query(sqlUpdateTrocas, [idUserEscolhido, idPrato], (errUpdate, resultUpdate) => {
          if (errUpdate) {
            console.error('Erro ao executar o UPDATE SQL:', errUpdate);
            res.status(500).send('Erro interno do servidor');
            return;
          }
          //console.log('Update Trocas realizado com sucesso para idPrato:', idPratoComMaisQtd);
          // Atualize a coluna qtdPrato na tabela users_pratos
          const sqlUpdatePratos = 'UPDATE users_pratos SET qtdPrato = qtdPrato - 1 WHERE idUser = ? AND idPratos = ?';
          dbase.query(sqlUpdatePratos, [idUserEscolhido, idPrato], (errUpdatePratos, resultUpdatePratos) => {
            if (errUpdatePratos) {
              console.error('Erro ao executar o UPDATE SQL:', errUpdatePratos);
              res.status(500).send('Erro interno do servidor');
              return;
            }
            //console.log('Update Pratos realizado com sucesso para idPrato:', idPrato);
            res.json({ message: 'Troca realizada' });
          });
        });
      } else if (result[0].qtdPratos == 1) {
        const sqlDeleteTrocas = 'DELETE FROM trocas WHERE idUser = ? AND idPratos = ?';
        dbase.query(sqlDeleteTrocas, [idUserEscolhido, idPrato], (errUpdate, resultUpdate) => {
          if (errUpdate) {
            console.error('Erro ao executar o UPDATE SQL:', errUpdate);
            res.status(500).send('Erro interno do servidor');
            return;
          }
          //console.log('Update Trocas realizado com sucesso para idPrato:', idPratoComMaisQtd);
          // Atualize a coluna qtdPrato na tabela users_pratos
          const sqlDeletePratos = 'DELETE FROM users_pratos WHERE idUser = ? AND idPratos = ?';
          dbase.query(sqlDeletePratos, [idUserEscolhido, idPrato], (errUpdatePratos, resultUpdatePratos) => {
            if (errUpdatePratos) {
              console.error('Erro ao executar o UPDATE SQL:', errUpdatePratos);
              res.status(500).send('Erro interno do servidor');
              return;
            }
            //console.log('Update Pratos realizado com sucesso para idPrato:', idPrato);
            res.json({ message: 'Troca realizada' });
          });
        });
      }
    } else {
      //console.log('Nenhum resultado encontrado para o idUser:', idUser);
      res.json({ message: 'Não tem prato para trocar' });
    }
  });
});

//postPratosTrocar - atualiza a quantidade se tiver esse prato quando troca, se não, adiciona
app.post('/postPratosTrocar', (req, res) => {
  const { idUserEscolhido, idPratoTrocar} = req.body;
  //console.log("id escolhido:", idUserEscolhido);
  //console.log("idPratoTrocar:", idPratoTrocar);
    // Verifique se o jogador já possui este prato associado
    const sql = 'SELECT * FROM users_pratos WHERE idUser = ? AND idPratos = ?';
    dbase.query(sql, [idUserEscolhido, idPratoTrocar], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        // O jogador já possui o prato na tabela "users_pratos"
        // Atualize a coluna quantidade
        const updateSql = 'UPDATE users_pratos SET qtdPrato = qtdPrato + 1 WHERE idUser = ? AND idPratos = ?';
        dbase.query(updateSql, [idUserEscolhido, idPratoTrocar], (updateErr, updateResult) => {
            if (updateErr) {
                return res.status(500).json({ error: 'Erro no servidor' });
            }
            res.json({ message: 'Quantidade de pratos iguais alterada' });
        });
      } else {
        // Se o prato não existir, insira um novo registro
        const insertSql = 'INSERT INTO users_pratos (idUser, idPratos, qtdPrato) VALUES (?, ?, 1)';
        dbase.query(insertSql, [idUserEscolhido, idPratoTrocar], (insertErr, insertResult) => {
            if (insertErr) {
                return res.status(500).json({ error: 'Erro no servidor' });
            }
            res.json({ message: 'Novo prato adicionado' });
        });
      }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})