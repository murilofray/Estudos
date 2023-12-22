function gets(){
  return 10;
}

function print(texto){
  console.log(texto);
}
//Crio um objeto para exporta as funções
module.exports = { gets, print };