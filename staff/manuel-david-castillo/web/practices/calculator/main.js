var a = document.querySelector("input[name='a']");
var b = document.querySelector("input[name='b']");
var result = document.querySelector("input[name='result']");

var add = document.querySelector("#add");
var deduct = document.querySelector("#deduct");
var multiply = document.querySelector("#multiply");
var split = document.querySelector("#split");

/* Función de suma */
add.onclick = function () {
  var aNumber = parseFloat(a.value);

  var numberAText = aNumber.toString();

  if (a.value !== numberAText) {
    alert("introduce valores válidos");
  }

  var bNumber = parseFloat(b.value);

  var numberBText = bNumber.toString();

  if (b.value !== numberBText) {
    alert("introduce valores válidos");
  }

  result.value = aNumber + bNumber;
};

/* Función de resta */
deduct.onclick = function () {
  var aNumber = parseFloat(a.value);

  var numberAText = aNumber.toString();

  if (a.value !== numberAText) {
    alert("introduce valores válidos");
  }

  var bNumber = parseFloat(b.value);

  var numberBText = bNumber.toString();

  if (b.value !== numberBText) {
    alert("introduce valores válidos");
  }

  result.value = aNumber - bNumber;
};

/* Función de multipliación */
multiply.onclick = function () {
  var aNumber = parseFloat(a.value);

  var numberAText = aNumber.toString();

  if (a.value !== numberAText) {
    alert("introduce valores válidos");
  }

  var bNumber = parseFloat(b.value);

  var numberBText = bNumber.toString();

  if (b.value !== numberBText) {
    alert("introduce valores válidos");
  }

  result.value = aNumber * bNumber;
};

/* Función de división */
split.onclick = function () {
  var aNumber = parseFloat(a.value);

  var numberAText = aNumber.toString();

  if (a.value !== numberAText) {
    alert("introduce valores válidos");
  }

  var bNumber = parseFloat(b.value);

  var numberBText = bNumber.toString();

  if (b.value !== numberBText) {
    alert("introduce valores válidos");
  }

  result.value = aNumber / bNumber;
};
