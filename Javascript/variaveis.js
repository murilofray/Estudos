// let é uma variavel comum que pode ser qualquer tipo
let numero = 20;
// const é uma constante ("Valor não pode ser alterado")
const pi = 3.14
// comando para exibir no terminal
console.log("Hello Word")
//Exercicio inciante
const precoCombustivel = 6.20;
const kmPorLitro = 20;
const DistanciaKm = 350;

const litrosConsumido = DistanciaKm / kmPorLitro
const valorGasto = litrosConsumido * precoCombustivel

//variavel.toFixerd() Recebe um numero, retornar uma string, dentro dos ()
//ele recebe o numero de casas deciamis desejadas
console.log(valorGasto.toFixed(2))
 