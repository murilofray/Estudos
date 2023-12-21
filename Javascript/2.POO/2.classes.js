// Definindo a classe Pessoa
class Pessoa {
  // Atributos da classe
  nome;
  idade;
  altura;

  // Construtor da classe
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  // Método para descrever a pessoa
  descrever() {
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, e minha altura é ${this.altura} metros.`);
  }
}

// Instanciando objetos da classe Pessoa
const murilo = new Pessoa();
murilo.nome = "Murilo";
murilo.altura = 1.80;
murilo.idade = 22;

const felipe = new Pessoa();
felipe.nome = "Felipe";
felipe.altura = 1.65;
felipe.idade = 22;

// Instanciando com construtor
const brenno = new Pessoa("Brenno", 20, 1.79);

// Exibindo os objetos criados
console.log(murilo);
console.log(felipe);
console.log(brenno);

// Chamando o método descrever de cada objeto
murilo.descrever();
felipe.descrever();
brenno.descrever();
