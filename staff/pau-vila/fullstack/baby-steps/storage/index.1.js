const fs = require('fs')
//require: se utiliza para importar módulos en un archivo
try {
    const json = fs.readFileSync('./storage.json', 'utf8')
    const data = JSON.parse(json)

    console.table(data)
} catch (error) {
    console.error(error.message)
}

console.log('...')

//readFile: funció de Node para leer el contenido de un archivo de manera asíncrona, 
//mientras se ejecutan otras tareas.