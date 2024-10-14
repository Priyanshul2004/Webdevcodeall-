const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        minLength:10
    },
    usertype:{
        type:String,
        required:true,
        default:"COSTEMER",
        enum:["COSTEMER","ADMIN"]
    }
},{timestamps:true,versionKey:false})

module.exports = mongoose.model("user",userSchema)