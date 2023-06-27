//concat a lot of different strings
//$ node concat one two three
//onetwothree
let result = ''

for (let i = 2; i < process.argv.length; i++) {
    
    const item = process.argv[i]
    
    result += item

}
console.log(result)
