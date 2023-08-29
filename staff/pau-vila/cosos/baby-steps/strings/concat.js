let concat = ''

for (let i = 2; i < process.argv.length; i++){
const item = process.argv[i]

concat += item
}

console.log(concat)

//$node concat hello world 
//helloworld

//$node concat one two three
//onetwothree

//junta un conjunto de string