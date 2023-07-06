function unshift(array, ...items) {
  for (let i = array.length; i >= items.length; i--) {
    array[i] = array[i - items.length];
  }
  for (let i = 0; i < items.length; i++) {
    array[i] = items[i];
  }
  return array.length;
}
