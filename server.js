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
          res.json({ dinheiro });
        } else {
          res.status(404).json({ error: 'Usuário não encontrado' });
        }
      }
    });
  } else {
    res.status(400).json({ error: 'ID do usuário não definido' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})