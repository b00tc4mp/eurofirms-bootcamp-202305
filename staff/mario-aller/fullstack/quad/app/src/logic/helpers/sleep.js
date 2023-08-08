export function sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e10; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}