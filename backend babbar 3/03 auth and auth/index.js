const express = require("express");
const app = express();

app.use(express.json(0));
require("dotenv").config()

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log("server is running at port ", PORT);
})

require("./config/database").dbconnection;

const user = require("./routers/user");
app.use("/api/v1",user)