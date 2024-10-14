const mongoose = require("mongoose")

const studentSchma = new mongoose.Schema({
    "name":String,
    "age":Number
})

module.exports  = mongoose.model("student",studentSchma)