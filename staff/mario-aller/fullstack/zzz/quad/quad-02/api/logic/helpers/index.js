// Introducir un retardo fijo en una ejecución síncrona
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Display de errores
const errorShow = function (text) {
  console.log('%cError: ' + text, 'color: magenta; font-weigth: bold')
}

// Display normal
const display = function (text) {
  console.log('%c>> ' + text + ' <<', 'color: blue; background-color: beige; border-radius: 0.2rem')
}

module.export = { sleep, errorShow, display }