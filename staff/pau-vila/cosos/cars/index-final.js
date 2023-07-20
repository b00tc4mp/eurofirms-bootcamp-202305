function Car(icon) {
    this.icon = icon
    this.steps = this.steps
    this.stopped = false 
}

Car.prototype.render = function () {
    console.log(' '.repeat(this.steps) + this.icon)
}