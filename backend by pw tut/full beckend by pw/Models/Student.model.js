const mongoose = require("mongoose")

const studentSchma = new mongoose.Schema({
    "name":{
        "type":String,
         required:true
    },
    "age":Number
},{versionKey:false,timestamps:true})

module.exports  = mongoose.model("student",studentSchma)