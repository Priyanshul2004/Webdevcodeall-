const express = require('express')
console.log(typeof express);

const app = express()
app.listen(7000,()=>{
    console.log("server is running");
})