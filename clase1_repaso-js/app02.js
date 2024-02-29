/* 1 */
let subject = "Programación";
let year = 2024;

/* EJERCICIO 2 */
let favoriteSites = ["www.google.com", "www.twitter.com", "www.instagram.com", "www.facebook.com"];

console.log(favoriteSites);
favoriteSites.pop();
console.log(favoriteSites);
favoriteSites.push("www.tiktok.com");
console.log(favoriteSites);

/* EJERCICIO 3 */
let person = {
  name: "Pepe",
  lastName: "Pepas",
  age: 18,
  sites: favoriteSites
};

console.log("Hola, mi nombre es " + person.name + " " + person.lastName + " y tengo " + person.age + " años.")

/* EJERCICIO 4 */
console.log(person.sites);
console.log(person.sites[1]);

/* EJERCICIO 5 */
let cursos = [
  {
    nombre: "C1",
    descripcion: "La comision 1",
    alumnos: 43,
    diasDeCursada: ["lunes"],
  },
  {
    nombre: "C2",
    descripcion: "La comision 2",
    alumnos: 25,
    diasDeCursada: ["lunes"],
  },
  {
    nombre: "C3",
    descripcion: "La comision 3",
    alumnos: 32,
    diasDeCursada: ["lunes"],
  },
  {
    nombre: "C4",
    descripcion: "La comision 4",
    alumnos: 19,
    diasDeCursada: ["lunes"],
  },
  {
    nombre: "C5",
    descripcion: "La comision 5",
    alumnos: 28,
    diasDeCursada: ["lunes"],
  },
  {
    nombre: "C6",
    descripcion: "La comision 6",
    alumnos: 15,
    diasDeCursada: ["lunes"],
  },
];

console.log(cursos[2]);
console.log(cursos[3].nombre);
cursos[2].diasDeCursada.push("miercoles");
console.log(cursos[2].diasDeCursada);

for (let i = 0; i < cursos.length; i++) {
  cursos[i].alumnos = [
    {
      nombre: "Pepe",
      apellido: "Pepas"
    },
    {
      nombre: "Pepo",
      apellido: "Pepos"
    },
    {
      nombre: "Pepi",
      apellido: "Pepis"
    },
  ];
}

console.log(cursos[2].alumnos[0]);