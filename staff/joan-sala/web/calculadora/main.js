var a=document.querySelector('input[name=a]');
var b=document.querySelector('input[name=b]')
var result=document.querySelector('.result')

/*SUMAR Number 1 */ 
var addition=document.querySelector('#multiply');
addition.onclick = function(){
    result.innerHTML = parseFloat(a.value) + parseFloat(b.value);
}

/*MULTIPLICAR Number 1 */ 
var multiply=document.querySelector('#multiply');
multiply.onclick = function(){
    result.innerHTML = parseFloat(a.value) * parseFloat(b.value);
}

/*RESTAR Number 1 and 2*/
var rest=document.querySelector('#rest');
rest.onclick = function(){
    result.innerHTML = parseFloat(a.value) - parseFloat(b.value);
}

var split=document.querySelector('#split');
split.onclick = function(){
    result.innerHTML= parseFloat(a.value) / parseFloat(b.value);
}