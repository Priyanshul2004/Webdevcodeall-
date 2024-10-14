const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.Port

app.use(express.json());

require("./config/database").connect();

//route import and mount 
const user = require("./routes/user")
app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log("app is listing at port num ",PORT);
})