describe("TEST every");

describe("CASE with people");

const people2 = new Caray(
  {
    name: "Pepito Grillo",
    age: 30,
    origin: "Wonderland",
    colors: ["red", "blue", "yellow"],
    live: true,
  },
  {
    name: "Wendy Darling",
    age: 16,
    origin: "Wonderland",
    colors: ["pink", "skyblue"],
    live: true,
  },
  {
    name: "Peter Pan",
    age: 18,
    origin: "Wonderland",
    colors: ["green", "blue"],
    live: true,
  },
  {
    name: "James Hook",
    age: 40,
    origin: "Wonderland",
    colors: ["red", "black"],
    live: true,
  }
);

console.log(
  people2.every(function (person) {
    return person.live === true;
  })
); /* true */

console.log(
  people2.every(function (person) {
    return person.age === 40;
  })
); /* false */

console.log(
  people2.every(function (person) {
    return person.age;
  })
); /* true */
