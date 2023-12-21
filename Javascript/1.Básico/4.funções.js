// Função para calcular o Índice de Massa Corporal (IMC)
function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

// Função para classificar o IMC
function classificarImc(imc) {
  if (imc <= 18.5)
    return "Magreza";
  if (imc <= 24.9)
    return "Normal";
  if (imc <= 29.9)
    return "Sobrepeso";
  if (imc <= 39.9)
    return "Obesidade";
  return "Obesidade Grave";
}

// Função para apresentar a classificação do IMC
function apresentarClassificacao(imc, classificacao) {
  console.log("IMC: " + imc.toFixed(2));
  console.log("Classificação: " + classificacao);
}

// Função principal
function main() {
  // Dados de exemplo
  const peso = 120;
  const altura = 1.80;

  // Calcular IMC
  const imc = calcularImc(peso, altura);

  // Classificar IMC
  const classificacao = classificarImc(imc);

  // Apresentar resultado
  apresentarClassificacao(imc, classificacao);
}

// Chamar a função principal
main();
