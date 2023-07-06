describe("TEST push");

describe("CASE with people");

const people7 = [
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

const benito = {
  name: "Benito",
  age: 67,
  origin: "Benidor",
  colors: ["beer", "black jack"],
  live: true,
};

const paco = {
  name: "Paco",
  age: 90,
  origin: "Torremolinos",
  colors: ["beer", "black jack"],
  live: true,
};

console.log(push(people7, benito));
console.log(people7);

console.log(push(people7, paco));
console.log(people7);

/* mirar lo de los argumentos */

describe("CASE with numbers");

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8];
const elements = [9, 10];
console.log(push(numbers5, elements));
console.log(numbers5);

const elements2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(push(numbers5, elements2));
console.log(numbers5);
