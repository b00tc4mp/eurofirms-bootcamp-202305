// Introducir un retardo fijo en una ejecución síncrona
function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e10; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Display normal
function display(text) {
  console.log('%c>> ' + text + ' <<', 'color: blue; background-color: beige; border-radius: 0.2rem')
}

module.exports = { sleep, display }