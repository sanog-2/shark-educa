const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Use o body-parser para processar dados JSON nas solicitações POST e PUT
app.use(bodyParser.json());

const todos = [
  { id: 1, task: "primeiro objeto" },
  { id: 2, task: "curso shark educa" },
  { id: 3, task: "estudar node.js" },
  { id: 4, task: "estudar python" },
];

//Rota POST para adicionar uma nova tarefa
app.post('/todos', (req, res) => {
  const newTudo = req.body;
  todos.push(newTudo);
  res.status(201).json(newTudo);
});

app.get('/todos', (req, res) => {
  res.json(todos);
});

// Rota GET para obter todas as tarefas
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
  });

  app.get('/login', (req, res) => {
    res.send('Tela de login');
  });

  //Rota PUT para atualizar uma tarefa pelo ID
  app.put('/todos/:id', (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const updatedTask = req.body;

    const index = todos.findIndex(todo => todo.id === idToUpdate);

    if(index !== -1) {
      todos[index] = updatedTask;
      res.json(updatedTask);
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada'});
    }
  });

  //Rota DELETE para excluir uma tarefa pelo ID
  app.delete('/todos/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === idToDelete);

    if(index !== -1) {
      todos.splice(index, 1);
      res.sendStatus(204)
    } else {
      res.status(404).json({ error: 'Tarefa não encontrada'});
    }
  });

  app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
  });