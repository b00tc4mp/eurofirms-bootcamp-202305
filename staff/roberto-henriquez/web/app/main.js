var a = document.querySelector('input[name=a]')
var b = document.querySelector('input[name=b]')
var result = document.querySelector('.result')

var buttonPlus = document.querySelector('#plus')

var parraf = document.createElement('p')

result.append(parraf)

buttonPlus.onclick = function() {
    var aNumber = parseFloat(a.value)
    var bNumber = parseFloat(b.value)

    var numberAText = aNumber.toString()
    var numberBText = bNumber.toString()

    if (a.value !== numberAText || b.value !== numberBText) {
        alert('introduce valores validos en los inputs')

        return
    }
    parraf.innerHTML = aNumber + bNumber
}

var buttonSplit = document.querySelector('#split')

buttonSplit.onclick = function() {
    var aNumber = parseFloat(a.value)
    var bNumber = parseFloat(b.value)

    if (!(typeof aNumber === 'number' && !Number.isNaN(aNumber) &&
            !Number.isInteger(aNumber)) && !Number.isInteger(aNumber)) {
        alert('introduce valores validos en los inputs')

        return
    }
    parraf.innerHTML = aNumber / bNumber
}