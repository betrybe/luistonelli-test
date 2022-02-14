const express = require('express');
const usersController = require('../controllers/users');
const db = require('../models/db');

const app = express();

module.exports = app; // Não remover esse end-point, ele é necessário para o avaliador

app.get('/', (request, response) => { // Não remover esse end-point, ele é necessário para o avaliador
  response.send();
});

app.use(express.json());

const users = [];

app.post('/users', usersController.getUsers);

app.get('/recipes', (req, res) => { // cria uma rota para as receitas
  res.send('receitas...');
});

app.listen(3000, () => {
  console.log('Ta rolando...');
});// nada depois do liste