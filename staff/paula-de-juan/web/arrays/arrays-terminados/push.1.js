// Made by Paula de Juan Segura

function push(array, element){
    const copyBeatles = []

    for(let i = 0; i <array.length; i++){
        copyBeatles[i] = array[i]
    }

    copyBeatles.length = array.length+1
    copyBeatles[array.length] = element

    return copyBeatles
}