const mongoose = require('mongoose')
const studentModel = require('./Models/Student.model')

mongoose.connect("mongodb://localhost:27017/pw1")

const db = mongoose.connection

db.on("error", () => {
   console.log("error while connecting to db"); 
})

db.once("open", () => {
   console.log("db connection successful");
   init()
}) 

async function init(){
    const student = {
        "name":"priyanshul",
        "age":21
    }

    const studnt_obj =  await studentModel.create(student)
    console.log(studnt_obj);
}
