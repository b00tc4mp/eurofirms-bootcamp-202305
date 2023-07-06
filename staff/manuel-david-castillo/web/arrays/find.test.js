describe("TEST find");

describe("CASE with people");

const people4 = [
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
  },
];

console.log(
  find(people4, function (person) {
    return person.age < 20;
  })
);

console.log(
  find(people4, function (person) {
    return person.name === "Peter Pan";
  })
);

console.log(
  find(people4, function (person) {
    return person.age === 40;
  })
);
