/**
 * Operates in storage (CRUD of items)
 * 
 * @example read storage
 * $ node .
 * 
 * @example add item to storage
 * $ node . add "Eggs" "Home"
 * 
 * @example update item in storage
 * $ node . update 1 "Ecologic Eggs" "Home"
 * 
 * @example remove item from storage
 * $ node . remove 1
 */
// @example READ STORAGEcd 
const fs = require("fs")

const operation = process.argv[2]

const file = "./storage.json"

if (!operation) {            //callback
  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message)

      return
    }
    
    //siempre convertir
    const data = JSON.parse(json)

    console.table(data) //mostrar
  })
              //AGREGAR ARCHIVO
} else if (operation === "add") {
  const what = process.argv[3]
  const where = process.argv[4]
  const when = new Date().toISOString()  //transforma a fecha xxxx-xx-xxTxx:xx:xx_xxZ


  const item = { what, where, when }


  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message)

      return
    }

    const data = JSON.parse(json)
    data.push(item)

    const dataString = JSON.stringify(data, null, " ")

    fs.writeFile(file, dataString, (error) => {
      if (error) {
        console.error(error.message)

        return
      }
    })
  })   
    // @example UPDATE ITEM
} else if (operation === "update") {
    // HINT update object const item = items[index], item.what = ...
  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message)

      return
    }

    const data = JSON.parse(json);

    const index = parseInt(process.argv[3]);
    const what = process.argv[4] && process.argv[4] !== "," ? process.argv[4] : data[index].what
    const where = process.argv[5] && process.argv[5] !== "," ? process.argv[5] : data[index].where;
    const when = new Date().toISOString()

    const item = { what, where, when }

    if (index >= data.length || isNaN(index)) {
      console.error("te jodes, no encontrado")

      return
    }

    data[index] = item

    const dataString = JSON.stringify(data, null, " ")

    fs.writeFile(file, dataString, (error) => {
      if (error) {
        console.error(error.message)

        return
      }
    })
  })

  // @example REMOVE ITEM
} else if (operation === "delete") {
    // HINT use arrays .splice
  const index = process.argv[3]

  fs.readFile(file, "utf8", (error, json) => {
    if (error) {
      console.error(error.message)

      return
    }

    const data = JSON.parse(json)

    data.splice(index, 1);

    const dataString = JSON.stringify(data, null, " ")

    //modificar archivo
    fs.writeFile(file, dataString, (error) => {
      if (error) {
        console.error(error.message)

        return
      }

      console.table(data);
    })
  })
}
