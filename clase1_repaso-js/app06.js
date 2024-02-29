/* EJERCICIO 1 */
const edadMaxima = 95;
function calcularConsumo(edadActual, consumoPorDia, producto) {
  let consumoPendiente = ((95 - edadActual) * 365 * consumoPorDia);
  return `Necesitarás ${consumoPendiente} de ${producto} para que dure el resto de tu vida.`;
};

console.log(calcularConsumo(18, 2, "Sanguchitos"));

/* EJERCICIO 2 */
function cambiarElUltimo(array, dato) {
  array.pop();
  array.push(dato);
  return array;
}

console.log(cambiarElUltimo([1, 2, 3, 4, 5, 6], 18));

/* EJERCICIO 3 */
const libro = {
  nombre: "Harry Potter y El Príncipe Mestizo",
  genero: "Fantasía",
  cantidadDePalabras: 484000,
  paraAdultos: true,
  describirse: function() {
    return (`Nombre: ${libro.nombre} y género: ${libro.genero}`);
  },
  puedeLeerlo: function(edad) {
    if (edad >= 18) {
      return true;
    } else {
      return false;
    };
  }
};

console.log(libro);
console.log(libro.describirse());
console.log(libro.puedeLeerlo(26));

/* EJERCICIO 4 */
function calcularAniosPerrunos(edadPerro) {
  return edadPerro * 7;
}

console.log("Tu perro tiene " + calcularAniosPerrunos(7) + " años perrunos.");

/* EJERCICIO 5 */
function celsiusAFahrenheit(temperatura) {
  let temperaturaConvertida = temperatura * 9/5 + 32;
  return `${temperatura} °C son ${temperaturaConvertida} °F`;
}

console.log(celsiusAFahrenheit(26));

function fahrenheitACelsius(temperatura) {
  let temperaturaConvertida = (temperatura - 32) * 5/9;
  return `${temperatura} °F son ${temperaturaConvertida} °C`;
}

console.log(fahrenheitACelsius(78.8));