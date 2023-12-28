function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let multiplo = undefined;

  for (let i = 0; i < secuencia.length; i++) {
    if (secuencia[i] % n === 0) {
      multiplo = secuencia[i];
      break; // Detiene el bucle una vez que se encuentra el múltiplo
    }
  }

  return multiplo;
}

module.exports = encontrarPrimerMultiploDeN;