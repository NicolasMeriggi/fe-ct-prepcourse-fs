function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  nuevoArr = [];
  for (var i = 0; i < array.length; i++){
    nuevoArr[i] = array[i] * 2;
  }
  return nuevoArr;
}

module.exports = duplicarElementos;
