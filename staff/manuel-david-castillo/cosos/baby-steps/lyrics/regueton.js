//$ node regueton
// mamita ya tu sabeh, perreo para las niñas

const who = ["papi", "mami", "papito", "mamasita", "mi bro", "nena", "nene"];

const phrase = [
  "ya tu sabeh",
  "prrrrrr",
  "la nueva religión",
  "los maleantes",
  "los chicos malos",
  "amor para los mios",
];

const action = [
  "perreo",
  "malianteo",
  "fronteo",
  "bailanteo",
  "baila hasta el suelo",
  "roneo",
];

const forWhom = [
  "para las niñas",
  "para mis nenes",
  "para los capos",
  "para la calle",
  "para los yayos cañeros",
];

function getRandom(word) {
  const random = Math.floor(Math.random() * word.length);

  return word[random];
}

console.log(
  getRandom(who) +
    " " +
    getRandom(phrase) +
    ", " +
    getRandom(action) +
    " " +
    getRandom(forWhom)
);
