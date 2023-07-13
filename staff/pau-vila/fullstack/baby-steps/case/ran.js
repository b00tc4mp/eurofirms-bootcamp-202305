let text = ''

for (let i = 2; i < process.argv.length; i++) {
    const item = process.argv[i]

    text += item
    
    if (i < process.argv.length - 1) text += ''
}

let random = ''

for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (Math.random() < 0.5)
    random += char.toLowerCase()
    else
    random += char.toUpperCase()
}

console.log(random)

// $node ran hola mundo
// hoLA MUnDo

// $node ran hola mundo
// HoLa munDO

// $node ran hola mundo
// hOLa MUNdo

//intercala mayusculas con minusculas