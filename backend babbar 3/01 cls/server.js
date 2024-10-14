const express = require("express");
const app = express();
const bodyparser = require('body-parser')

app.use(bodyparser.json());

app.get("/",(req,res)=>{
    res.send("server is running at 3000")
})

app.listen(3000)

app.post("/api/cars",(req,res)=>{
    const {name,car} = req.body ;
    console.log(name);
    console.log(car);
    res.send("post req successfully done")
})

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/babbarrevision1',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("db connection succesfull")})
.catch((err)=>{console.log("db coonection error ",err);})
