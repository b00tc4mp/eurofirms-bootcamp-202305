/* Arreglar esto */

describe("TEST map");

describe("CASE with people");

const people6 = new Caray(
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
  people6.map(function (people) {
    people.age += 10;
    return people;
  })
);

console.log(
  people6.map(function (people) {
    people.name = people.name.toUpperCase();
    return people;
  })
);

console.log(
  people6.map(function (people) {
    people.colors[people.colors.length] = "white";
    return people;
  })
);
