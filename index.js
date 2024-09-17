const express = require("express");
const connection = require("./connection");
const student = require("./routes/student");
const app = express();
connection();

app.use(express.json());
// console.log("here..");
app.use(student);

app.listen(3000, (err) => {
  if (err) console.log("Error starting server", err);
  else console.log("Server is running on port 3000");
});

// http://localhost:3000/add/user
