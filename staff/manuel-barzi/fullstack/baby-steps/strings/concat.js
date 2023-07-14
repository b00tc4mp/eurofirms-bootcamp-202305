// $ node concat hello world
// helloworld

// $ node concat hello - world
// hello-world

// $ node concat A B C D E F
// ABCDEF

let concat = ''

for (let i = 2; i < process.argv.length; i++) {
    const item = process.argv[i]

    concat += item
}

console.log(concat)