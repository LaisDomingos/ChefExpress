const express = require('express')
var bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()
const port = 3000

const dbase = mysql.createConnection({
  host:"localhost",
  port: "3306",
  user:"root",
  password:"",
  database: "chefexpress_teste"
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

/*app.post("/postHello",(req,res)=>{
  console.log(req.body.text);
  text = req.body.text;
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})