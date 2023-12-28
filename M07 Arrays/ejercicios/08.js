function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let newArr = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] % 2 === 0) {
      newArr.push(array[i]);
    }
  };
  return newArr;
}

module.exports = filtrarNumerosPares;
