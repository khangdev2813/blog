const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/nodejs_dev")
      .then(() => console.log("Connected!"));
  } catch (error) {
    console.log("Cant connect");
  }
}

module.exports = { connect };
