let idUser;

const express = require('express')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcrypt');

const app = express()
const port = 4000

const dbase = mysql.createConnection({ //Conecta ao BD
  host:"localhost",
  port: "3306",
  user:"root",
  password:"",
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
        const upSql = 'UPDATE users_chefs SET idChef = ? WHERE idUser = ?';
        dbase.query(upSql, [chefId, idUser], (err, result) => {
          if (err) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e chefe atualizada com sucesso' });
        });
      } else {
        // O jogador não possui registros na tabela "users_chefs"
        // Insira um novo registro com idUser e idChef
        const inSql = 'INSERT INTO users_chefs (idUser, idChef) VALUES (?, ?)';
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
        // Atualize o idAjudante correspondente
        const upSql = 'UPDATE users_ajudantes SET idAjudante = ? WHERE idUser = ?';
        dbase.query(upSql, [ajudanteId, idUser], (updateErr, updateResult) => {
          if (updateErr) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e ajudante atualizada com sucesso' });
        });
      } else {
        // O jogador não possui registros na tabela
        // Insira um novo registro com idUser e idAjudante
        const inSql = 'INSERT INTO users_ajudantes (idUser, idAjudante) VALUES (?, ?)';
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
    //Pegar todos os dados da tabela users_ajudantes faz uma ligação com a tabela funcionarios em que idAjudante = idFuncionario onde idUser foi igual o passadp
    const sql = `SELECT * FROM users_ajudantes u JOIN funcionarios f ON u.idAjudante = f.idFuncionario WHERE u.idUser = ?;`;

    dbase.query(sql, [idUser], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        if (results.length > 0) {
          const tempoPreparo = results[0].tempoPreparo;
          const valor = results[0].valor;
          const tipoFuncionario = results[0].tipoFuncionario;
          res.json({ tipoFuncionario, tempoPreparo, valor});
          //console.log(tempoPreparo, valor)
        } else {
          //res.status(404).json({ error: 'Usuário não tem um ajudante associado' });
          res.json('Usuário não tem um ajudante associado' );
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
    //Pegar todos os dados da tabela users_chefs faz uma ligação com a tabela funcionarios em que idChef = idFuncionario onde idUser foi igual o passadp
    const sql = `SELECT * FROM users_chefs u JOIN funcionarios f ON u.idChef = f.idFuncionario WHERE u.idUser = ?;`;

    dbase.query(sql, [idUser], (error, results) => {
      if (error) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        if (results.length > 0) {
          const lucro = results[0].lucro;
          const valor = results[0].valor;
          const tipoFuncionario = results[0].tipoFuncionario;
          res.json({ tipoFuncionario, lucro, valor});
          //console.log(tipoFuncionario,lucro, valor)
        } else {
          //res.status(404).json({ error: 'Usuário não tem chef associado' });
          res.json('Usuário não tem chef associado');
        }
      }
    });
  } else {
    res.status(401).json({ error: 'Usuário não autenticado' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})