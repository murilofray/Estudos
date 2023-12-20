class Pessoa{
  nome;
  peso;
  imc;

  constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    this.imc = this.calcularImc();
  }

  calcularImc(){
    return this.peso / (this.altura*this.altura);
  }

  classificarImc(){
    if(this.imc <= 18.5)
    return "Magreza";
    if(this.imc <= 24.9)
      return "Normal";
    if(this.imc <= 29.9)
      return "Sobrepeso";
    if(this.imc <= 39.9)
      return "Obesidade";
    return "Obesidade Grave";
  }

  exibirClassificacao(){
    console.log("Nome: " + this.nome);
    console.log("IMC: " + this.imc.toFixed(2));
    console.log("Classificação: " + this.classificarImc());
  }
}

 (function (){
    const murilo = new Pessoa("murilo",120,1.80);
    const brenno = new Pessoa("brenno",78,1.79);
    murilo.exibirClassificacao();
    brenno.exibirClassificacao();
  })();