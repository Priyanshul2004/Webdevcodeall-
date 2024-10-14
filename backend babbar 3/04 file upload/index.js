const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}));

const db = require("./config/database");
db.connect();

const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryconnect();

// Import the router
const uploadRoutes = require("./routes/fileupload"); // Correct the import to use the router

app.use('/api/v1/upload', uploadRoutes); // Corrected line: use the router instead of 'upload'

app.listen(PORT, () => {
  console.log("app is running at port number", PORT);
});
