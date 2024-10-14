const mongoose = require("mongoose")

require("dotenv").config();

exports.connect = ()=>{
     mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{console.log("DB CONNECTED SUCCESSFULLY")})
    .catch((err)=>{
        console.log(" DB IS NOT CONNECTED ");
        console.error(err)
        process.exit(1);
    })
}

