function indexOf(array, element, startIndex) {
  if (!startIndex) {
    startIndex = 0;
  }
  for (let i = startIndex; i < array.length; i++) {
    if (element === array[i]) {
      return i;
    }
  }
  return -1;
}
