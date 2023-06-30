const mongodb = require("mongodb");

const { MongoClient, ObjectId } = mongodb;

const client = new MongoClient("mongodb://127.0.0.1:27017");
console.log("step1", "connect");

client.connect().then((connection) => {
  console.log("step2", "insert user");

  const db = connection.db("data");

  const users = db.collection("users");

  return users
    .insertOne({
      name: "Pepito",
      email: "pepito@grillo.com",
      password: "123123123",
    })
    .then((result) => {
      console.log("step3", "see creation result");
      console.log(result);
    })
    .then(() => {
      console.log("step4", "retrieve all users");
      return users.find({}).toArray();
    })
    .then((allUsers) => {
      console.log("step5", "show all users");
      console.table(allUsers);
    })
    .then(() => {
      console.log("step6", "retrieve an user");
      return users.findOne({ _id: new ObjectId("649edb0081df76fbe54321fe") });
    })
    .then((user) => {
      console.log("step7", "show one user");
      console.log(user);
    });
});
