/* 9 */
const autos = require('./db/index.js');

/* 10 */
function describirse(numero) {
  if (autos.lista[numero]) {
    return `Hola soy el auto marca ${autos.lista[numero].marca}, modelo ${autos.lista[numero].modelo}, fabricado en el año ${autos.lista[numero].anio} y de color ${autos.lista[numero].color}.`;
  } else {
    return `No hay tantos autos. Por favor elija un número entre 0 y ${autos.lista.length}`;
  }
}

console.log(describirse(3));

/* 11 */
for (let index = 0; index < autos.lista.length; index++) {
  console.log(describirse(index));
}

/* 12 */
function porColor(color) {
  let autosPorColor = [];
  for (let index = 0; index < autos.lista.length; index++) {
    if (autos.lista[index].color.toLowerCase() === color.toLowerCase()) {
      autosPorColor.push(autos.lista[index]);
    }
  }

  if (autosPorColor.length > 0) {
    return autosPorColor;
  } else {
    return `No contamos con autos de color: ${color}.`;
  }
}

const color = "rojo";
console.log(`Autos de color ${color}:`, porColor(color));

/* 13 */
function porMarca(marca) {
  let autosPorMarca = [];
  for (let index = 0; index < autos.lista.length; index++) {
    if (autos.lista[index].marca.toLowerCase() === marca.toLowerCase()) {
      autosPorMarca.push(autos.lista[index]);
    }
  }

  if (autosPorMarca.length > 0) {
    return autosPorMarca;
  } else {
    return `No contamos con autos de marca ${marca}.`;
  }
}

const marca = "renault";
console.log(`Autos de marca ${marca}: `, porMarca(marca));

/* 14 */
function porAnio(anio) {
  let autosPorAnio = [];
  for (let index = 0; index < autos.lista.length; index++) {
    if (autos.lista[index].anio === anio) {
      autosPorAnio.push(autos.lista[index]);
    }
  }

  if (autosPorAnio.length > 0) {
    return autosPorAnio;
  } else {
    return `No contamos con autos del año ${anio}.`;
  }
}

const anio = 2024;
console.log(`Autos del año ${anio}:`, porAnio(anio));