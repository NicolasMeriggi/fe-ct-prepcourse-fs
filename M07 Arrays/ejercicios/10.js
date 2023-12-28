function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var elMasGrande = array[0];
  var indice = 0;
  for (var i = 1; i < array.length; i++){
    if (array[i] > elMasGrande) {
      elMasGrande = array[i];
      indice = i;
    };
  };
  return indice;
}

module.exports = encontrarIndiceMayor;
