function slice(array, startIndex = 0, endIndex = array.length) {
  const result = [];
  if (endIndex > array.length) {
    endIndex = array.length;
  }
  if (startIndex < -array.length) {
    startIndex = 0;
  }
  for (
    let i = startIndex < 0 ? startIndex + array.length : startIndex;
    i < (endIndex < 0 ? endIndex + array.length : endIndex);
    i++
  ) {
    result[result.length] = array[i];
  }

  return result;
}
