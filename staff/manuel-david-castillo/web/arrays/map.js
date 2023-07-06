function map(array, callback) {
  const mapped = [];
  for (let i = 0; i < array.length; i++) {
    mapped[mapped.length] = callback(array[i]);
  }
  return mapped;
}
