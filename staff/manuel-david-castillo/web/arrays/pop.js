function pop(array) {
  if (!array.length) return undefined;

  let value = array[array.length - 1];

  array.length--;

  return value;
}
