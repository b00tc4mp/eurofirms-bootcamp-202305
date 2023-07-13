function Car(car) {
  (this.car = car), (this.steps = 0);
}

Car.prototype.render = function () {
  console.log(" ".repeat(this.steps) + this.car);
};

const car1 = new Car("L");
const car2 = new Car("T");
const car3 = new Car("P");

let steps = 0;

const random = () => Math.round(Math.random() * 10);

const interval = setInterval(() => {
  console.clear();

  car1.render();
  car2.render();
  car3.render();
  console.log(" ".repeat(100) + "META");
  console.log("steps " + steps);

  if (car1.steps > 105 || car2.steps > 105 || car3.steps > 105) {
    clearInterval(interval);

    const maxSteps = Math.max(car1.steps, car2.steps, car3.steps);

    switch (maxSteps) {
      case car1.steps:
        console.log("Ha ganado el ladrón");
        break;
      case car2.steps:
        console.log("Ha ganado el taxi");
        break;
      case car3.steps:
        console.log("Ha ganado el policía");
        break;
      default:
        console.log("error");
    }
  }

  car1.steps += random();
  car2.steps += random();
  car3.steps += random();
  steps++;
}, 400);
