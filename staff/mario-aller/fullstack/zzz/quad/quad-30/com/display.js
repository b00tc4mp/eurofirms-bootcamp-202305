/**
 * The function `display` logs a formatted message to the console in JavaScript.
 * @param text - The `text` parameter is a string that represents the text you want to display.
 */
function display(text) {
    console.log('%c>> ' + text + ' <<', 'color: blue; background-color: beige; border-radius: 0.2rem')
  }
  
  module.exports = display
