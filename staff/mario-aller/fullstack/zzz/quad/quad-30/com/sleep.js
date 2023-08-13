/**
 * The function `sleep` pauses the execution of the program for a specified number of milliseconds.
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

module.exports = sleep