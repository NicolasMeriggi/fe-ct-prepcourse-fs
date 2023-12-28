function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  const resultado = array.map((numero, indice) => {
    return numero * indice;
  })
  return resultado;
}

module.exports = multiplicarElementosPorIndice;
