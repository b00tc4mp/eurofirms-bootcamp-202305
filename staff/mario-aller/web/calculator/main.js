var a=document.querySelector('input[name=a]');
var b=document.querySelector('input[name=b]');
var res=document.querySelector('span');

var buttonMultiply=document.querySelector('#mult')


buttonMultiply.onclick = function() {

    res.innerHTML= parseInt(a.value) * parseInt(b.value);



}