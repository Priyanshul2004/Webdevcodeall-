const mongoose = require('mongoose');
require('dotenv').config(); // This can be removed since it's already in server.js

const dbconnection = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DB connection successful");
    }).catch((err) => {
        console.log("Error in DB connection ", err);
        process.exit(1);
    });
};

module.exports = dbconnection;
