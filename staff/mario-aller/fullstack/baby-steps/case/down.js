if (process.argv.length < 3) console.log('Error: argumentos incorrectos')
else {
    let text = process.argv[2]
    for (let i=3;i< process.argv.length;i++) text += ' ' + process.argv[i]
    console.log(text.toLowerCase())
}
