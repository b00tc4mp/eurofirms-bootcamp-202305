var a = document.querySelector('input[name=a]');
var b = document.querySelector('input[name=b]');
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


