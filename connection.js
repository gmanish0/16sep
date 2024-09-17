const mongoose = require("mongoose");

// Steps to Connect to MongoDB
async function connection() {
  try {
    let connection = await mongoose.connect(
      "mongodb://localhost:27017/batch-2"
    );
    console.log("Connected to MongoDB DB...");
  } catch (err) {
    console.log(err.message, "error...");
  }
}
module.exports = connection;
