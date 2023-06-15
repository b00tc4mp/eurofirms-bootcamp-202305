function shift(array) {
  if (array.length === 0) {
    return undefined;
  }

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length--;
  return array[0];
}
