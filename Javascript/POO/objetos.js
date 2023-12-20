//Criando um objeto const, ou seja imutavel
const pessoa = {
  nome: 'Murilo L. F. de Oliveira',
  idade: 22,
  sexo: "Masculino",

  descrever: function(){
    console.log("Meu nome é " + this.nome + " minha idade é " + this.idade);
  },

  descreverAltura: function(){
    console.log(`Minha altura é ${this.altura}`);
  }
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

//Exibindo atributo especifico
console.log(pessoa.nome);

pessoa.descreverAltura();