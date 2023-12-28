function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  if (Array.isArray(array) && array.length > 0) {
    // Generar un índice aleatorio utilizando Math.random()
    const indiceAleatorio = Math.floor(Math.random() * array.length);

    // Devolver el elemento correspondiente al índice aleatorio
    return array[indiceAleatorio];
  } else {
    // Si el array no es válido o está vacío, devolver undefined
    return undefined;
  }
}

module.exports = obtenerElementoAleatorio;
