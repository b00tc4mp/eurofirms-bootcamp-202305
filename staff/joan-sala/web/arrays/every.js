function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) return false;
    }
    return true;
  }