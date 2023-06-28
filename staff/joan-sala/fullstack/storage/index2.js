const fs = require('fs') //requerir, requiere de esa librería/paquete

const json = fs.readFileSync('./storage.json', 'utf8') // archivvo pasado a jsonn en formato utf8
const data = JSON.parse(json) //el parse te convirte en un objetp

console.table(data)//imprime el array en forma deabla