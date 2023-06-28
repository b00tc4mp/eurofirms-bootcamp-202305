function concat(...elements) {
  const results = [];

  for (let i = 0; i < elements.length; i++) {
    if (elements[i] instanceof Array) {
      for (let j = 0; j < elements[i].length; j++) {
        results[results.length] = elements[i][j];
      }
    } else {
      results[results.length] = elements[i];
    }
  }

  return results;
}
