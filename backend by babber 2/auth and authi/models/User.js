const mongoose = require("mongoose");
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    roles:{
        type:String,
        enum:["admin","student","visiter"]
    }
})

module.exports = mongoose.model("user",userSchema)
