/**
 * The sleep function pauses the execution of the program for the specified number of milliseconds.
 * @param milliseconds - The `milliseconds` parameter is the amount of time in milliseconds that you
 * want the function to pause or sleep for.
 */
function sleep(milliseconds) {
  const start = new Date().getTime();
  for (let i = 0; i < 1e10; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

/**
 * The function "display" logs a formatted message to the console with a blue text color, beige
 * background color, and rounded border.
 * @param text - The `text` parameter is a string that represents the text you want to display.
 */
function display(text) {
  console.log('%c>> ' + text + ' <<', 'color: blue; background-color: beige; border-radius: 0.2rem')
}

module.exports = { sleep, display }