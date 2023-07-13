let steps = 0;

const car1 = "P";
const car2 = "T";
const car3 = "X";

const interval = setInterval(() => {
  console.clear();

  console.log(" ".repeat(steps) + car);
  console.log(" ".repeat(steps) + car);
  console.log(" ".repeat(steps) + car);
  console.log("steps " + steps);

  steps++;

  if (steps === 80) {
    clearInterval(interval);
  }
}, 200);
