function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tablaDelSix = [];
  for (var i = 0; i <= 10; i++){
    tablaDelSix[i] = i * 6;
  };
  return tablaDelSix;
}

module.exports = tablaDelSeis;
