// Criando a classe pessoa
class Pessoa {
  nome;
  idade;
  altura;

  descrever(){
    console.log("Meu nome é " + this.nome + " minha idade é " + this.idade);
  }
}

// Instanciando duas pessoa
const murilo = new Pessoa();
murilo.nome = "Murilo";
murilo.altura = 1.80;
murilo.idade = 22;

const felipe = new Pessoa();
felipe.nome = "Felipe";
felipe.altura = 1.65;
felipe.idade = 22;

console.log(murilo);
console.log(felipe);