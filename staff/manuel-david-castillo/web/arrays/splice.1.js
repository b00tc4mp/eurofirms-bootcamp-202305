function splice1(array, startIndex, deleteCount, ...items) {
  const result = [];

  if (startIndex < 0) {
    startIndex = startIndex + array.length;
  }

  for (let i = 0; i < deleteCount; i++) {
    for (let j = startIndex; j < array.length - 1; j++) {
      if (j === startIndex) {
        result[result.length] = array[j];
      }

      array[j] = array[j + 1];
    }
    array.length--;
  }

  for (
    let k = array.length + items.length;
    k > startIndex + items.length;
    k--
  ) {
    array[k] = array[k - items.length - 1];
  }

  let itemsIndex = 0;
  for (let l = startIndex; l < startIndex + items.length; l++) {
    array[l] = items[itemsIndex];
    itemsIndex++;
  }

  return result;
}
