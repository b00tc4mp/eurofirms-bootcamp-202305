//$ node concat hello word
//helloword

let result = "";

for (let i = 2; i < process.argv.length; i++) {
  result += process.argv[i];
}

console.log(result);
