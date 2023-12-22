// Importando as funções do módulo 'funcoes'
const funcoes = require('./funcoes');

// Utilizando a função 'print' do módulo 'funcoes'
funcoes.print("Olá mundo");

// Importando funções específicas do módulo 'funcoes' utilizando desestruturação
const { gets, print } = require('./funcoes');

// Utilizando a função 'print' após a desestruturação
print("Hello World");