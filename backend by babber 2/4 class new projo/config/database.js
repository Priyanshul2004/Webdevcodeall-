const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("db connection sucessfully"))
    .catch((error)=>{
        console.log("db connection not sucess");
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectdb;