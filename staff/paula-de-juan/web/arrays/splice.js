function splice(array, startIndex, deleteCount, ...items){
    const result = []
    
for (let i = 0; i <deleteCount; i++ ){
    for (let j = startIndex; j < array.length; j++){
        array.length--;
    }
   
}
    return result;
}

/* function splice(array, startIndex, deleteCount, ...items) {
    const result = [];

    for (let i = 0; i < deleteCount; i++) {
      for (let j = startIndex; j < array.length - 1; j++) {
        if (j === startIndex) {
          result[result.length] = array[j];
        }
  
        array[j] = array[j + 1];
      }
      array.length--;
    }
  
    return result;
  }
  */