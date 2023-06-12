function push(array, elements) {
  if (
    typeof elements === "object" &&
    elements !== null &&
    elements.hasOwnProperty("length")
  ) {
    for (let i = 0; i < elements.length; i++) {
      array[array.length] = elements[i];
    }
  } else {
    array[array.length] = elements;
  }

  let index = array.length;
  return index;
}
