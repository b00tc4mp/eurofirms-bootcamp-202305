function Caray(...items) {
  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
  }
  this.length = items.length;
}

Caray.prototype.every = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) return false;
  }
  return true;
};

Caray.prototype.filter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result[result.length] = this[i];
    }
  }
  return result;
};

Caray.prototype.find = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i]);

    if (result) return this[i];
  }
};

Caray.prototype.flat = function (depth = 1) {
  let aux = new Caray();
  aux.length = 0;

  let carayFound = true;

  let result = this;

  for (let i = 0; i < depth && carayFound; i++) {
    carayFound = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] instanceof Caray) {
        carayFound = true;

        for (let k = 0; k < result[j].length; k++) {
          aux[aux.length] = result[j][k];
          aux.length++;
        }
      } else {
        aux[aux.length] = result[j];
        aux.length++;
      }
    }

    result = aux;

    aux = new Caray();
    aux.length = 0;
  }

  return result;
};

Caray.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Caray.prototype.includes = function (element, startIndex = 0) {
  for (
    let i = startIndex < 0 ? this.length - startIndex : startIndex;
    i < this.length;
    i++
  ) {
    if (element === this[i]) return true;
  }
  return false;
};

Caray.prototype.indexOf = function (element, startIndex) {
  if (!startIndex) {
    startIndex = 0;
  }
  for (let i = startIndex; i < this.length; i++) {
    if (element === this[i]) {
      return i;
    }
  }
  return -1;
};

/* A partir de aquí no están comprobados si funcionan */
Caray.prototype.map = function (callback) {
  const mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped[mapped.length] = callback(this[i]);
  }
  return mapped;
};

Caray.prototype.pop = function () {
  if (!this.length) return undefined;

  let value = this[this.length - 1];

  this.length--;

  return value;
};

Caray.prototype.push = function (...elements) {
  if (elements.length > 1) {
    for (let i = 0; i < elements.length; i++) {
      this[this.length] = elements[i];
    }
  } else {
    this[this.length] = elements;
  }

  let index = this.length;
  return index;
};

Caray.prototype.reduce = function (callback, initialValue) {
  let index = 0;
  let result = initialValue;
  if (initialValue === undefined) {
    result = this[0];
    index = 1;
  }

  for (let i = index; i < this.length; i++) {
    result = callback(result, this[i]);
  }

  return result;
};

Caray.prototype.reverse = function () {
  if (this.length === 0) return this;

  const copyArrayReverse = [];

  for (let i = this.length - 1; i >= 0; i--) {
    copyArrayReverse[copyArrayReverse.length] = this[i];
  }

  for (let i = 0; i < this.length; i++) {
    this[i] = copyArrayReverse[i];
  }

  return copyArrayReverse;
};

Caray.prototype.shift = function () {
  if (this.length === 0) {
    return undefined;
  }

  for (let i = 0; i < this.length - 1; i++) {
    this[i] = this[i + 1];
  }

  this.length--;
  return this[0];
};

Caray.prototype.slice = function (startIndex = 0, endIndex = array.length) {
  const result = [];
  if (endIndex > this.length) {
    endIndex = this.length;
  }
  if (startIndex < -this.length) {
    startIndex = 0;
  }
  for (
    let i = startIndex < 0 ? startIndex + this.length : startIndex;
    i < (endIndex < 0 ? endIndex + this.length : endIndex);
    i++
  ) {
    result[result.length] = this[i];
  }

  return result;
};

Caray.prototype.some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) return true;
  }
  return false;
};

Caray.prototype.splice = function (
  startIndex,
  deleteCount = array.length,
  ...items
) {
  const result = [];
  const arrayModif = [];

  if (startIndex < 0) {
    startIndex += this.length;
  }

  if (startIndex < 0) {
    startIndex = 0;
  }

  if (startIndex > this.length) {
    startIndex = this.length;
  }

  if (deleteCount > this.length) {
    deleteCount = this.length;
  }

  /* Añadir a modif la parte antes de startIndex inmutable */
  for (let i = 0; i < startIndex; i++) {
    arrayModif[arrayModif.length] = this[i];
  }

  /* Añadir los nuevos elementos de items */
  for (let i = 0; i < items.length; i++) {
    arrayModif[arrayModif.length] = items[i];
  }

  /* Añadir los elementos del array no eliminados */
  for (let i = startIndex + deleteCount; i < this.length; i++) {
    arrayModif[arrayModif.length] = this[i];
  }

  /* Añadir los elementos del resultado, los elementos eliminados */
  for (let i = startIndex; i < startIndex + deleteCount; i++) {
    if (this[i] !== undefined) {
      result[result.length] = this[i];
    }
  }

  this.length = arrayModif.length;

  /* Copiar los elementos del arrayModif al array original */
  for (let i = 0; i < arrayModif.length; i++) {
    this[i] = arrayModif[i];
  }

  return result;
};

Caray.prototype.unshift = function (...items) {
  for (let i = this.length; i >= items.length; i--) {
    this[i] = this[i - items.length];
  }
  for (let i = 0; i < items.length; i++) {
    this[i] = items[i];
  }
  return this.length;
};
