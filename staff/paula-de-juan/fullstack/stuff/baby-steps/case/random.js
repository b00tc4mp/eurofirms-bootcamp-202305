// $node random 

// Expected output: NenE ShULo GuApEToN mE gUsTa la ElecTRoNiKa


let text = ''

for (let i = 2; i < process.argv.length; i++) {
    const item = process.argv[i]

    text += item

    if(i < process.argv.length - 1){
        text += ' '
    }
}

let randomCase = ''

for (let i = 0; i < text.length; i++){
    const char = text[i]

    if (Math.random() < 0.5){
        randomCase += char.toLowerCase()
    }else{
        randomCase += char.toUpperCase()
    }

}

console.log(randomCase)