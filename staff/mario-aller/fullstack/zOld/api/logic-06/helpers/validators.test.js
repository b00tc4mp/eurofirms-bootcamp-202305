const { validateStr } = require('./validators')

if (process.argv.length !== 3) throw new Error('Node error: argumentos incorrectos')

stringValid(process.argv[2], validateStr.EMAIL)
