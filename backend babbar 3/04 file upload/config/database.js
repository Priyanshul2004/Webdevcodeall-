const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.DBURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("db connection successfull");
    })
    .catch((error)=>{
        console.log("error in db connection",error);
        process.exit(1);
    })
};



