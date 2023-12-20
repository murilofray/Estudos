//Criando um objeto const, ou seja imutavel
const pessoa = {
  nome: 'Murilo L. F. de Oliveira',
  idade: 22,
  sexo: "Masculino"
};

console.log(pessoa);

//Adicionando atributos
pessoa.altura = 1.80;
console.log(pessoa);

//Removendo atributos
delete pessoa.sexo;
console.log(pessoa);

//Alterando atributos
pessoa.altura = 1.81;
console.log(pessoa);