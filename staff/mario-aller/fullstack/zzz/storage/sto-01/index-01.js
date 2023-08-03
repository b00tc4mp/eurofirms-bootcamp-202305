const fs=require('fs')

const data = JSON.parse(fs.readFileSync('./storage.json', 'utf8'))

console.table (data)
