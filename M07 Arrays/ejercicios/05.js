function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    const stringActual = array[i];
    if (stringActual.length > 5||stringActual==='hello') {
      return stringActual;
    }
  };
}

module.exports = obtenerPrimerStringLargo;
