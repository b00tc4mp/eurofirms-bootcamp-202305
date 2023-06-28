function miSplice(array, startIndex, deleteCount, ...items){
    const removedItems =[];

    if (startIndex < 0){
        startIndex = startIndex + array.length;
    }
}

/* 

function miSplice(arr, start, deleteCount, ...items) {
  // Crear un nuevo array para almacenar los elementos eliminados
  const removedItems = [];

  // Manejar el parámetro "start" negativo
  if (start < 0) {
    start = arr.length + start;
    if (start < 0) {
      start = 0;
    }
  }

  // Manejar el parámetro "deleteCount" negativo o mayor que el número de elementos restantes
  if (deleteCount < 0 || deleteCount > arr.length - start) {
    deleteCount = arr.length - start;
  }

  // Almacenar los elementos que se eliminarán
  for (let i = 0; i < deleteCount; i++) {
    removedItems.push(arr[start + i]);
  }

  // Desplazar los elementos a partir de "start + deleteCount"
  const itemsToMove = arr.length - (start + deleteCount);
  for (let i = 0; i < itemsToMove; i++) {
    arr[start + i] = arr[start + deleteCount + i];
  }

  // Eliminar los elementos sobrantes al final del array
  arr.length -= deleteCount;

  // Insertar los nuevos elementos en el array
  const itemsCount = items.length;
  arr.length += itemsCount;
  for (let i = 0; i < itemsCount; i++) {
    arr[start + i] = items[i];
  }

  // Devolver el array de elementos eliminados
  return removedItems;
}
*/