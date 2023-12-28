function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((acumulador, numero) => {
    return acumulador + numero;
  }, 0);
  return suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;
