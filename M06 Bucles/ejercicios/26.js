function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  // Convertir los strings a minúsculas y eliminar espacios
  const cadena1 = str1.toLowerCase().replace(/ /g, "");
  const cadena2 = str2.toLowerCase().replace(/ /g, "");

  // Ordenar los caracteres de las cadenas
  const ordenCadena1 = cadena1.split("").sort().join("");
  const ordenCadena2 = cadena2.split("").sort().join("");

  // Comparar las cadenas ordenadas
  return ordenCadena1 === ordenCadena2;
}

module.exports = esAnagrama;
