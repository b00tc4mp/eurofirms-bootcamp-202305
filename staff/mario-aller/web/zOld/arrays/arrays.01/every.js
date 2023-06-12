function every(array, callback) {
    for(i=0;i<array.length;i++) {
        if (!callback(array[i])) return false
    }
return true;
}