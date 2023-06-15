function splice(array, startIndex, deleteCount = array.length, ...items) {
  const result = [];
  const arrayModif = [];

  if (startIndex < 0) {
    startIndex += array.length;
  }

  if (startIndex < 0) {
    startIndex = 0;
  }

  if (startIndex > array.length) {
    startIndex = array.length;
  }

  if (deleteCount > array.length) {
    deleteCount = array.length;
  }

  /* Añadir a modif la parte antes de startIndex inmutable */
  for (let i = 0; i < startIndex; i++) {
    arrayModif[arrayModif.length] = array[i];
  }

  /* Añadir los nuevos elementos de items */
  for (let j = 0; j < items.length; j++) {
    arrayModif[arrayModif.length] = items[j];
  }

  /* Añadir los elementos del array no eliminados */
  for (let k = startIndex + deleteCount; k < array.length; k++) {
    arrayModif[arrayModif.length] = array[k];
  }

  /* Añadir los elementos del resultado, los elementos eliminados */
  for (let l = startIndex; l < startIndex + deleteCount; l++) {
    if (array[l] !== undefined) {
      result[result.length] = array[l];
    }
  }

  array.length = arrayModif.length;

  /* Copiar los elementos del arrayModif al array original */
  for (let m = 0; m < arrayModif.length; m++) {
    array[m] = arrayModif[m];
  }

  return result;
}
