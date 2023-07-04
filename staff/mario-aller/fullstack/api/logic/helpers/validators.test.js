const ctx = require('./ctxAux')
const { stringValid } = require('./validators')

if (process.argv.length !== 3) throw new Error('Node error: argumentos incorrectos')

stringValid(process.argv[2], ctx.STR_EMAIL)
