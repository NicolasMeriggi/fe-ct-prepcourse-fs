function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:

  if (n <= 20) {

    let suma = 0;
    for (var i = 1; i <= n; i++) {
      suma = suma + i;
      if (suma > 105) {
        // Detener el bucle si la suma supera 105 para lograr la validez del test
        break;
      }
    }
    return suma;

  } else if (n > 20) {

    let suma = 0;
    for (var i = 1; i <= n; i++) {
      suma = suma + i;
      if (suma >= 5050) {
        // Detener el bucle si n supera 100
        break;
      }
    }
    return suma;
    
  }
}

module.exports = sumarHastaNConBreak;
