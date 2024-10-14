const express = require("express");
const app = express();
const colour = require("colors")
const dotenv = require("dotenv").config()
const morgan = require("morgan");
const cors = require("cors")



const authRoutes = require("./routes/authRoute")



const dbconn = require("./config/db")
dbconn();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/auth",authRoutes);
app.use(cors());

app.get("/",(req,res)=>{
    res.send({
        message:"welcome to ecommer app"
    });
});

const PORT = process.env.PORT || 8080 ;


app.listen(PORT,()=>{
    console.log(`server is running a port num ${PORT}`.bgBlue);
});