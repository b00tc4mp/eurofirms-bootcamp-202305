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

function peopleSum10(people) {
  people.age += 10;

  return people;
}

const result1 = people6.map(peopleSum10);

console.log(result1);

function mayus(people) {
  people.name = people.name.toUpperCase();

  return people;
}

const resul2 = people6.map(mayus);

console.log(resul2);

function addWhite(people) {
  people.colors[people.colors.length] = "white";

  return people;
}

const result3 = people6.map(addWhite);

console.log(result3);
