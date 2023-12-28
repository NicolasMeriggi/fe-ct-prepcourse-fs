function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (var i = 0; i < numeros.length; i++){
    const comparador = numeros[i];
    for (var x = i + 1; x < numeros.length; x++){
      if (comparador === numeros[x]) {
        return comparador;
      };
    };
  };
}

module.exports = encontrarElementoRepetido;