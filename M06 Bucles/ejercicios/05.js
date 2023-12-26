function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (typeof valor === "string" || typeof valor === "number"|| valor === false) {
    return "Soy falso";
  } else if (valor === true) {
    return "Soy verdadero";
  };
}

module.exports = esVerdadero;
