function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length === 0) {
    return 0;
  };

  const newArr = Array.from(arguments);
  const producto = newArr.reduce((acumulador, valor) => acumulador * valor, 1);
  return producto;
}

module.exports = multiplicarArgumentos;
