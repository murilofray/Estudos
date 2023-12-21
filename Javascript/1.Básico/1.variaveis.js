// Variáveis
// A palavra-chave "let" é usada para criar variáveis que podem ser alteradas
let numero = 20;

// A palavra-chave "const" é usada para criar constantes cujos valores não podem ser alterados
const pi = 3.14;

// Comando para exibir no terminal
console.log("Hello World");

// Exercício Inicial
// Dados do exercício
const precoCombustivel = 6.20; // Preço do combustível por litro
const kmPorLitro = 20; // Quilômetros por litro
const distanciaKm = 350; // Distância em quilômetros a ser percorrida

// Cálculos
const litrosConsumidos = distanciaKm / kmPorLitro; // Litros consumidos para a distância
const valorGasto = litrosConsumidos * precoCombustivel; // Valor gasto em reais

// Exibição do resultado com duas casas decimais
console.log(`O valor gasto para percorrer ${distanciaKm} km é R$ ${valorGasto.toFixed(2)}.`);
