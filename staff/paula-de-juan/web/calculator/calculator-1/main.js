var numberButtons = document.querySelectorAll('button-number')

var a = document.querySelector('input[name=a]');
var b = document.querySelector('input[name=b]');

numberButtons.onclick = function(){
    console.log("boton numero ejecutandose");
}

var result = document.querySelector('.result');


var buttonAdd = document.querySelector('#add');

buttonAdd.onclick = function(){
    console.log("boton suma ejecutandose?")
    result.innerHTML = parseInt(a.value) + parseInt(b.value);
}

var buttonSubstract = document.querySelector('#substract');

buttonSubstract.onclick = function(){
    console.log("boton resta ejecutandose?")
    result.innerHTML = parseInt(a.value) - parseInt(b.value);
}


var buttonMultiply = document.querySelector('#multiply');

buttonMultiply.onclick = function(){
    console.log("boton multiplicacion ejecutandose?")
    result.innerHTML = parseInt(a.value) * parseInt(b.value);
}


var buttonDivision = document.querySelector('#division');

buttonDivision.onclick = function(){
    console.log("boton division ejecutandose?")
    result.innerHTML = parseInt(a.value) / parseInt(b.value);
}
/*
compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }*/