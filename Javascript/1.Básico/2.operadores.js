// Variáveis
let numero = 2;
let numero2 = 4;
let aux;

// Operações matemáticas
// Soma
console.log(numero + numero2);

// Subtração
console.log(numero - numero2);

// Multiplicação
console.log(numero * numero2);

// Divisão
console.log(numero / numero2);

// Resto da divisão
console.log(numero % numero2);

// Atribuição
// Atribuindo um novo valor à variável "numero"
numero = 25;
console.log(numero);

// Comparação
// Comparação que ignora o tipo da variável (loose equality)
aux = numero == "25"; //VERDADEIRO
console.log(aux);

// Comparação que considera o tipo da variável (strict equality)
aux = numero === "25"; //FALSO
console.log(aux);
