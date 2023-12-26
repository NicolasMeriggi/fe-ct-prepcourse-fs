function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  if (mes < 1 || mes > 12) {
    return 0;
  }
  while (mes >= 1 && mes <= 12) {
    if (mes === 2) {
      return 28;
    } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
      return 31;
    } else { return 30 };
  };
}

module.exports = diasEnMes;
