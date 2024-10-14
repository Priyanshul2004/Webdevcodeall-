const mongoose = require('mongoose')
const studentModel = require('./Models/Student.model')

mongoose.connect("mongodb://localhost:27017/pw1")

const db = mongoose.connection

db.on("error", () => {
   console.log("error while connecting to db"); 
})

db.once("open", () => {
   console.log("db connection successful");
   //  init()

   dbquries()
}) 

async function init(){
    const student = {
        "name":"priyanshul44",
        "age":23
    }


    const studnt_obj =  await studentModel.create(student)
    console.log(studnt_obj);


}

async function dbquries(){

    // read data by id 
    // try {
    //     const findbyid1 =  await studentModel.findById('66252ab4797b02646572e66d')
    //     console.log(findbyid1);
    // } catch (error) {
    //     console.log("error is find ",error);
    // }

    // reade by name or data 

    // try {
    //     const find2 = await studentModel.find({name:"priyanshul tiwari"})
    //     console.log(find2);
    // } catch (error) {
    //     console.log("error find in second find2");
    // }


    // read by multipe data check

    // const find3 = await studentModel.where("age").gt("10").where("name").equals("priy0anshul").limit(2)
    // console.log(find3);

   

    const dlet1 = await studentModel.deleteOne({"name":"priyanshul44"})
    console.log(dlet1);



}