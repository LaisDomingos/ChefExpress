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



app.get("/getDinheiro",(req,res)=>{
  //res.send({"resposta":text});

  let sql="SELECT * FROM users";
  dbase.query(sql, (err,result)=>{
    if (err) throw err;

    //console.log(result);
    res.send(result);
  })
})


app.post('/postRegistrar', (req, res) => {
  const { userRValue, emailValue, passRValue } = req.body;

  // Verifique se já existe um usuário com o mesmo nome
  const checkUserQuery = 'SELECT * FROM users WHERE nome = ?';
  dbase.query(checkUserQuery, [userRValue], (checkErr, checkResult) => {
    if (checkErr) {
      console.error('Erro na verificação do usuário:', checkErr);
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (checkResult.length > 0) {
      console.log('Usuário com mesmo nome já existe');
      return res.status(400).json({ error: 'Já existe um usuário com este nome' });
    }

    // Se não houver um usuário com o mesmo nome, prossiga com a inserção
    bcrypt.hash(passRValue, 10, (hashErr, hash) => {
      if (hashErr) {
        console.error('Erro na criptografia da senha:', hashErr);
        return res.status(500).json({ error: 'Erro ao criptografar a senha' });
      }

      const insertQuery = 'INSERT INTO users (nome, email, password) VALUES (?, ?, ?)';
      dbase.query(insertQuery, [userRValue, emailValue, hash], (insertErr, result) => {
        if (insertErr) {
          console.error('Erro na inserção no banco de dados:', insertErr);
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
      console.error('Erro na verificação do usuário:', checkErr);
      return res.status(500).json({ error: 'Erro no servidor' });
    }

    if (checkResult.length === 0) {
      console.log('Usuário não encontrado');
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    // Verifique se a senha está correta
    const user = checkResult[0];
    bcrypt.compare(passValue, user.password, (hashErr, passwordMatch) => {
      if (hashErr) {
        console.error('Erro na comparação de senhas:', hashErr);
        return res.status(500).json({ error: 'Erro no servidor' });
      }

      if (!passwordMatch) {
        console.log('Senha incorreta');
        return res.status(400).json({ error: 'Senha incorreta' });
      }

      console.log('Login bem-sucedido');
      res.json({ message: 'Login bem-sucedido' });
    });
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})