function reduce(array, callback, initialValue) {
  let index = 0;
  let result = initialValue;
  if (initialValue === undefined) {
    result = array[0];
    index = 1;
  }

  for (let i = index; i < array.length; i++) {
    result = callback(result, array[i]);
  }

  return result;
}
