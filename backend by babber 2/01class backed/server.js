const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/babbardatabase1')
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((error) => {
    console.error("Failed to connect to DB:", error);
  });

  // this write for creating post request by postman
const bodyParser = require("body-parser");
app.use(bodyParser.json());

let port = 2000;
app.listen(port, () => {
  console.log("Server is starting at port number:", port);
});

app.get('/', (req, res) => {
  res.send("This is routes and printed in localhost");
});

app.post('/cars', (req, res) => {
  const { brand, prize } = req.body;
  console.log(brand);
  console.log(prize);
  res.send("Your request is successful");
});
