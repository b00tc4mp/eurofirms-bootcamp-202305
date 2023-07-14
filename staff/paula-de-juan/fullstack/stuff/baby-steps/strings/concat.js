let concat = ''

for (let i = 2; i < process.argv.length; i++) {
    const item = process.argv[i]

    concat += item
}

console.log(concat)