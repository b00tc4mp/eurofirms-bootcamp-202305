function splice(array, startIndex, deleteCount, item1) {
  const deletedElements = [];

  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    const element = array[i]
    deletedElements[deletedElements.length] = element
  }
  array[startIndex] = item1
  
  const displacement = deleteCount - 1

  for (let i = startIndex + deleteCount; i < array.length; i++){
    const element = array[i]
    array[i - displacement] = element
  }
  array.length -= displacement  
  
  return deletedElements

}
