const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

// Rota GET para obter todas as tarefas
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });

  app.get('/login', (req, res) => {
    res.send('Tela de login');
  });

  app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
  });