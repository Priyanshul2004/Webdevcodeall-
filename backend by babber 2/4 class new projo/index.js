const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT

// adding middleware 
app.use(express.json());

app.listen(PORT,()=>{
    console.log("app is runing at port num ",PORT);
})

app.get("/",(req,res)=>{
    res.send("this is home page baby really")
})

//require routes 
const blog = require("./routes/blog") 

// mount
app.use("/api/v1",blog);

const connectdb = require("./config/database")
connectdb();
