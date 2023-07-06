describe("TEST forEach");

describe("CASE with people");

const people3 = new Caray(
  {
    name: "Pepito Grillo",
    age: 30,
    origin: "Wonderland",
    colors: ["red", "blue", "yellow"],
  },
  {
    name: "Wendy Darling",
    age: 16,
    origin: "Wonderland",
    colors: ["pink", "skyblue"],
  },
  {
    name: "Peter Pan",
    age: 18,
    origin: "Wonderland",
    colors: ["green", "blue"],
  },
  {
    name: "James Hook",
    age: 40,
    origin: "Wonderland",
    colors: ["red", "black"],
  }
);

people3.forEach(function (person) {
  console.log(person.name, person.age);
});

people3.forEach(function (person) {
  console.log(person.name, person.origin);
});

people3.forEach(function (person) {
  console.log(person.name, person.colors);
});
