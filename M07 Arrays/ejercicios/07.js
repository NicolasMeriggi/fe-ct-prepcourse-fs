function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let newArr = [];
  for (var i = 0; i < array.length; i++){
    newArr[i] = array[i].toUpperCase();
  };
  return newArr;
}

module.exports = convertirStringAMayusculas;
