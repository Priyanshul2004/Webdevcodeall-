const mongoose = require("mongoose");
require("dotenv").config();

const dbconnection = mongoose.connect(process.env.Databaseurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("db connection successfull");
}).catch((error) => {
    console.log(error);
    console.log("error in db connection");
});

module.exports = dbconnection;