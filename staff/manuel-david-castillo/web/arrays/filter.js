function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result[result.length] = array[i];
    }
  }
  return result;
}
