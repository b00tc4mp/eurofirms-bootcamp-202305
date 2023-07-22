const { validateString } = require('.')

if (process.argv.length !== 3) throw new Error('Node error: argumentos incorrectos')

validateString(process.argv[2], validateString.EMAIL)
