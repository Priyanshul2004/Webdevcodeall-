const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("DB connection successful");
        })
        .catch((error) => {
            console.error("DB connection failed:", error.message);
            process.exit(1); // Exiting the process due to connection failure
        });
};

module.exports = dbconnect;
