const fs = require("fs");

const operation = process.argv[2];

const file = "./storage.json";

if (!operation) {
  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message);

      return;
    }

    const data = JSON.parse(json);

    console.table(data);
  });
} else if (operation === "add") {
  const what = process.argv[3];
  const where = process.argv[4];
  const when = new Date().toISOString();

  const item = { what, where, when };

  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message);

      return;
    }

    const data = JSON.parse(json);
    data.push(item);

    const dataString = JSON.stringify(data, null, " ");

    fs.writeFile(file, dataString, (error) => {
      if (error) {
        console.error(error.message);

        return;
      }
    });
  });
} else if (operation === "update") {
  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message);

      return;
    }

    const data = JSON.parse(json);

    const index = parseInt(process.argv[3]);
    const what =
      process.argv[4] && process.argv[4] !== ","
        ? process.argv[4]
        : data[index].what;
    const where =
      process.argv[5] && process.argv[5] !== ","
        ? process.argv[5]
        : data[index].where;
    const when = new Date().toISOString();

    const item = { what, where, when };

    if (index >= data.length || isNaN(index)) {
      console.error("te jodes, no encontrado");

      return;
    }

    data[index] = item;

    const dataString = JSON.stringify(data, null, " ");

    fs.writeFile(file, dataString, (error) => {
      if (error) {
        console.error(error.message);

        return;
      }
    });
  });
} else if (operation === "delete") {
  const index = process.argv[3];

  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message);

      return;
    }

    const data = JSON.parse(json);

    data.splice(index, 1);

    const dataString = JSON.stringify(data, null, " ");

    fs.writeFile(file, dataString, (error) => {
      if (error) {
        console.error(error.message);

        return;
      }

      console.table(data);
    });
  });
}
