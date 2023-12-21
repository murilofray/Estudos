
//Listas são heterogeneas
const alunos = ['João', 10, 'Marina'];

//Exibe todos elementos da listas
console.log(alunos);

//Exibe posições especificas começa em 0
console.log(alunos[1]);

//Adicionando na Lista
alunos.push('Marcelo');
console.log(alunos);
//OU
//Nesse caso como marcelo estava na 3 posição ja ele é substituido
alunos[3] = 'Paulo';
console.log(alunos);

//Remover o ultimo && o pop retorna o elemento retirado
alunos.pop();
console.log(alunos);

//Remover de uma posição especifica
// lista.splice(posição inicial, quantos elementos deseja remover a partir da posição inicial)
alunos.splice(0,1);

console.log(alunos);

// lista.lenght pega o tamanho da lista (começa em 1, entao o ultimo elemento esta na posição lenght-1)
// apagando toda lista
alunos.splice(0,alunos.length);
console.log(alunos);