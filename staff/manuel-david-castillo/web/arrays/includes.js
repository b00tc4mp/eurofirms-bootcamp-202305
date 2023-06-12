function includes(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) return true;
  }
  return false;
}
