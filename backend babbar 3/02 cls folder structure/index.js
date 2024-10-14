const express = require("express");
const app = express();
const bodyparser = require('body-parser');
require('dotenv').config()

app.use(bodyparser.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

const todoroutes = require("./routes/todos");
app.use("/api/v1", todoroutes);

const dbconnection = require("./config/database")
dbconnection();

app.get("/", (req, res) => {
    res.send(`Server is running at port no ${PORT}`);
});
