 function selector (cad) {
    var variable = document.querySelector(cad);
    return variable;
 }
 //------------------------------------------
 function getSelectorValue(selector){
    var variable = selector.value;
    return variable;
 }
 //------------------------------------------------
    function toInterger (value) {
        var int = parseInt(value);
        return int;
    }
 //------------------------------------------------
var a = selector('input[name=a]');
var b = selector('input[name=b]');
var result=selector('.result');
/*Buttons*/
var add = selector('#add');
var sustract = selector('#sustract');
var multiply = selector('#multiply');
var split = selector('#split');
//-------------------------------------------------
/*add function*/
add.onclick = function(){
    var valueA = getSelectorValue(a);
    var valueB = getSelectorValue(b);
    if(valueA.length == "" || valueB.length == "" ){
        alert("Empty fields");
        return
    }
    a = selector('input[name=a]');
    b = selector('input[name=b]'); 
    var int = toInterger (valueA);
    var int2 = toInterger (valueB);
    result.innerHTML = int + int2;  
}
//-----------------------------------------------------------
/*sustract function */
sustract.onclick = function(){
    valueA = getSelectorValue(a);
    valueB = getSelectorValue(b);

    if(valueA.length == 0 || valueB.length == 0){
        alert('Empty fields');
        return
    }
    a = selector('input[name=a]');
    b = selector('input[name=b]');
    var int = toInterger (valueA);
    var int2 = toInterger (valueB);  
    result.innerHTML = int - int2;
}
//-----------------------------------------------------------
/*multiply function */
multiply.onclick = function(){
    var valueA = getSelectorValue(a);
    var valueB = getSelectorValue(b);
    if(valueA.length == 0 || valueB.length == 0){
        alert('Empty fields');
        return
    }
    a = selector('input[name=a]');
    b = selector('input[name=b]');
    var int = toInterger (valueA);
    var int2 = toInterger (valueB);  
    result.innerHTML= int * int2;
}
//-----------------------------------------------------------
/*Division function */
split.onclick = function() {
    var valueA = getSelectorValue(a);
    var valueB = getSelectorValue(b);

    if(valueA.length == 0 || valueB.length == 0) {
        alert('Empty fields');
        return
    }
    a = selector('input[name=a]');
    b = selector('input[name=b]');  
    var int = toInterger (valueA);
    var int2 = toInterger (valueB);
    result.innerHTML = valueA / valueB;
}

