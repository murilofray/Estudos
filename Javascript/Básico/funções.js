function calcularImc(peso, altura){
  return peso / (altura*altura);
}

function classificarImc(imc)
{
  if(imc <= 18.5)
    return "Magreza";
  if(imc <= 24.9)
    return "Normal";
  if(imc <= 29.9)
    return "Sobrepeso";
  if(imc <= 39.9)
    return "Obesidade";
  return "Obesidade Grave";
}

function apresentarClassificacao(imc,classificacao)
{
  console.log("IMC: " + imc.toFixed(2));
  console.log("Classificação: " + classificacao);
}

function main(){
    const peso = 120;
    const altura = 1.80;
    const imc = calcularImc(peso,altura);
    const classificacao = classificarImc(imc);
    apresentarClassificacao(imc,classificacao);
}

main();
