/* EJERCICIO 1 */
let idioma = "fr";

if (idioma === "es") {
  console.log("Hola Mundo ¡volvió JavaScript!");
} else if (idioma === "en") {
  console.log("Hello world, JavaScript is back!");
} else if (idioma === "de") {
  console.log("Hallo!");
} else if (idioma === "fr") {
  console.log("Alo monde, Javascript ha retournée!");
}

/* EJERCICIO 2 */
let diaSemana = "lunes";

if (diaSemana === "lunes") {
  console.log("Buen lunes!");
} else if (diaSemana === "martes") {
  console.log("El martes es el peor día de la semana.");
} else if (diaSemana === "miercoles") {
  console.log("Captain it's wednesday");
} else if (diaSemana === "jueves") {
  console.log("Dale que es jueves, falta poco");
} else if (diaSemana === "viernes") {
  console.log("Daleeeeeee");
}

/* EJERCICIO 3 */
let persona = {
  nombre: "Lio",
  apellido: "Messi",
  edad : "14",
  ciudad: "Rosario",
};

if (persona.edad < 18 && persona.ciudad === "") {
  console.log("Hola " + persona.nombre + " " + persona.apellido + " criatura viajera!");
}

if (persona.edad >= 18 && persona.ciudad === "") {
  console.log("Hola " + persona.nombre + " " + persona.apellido + " eminencia viajera!");
}

if (persona.edad < 18 && persona.ciudad !== "") {
  console.log("Hola mini " + persona.nombre + " " + persona.apellido + " de " + persona.ciudad + "!");
}

if (persona.edad >= 18 && persona.ciudad !== "") {
  console.log("Hola mayor " + persona.nombre + " " + persona.apellido + " de " + persona.ciudad + "!");
}

if (persona.nombre.length < 4) {
  console.log("Ay pero que nombre cortito!");
}

if (persona.ciudad === "Winterfell") {
  console.log("Winter is coming.");
}

/* Bucle FOR */
/* EJERCICIO 1 */
/* a */
for (let i = 0; i < 5; i++) {
  console.log("Practicando con el bucle for");
}

/* b */
for (let i = 0; i < 10; i++) {
  console.log(`La variable i tiene el valor ${i}`);
}

/* c */
for (let i = 0; i < 20; i+=2) {
  console.log(i)
}

/* d */
for (let i = 0; i < 250; i+=5) {
  console.log(i)
}

/* EJERCICIO 2 */
let base = 4;
let resultados = [];

for (let i = 0; i <= 10; i++) {
  resultados.push(base * i);

}
console.log(resultados);

/* EJERCICIO 3 */
let destinos = ["Japón", "Chaltén", "Perú", "Escocia", "Portugal"];

for (let i = 0; i < destinos.length; i++) {
  console.log("Mi destino " + (i+1) + " es: " + destinos[i]);
}

/* EJERCICIO 4 */
let notas = [85, 54, 76, 43, 98, 70, 64, 88, 32, 99];

// d
let cienNotas = [];
for (let i = 0; i < 100; i++) {
  cienNotas.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < cienNotas.length; i++) {
  console.log("Nota: " + cienNotas[i]);
  if (cienNotas[i] >= 90) {
    console.log("Nota alfabética: A");
  } else if (cienNotas[i] >= 80) {
    console.log("Nota alfabética: B");
  } else if (cienNotas[i] >= 70) {
    console.log("Nota alfabética: C");
  } else if (cienNotas[i] >= 65) {
    console.log("Nota alfabética: D");
  } else {
    console.log("Nota alfabética: F");
  }
}

/* EJERCICIO 5 */
let ganancias = [
  {
    mes: 1,
    saldo: -400,
  },
  {
    mes: 2,
    saldo: 278,
  },
  {
    mes: 3,
    saldo: -50,
  },
  {
    mes: 4,
    saldo: 1200,
  },
  {
    mes: 5,
    saldo: -16,
  },
  {
    mes: 6,
    saldo: 6500,
  },
  {
    mes: 7,
    saldo: -3000,
  },
  {
    mes: 8,
    saldo: 760,
  },
  {
    mes: 9,
    saldo: 488,
  },
  {
    mes: 10,
    saldo: -12,
  },
  {
    mes: 11,
    saldo: 8900,
  },
  {
    mes: 12,
    saldo: 200,
  },
];

let balance = 0;
let cantidadPositivos = 0;
for (let i = 0; i < ganancias.length; i++) {
  balance += ganancias[i].saldo;
  console.log("El mes " + ganancias[i].mes + " tuvo un saldo de " + ganancias[i].saldo);
  if (ganancias[i].saldo > 0) {
    console.log("El mes " + ganancias[i].mes + " fue positivo");
    cantidadPositivos++;
  } else {
    console.log("El mes " + ganancias[i].mes + " fue negativo");
  }
}
console.log("Balance total: " + balance);
console.log("Meses positivos: " + cantidadPositivos);

/* EJERCICIO 6 */
let personas = [
  {
      nombre: "Jon",
      apellido: "Snow",
      edad: 23,
      ciudad: "Winterfell"
  },
  {
      nombre: "Daenerys",
      apellido: "Targaryen",
      edad: 19
  },
  {
      nombre: "Arya",
      apellido: "Stark",
      edad: 12,
      ciudad: "Winterfell"
  },
  {
      nombre: "Tyrion",
      apellido: "Lannister",
      edad: 32,
      ciudad: "Casterly Rock"
  }
]

for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad < 18 && personas[i].ciudad === "") {
    console.log("Hola " + personas[i].nombre + " " + personas[i].apellido + " criatura viajera!");
  }

  if (personas[i].edad >= 18 && personas[i].ciudad === "") {
    console.log("Hola " + personas[i].nombre + " " + personas[i].apellido + " eminencia viajera!");
  }

  if (personas[i].edad < 18 && personas[i].ciudad !== "") {
    console.log("Hola mini " + personas[i].nombre + " " + personas[i].apellido + " de " + personas[i].ciudad + "!");
  }

  if (personas[i].edad >= 18 && personas[i].ciudad !== "") {
    console.log("Hola mayor " + personas[i].nombre + " " + personas[i].apellido + " de " + personas[i].ciudad + "!");
  }

  if (personas[i].nombre.length < 4) {
    console.log("Ay pero que nombre cortito!");
  }

  if (personas[i].ciudad === "Winterfell") {
    console.log("Winter is coming.");
  }
}