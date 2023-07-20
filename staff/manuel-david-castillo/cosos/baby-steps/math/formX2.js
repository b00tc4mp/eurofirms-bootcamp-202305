// $ node 1 2 3
// -3 y 1

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
const c = Number(process.argv[4]);

const raizResult = Math.sqrt(b * b - 4 * a * c);

const result1 = (-b - raizResult) / (2 * a);
const result2 = (-b + raizResult) / (2 * a);

console.log(result1, result2);
