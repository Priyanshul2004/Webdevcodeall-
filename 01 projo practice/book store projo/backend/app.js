const express = require("express");
const app = express();
require("./connectdb/conndb");

app.use(express.json());

const bookroute = require("./bookroute/bookroute");
app.use("/api/v1", bookroute);

app.listen(3000,()=>{
    console.log("server started successfully");
});
