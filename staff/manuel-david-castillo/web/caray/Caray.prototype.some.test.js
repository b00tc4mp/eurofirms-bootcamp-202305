describe("TEST some");

describe("CASE with people");

const people3 = new Caray(
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
  people3.some(function (person) {
    return person.live === true;
  })
);

console.log(
  people3.some(function (person) {
    return person.age === 40;
  })
);

console.log(
  people3.some(function (person) {
    return person.age;
  })
);

console.log(
  people3.some(function (person) {
    return person.age === 90;
  })
);

console.log(
  people3.some(function (person) {
    return person.name === "Peter Pan";
  })
);
