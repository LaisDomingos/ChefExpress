let idUser;

const express = require('express')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const bcrypt = require('bcrypt');

const app = express()
const port = 4000

const dbase = mysql.createConnection({
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

app.post('/postRegistrar', (req, res) => {
  const { userRValue, emailValue, passRValue } = req.body;

  // Verifique se já existe um usuário com o mesmo nome
  const checkUserQuery = 'SELECT * FROM users WHERE nome = ?';
  dbase.query(checkUserQuery, [userRValue], (checkErr, checkResult) => {
    if (checkErr) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (checkResult.length > 0) {
      return res.json({ message: 'Já existe um usuário com este nome' });
    }

    // Se não houver um usuário com o mesmo nome, prossiga com a inserção
    bcrypt.hash(passRValue, 10, (hashErr, hash) => {
      if (hashErr) {
        return res.status(500).json({ error: 'Erro ao criptografar a senha' });
      }

      const insertQuery = 'INSERT INTO users (nome, email, password) VALUES (?, ?, ?)';
      dbase.query(insertQuery, [userRValue, emailValue, hash], (err, result) => {
        if (insertErr) {
          return res.status(500).json({ error: 'Erro no servidor' });
        }

        console.log('Registro bem-sucedido');
        res.json({ message: 'Registro bem-sucedido' });
      });
    });
  });
});

app.post('/postLogin', (req, res) => {
  const { userValue, passValue } = req.body;

  // Verifique se o usuário existe
  const checkUserQuery = 'SELECT * FROM users WHERE nome = ?';
  dbase.query(checkUserQuery, [userValue], (checkErr, checkResult) => {
    if (checkErr) {
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (checkResult.length === 0) {
      return res.json({ message: 'Usuário não encontrado' });
    }

    // Verifique se a senha está correta
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

app.get("/getDinheiro", (req, res) => {
  // Certifique-se de que idUser está definido antes de usar
  if (idUser) {
    let sql = "SELECT dinheiro FROM users WHERE id = ?";
    dbase.query(sql, [idUser], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        if (result.length > 0) {
          const dinheiro = result[0].dinheiro;
          res.json({ dinheiro, idUser});
          //console.log(dinheiro, idUser)
        } else {
          res.status(404).json({ error: 'Usuário não encontrado' });
        }
      }
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não definido' });
  }
});

app.post('/postChef', (req, res) => {
  const { chefId } = req.body;
  
  if (idUser) {
    // Verifique se o jogador já possui este chefe associado
    const checkAssociationQuery = 'SELECT * FROM users_chefs WHERE idUser = ?';
    dbase.query(checkAssociationQuery, [idUser], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        // O jogador já possui registros na tabela "users_chefs"
        // Atualize o idChef correspondente, se existir
        const updateAssociationQuery = 'UPDATE users_chefs SET idChef = ? WHERE idUser = ?';
        dbase.query(updateAssociationQuery, [chefId, idUser], (updateErr, updateResult) => {
          if (updateErr) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e chefe atualizada com sucesso' });
        });
      } else {
        // O jogador não possui registros na tabela "users_chefs"
        // Insira um novo registro com idUser e idChef
        const insertAssociationQuery = 'INSERT INTO users_chefs (idUser, idChef) VALUES (?, ?)';
        dbase.query(insertAssociationQuery, [idUser, chefId], (err, result) => {
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
app.post('/postAjudante', (req, res) => {
  const { ajudanteId } = req.body;
  
  if (idUser) {
    // Verifique se o jogador já possui este chefe associado
    const checkAssociationQuery = 'SELECT * FROM users_ajudantes WHERE idUser = ?';
    dbase.query(checkAssociationQuery, [idUser], (checkErr, checkResult) => {
      if (checkErr) {
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (checkResult.length > 0) {
        // O jogador já possui registros na tabela "users_chefs"
        // Atualize o idChef correspondente, se existir
        const updateAssociationQuery = 'UPDATE users_ajudantes SET idAjudante = ? WHERE idUser = ?';
        dbase.query(updateAssociationQuery, [ajudanteId, idUser], (updateErr, updateResult) => {
          if (updateErr) {
            return res.status(500).json({ error: 'Erro no servidor' });
          }
          res.json({ message: 'Associação entre jogador e ajudante atualizada com sucesso' });
        });
      } else {
        // O jogador não possui registros na tabela "users_chefs"
        // Insira um novo registro com idUser e idChef
        const insertAssociationQuery = 'INSERT INTO users_ajudantes (idUser, idAjudante) VALUES (?, ?)';
        dbase.query(insertAssociationQuery, [idUser, ajudanteId], (err, result) => {
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



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})