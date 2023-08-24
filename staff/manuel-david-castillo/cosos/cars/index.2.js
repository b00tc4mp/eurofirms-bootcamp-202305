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

  car1.steps += random();
  car2.steps += random();
  car3.steps += random();
  steps++;

  if (car1.steps > 105) {
    clearInterval(interval);

    console.log("The winner is " + car1.car);
  }
  if (car2.steps > 105) {
    clearInterval(interval);

    console.log("The winner is " + car2.car);
  }
  if (car3.steps > 105) {
    clearInterval(interval);

    console.log("The winner is " + car3.car);
  }
}, 400);
