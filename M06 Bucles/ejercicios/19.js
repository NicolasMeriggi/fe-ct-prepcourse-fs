function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  if (n > 0) {
    let suma = 0;
    for (var i = 1; i <= n; i++){
      suma += i;
    };
    return suma;
  } else if (n === 0) {
    return 0;
  };
}

module.exports = sumarHastaN;
