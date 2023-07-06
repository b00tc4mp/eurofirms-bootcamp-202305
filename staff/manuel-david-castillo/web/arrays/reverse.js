function reverse(array) {
  if (array.length === 0) return array;

  const copyArrayReverse = [];

  for (let i = array.length - 1; i >= 0; i--) {
    copyArrayReverse[copyArrayReverse.length] = array[i];
  }

  for (let i = 0; i < array.length; i++) {
    array[i] = copyArrayReverse[i];
  }

  return copyArrayReverse;
}
