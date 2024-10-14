const express = require("express");
const app = express()
require("dotenv").config();


const PORT = process.env.PORT || 50009

//  middle ware to parse the data 
app.use(express.json());

const todoroutes = require("./routes/todos") 
// mounting of api routes 
app.use("/api/v1",todoroutes);


app.listen(PORT,()=>{
    console.log("app is running at port ",PORT);
   })


const dbconnection = require("./config/database");
dbconnection();

app.get('/',(req,res)=>{
    res.send(`<h1>This is HOMEPAGE BABY</h1>`)
})