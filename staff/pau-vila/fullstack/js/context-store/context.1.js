var peter = {
    name: 'Peter',

    salute(to) {
      console.log(this.name + ': Hello, ' + to + '!')
    }
}
//this: se refiere al objeto
peter.salute('Wendy')
//VM2480: 5 Peter: HEllo, Wendy!
//undefined 