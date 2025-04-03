const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/pk-games";

function createConnection() {
  mongoose
      .connect(url)
      .then(() => {
        console.log("Connected Successfully");
      })
      .catch((error) => {
        console.log(error);
        console.log("Error while connecting");
      });
}

module.exports = createConnection;