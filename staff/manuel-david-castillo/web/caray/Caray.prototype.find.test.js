describe("TEST find");

describe("CASE with people");

const people = new Caray(
  { name: "Pepito" },
  { name: "Manolito" },
  { name: "Juanito" },
  { name: "Antoñito" }
);

const person = people.find((person) => person.name === "Manolito");

console.log(person); /* {name: Manolo} */

const person2 = people.find((person) => person.name === "Juanito");

console.log(person2); /* {name: Juanito} */
