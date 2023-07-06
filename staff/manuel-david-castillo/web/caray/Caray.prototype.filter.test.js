describe("TEST filter");

describe("CASE with people");

const people5 = new Caray(
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

console.log(people5.filter((people) => people.age < 20));

console.log(people5.filter((people) => people.name.includes("J")));

console.log(people5.filter((people) => people.colors.length > 2));
