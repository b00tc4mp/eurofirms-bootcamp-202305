/* NO FUNCIONA, SIN TERMINAR */
function sort(array) {
  let elementsChanged;
  do {
    elementsChanged = false;

    for (let i = 0; i < array.length - 1; i++) {
      const element = array[i].toString();
      const element2 = array[i + 1].toString();

      if (element > element2) {
        const aux = array[i];

        array[i] = array[i + 1];
        array[i + 1] = aux;

        elementsChanged = true;
      }
    }
  } while (elementsChanged);

  return array;
}
