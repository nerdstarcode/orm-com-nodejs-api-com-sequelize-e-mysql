const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000

app.get('/teste', (req,res)=> res
  .status(200)
  .send({mensagem: 'Bora billl'})
)

app.listen(port, ()=> console.log(`servidor está rodando na porta ${port}`))
module.exports = app;

// npm install sequelize sequelize-cli path || npm install mysql2 || npm install --save-dev nodemon