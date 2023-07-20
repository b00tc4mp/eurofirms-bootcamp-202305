const fs = require("fs");

const json = fs.readFileSync("./storage.json", "utf8");
const data = JSON.parse(json);

console.table(data);
