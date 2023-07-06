function includes(array, element, startIndex = 0) {
  for (
    let i = startIndex < 0 ? array.length - startIndex : startIndex;
    i < array.length;
    i++
  ) {
    if (element === array[i]) return true;
  }
  return false;
}
