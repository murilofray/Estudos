// Criando um objeto constante (imutável)
const pessoa = {
  nome: 'Murilo L. F. de Oliveira',
  idade: 22,
  sexo: "Masculino",

  // Método para descrever a pessoa
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
  },

  // Método para descrever a altura
  descreverAltura: function () {
    console.log(`Minha altura é ${this.altura}`);
  }
};

// Exibindo o objeto pessoa
console.log(pessoa);

// Adicionando atributos dinamicamente
pessoa.altura = 1.80;
console.log(pessoa);

// Removendo atributos
delete pessoa.sexo;
console.log(pessoa);

// Alterando atributos
pessoa.altura = 1.81;
console.log(pessoa);

// Exibindo um atributo específico
console.log(pessoa.nome);

// Chamando o método para descrever a altura
pessoa.descreverAltura();

// Acessando dinamicamente um atributo
const atributo = 'altura';
pessoa[atributo] = 1.80;
console.log(pessoa[atributo]);
