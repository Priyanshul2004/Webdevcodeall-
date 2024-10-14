// this is the tsrating file of the project 

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // Corrected typo in bcrypt import
const bodyParser = require("body-parser"); // Import body-parser for express.json
const app = express();
const server_config = require("./configs/server.config");
const db_Config = require("./configs/db.config");
const user_mod = require("./models/user.model");

app.use(bodyParser.json()); // Corrected express.json usage

// Connect to MongoDB
mongoose.connect(db_Config.Db_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", (err) => {
    console.error("Error in database connection:", err); // Improved error handling
});
db.once("open", () => {
    console.log("Database connection successful");
    init();
});

async function init() {
    try {
        let user = await user_mod.findOne({ userid: "admin" });

        if (user) {
            console.log("Admin user already exists");
        } else {
            console.log("Creating admin user");

            // Create admin user
            const hashedPassword = await bcrypt.hash("Priyanshul123", 10); // Corrected password hash
            user = await user_mod.create({
                name: "Priyanshul",
                usertype: "ADMIN",
                email: "priyanshul@123",
                userid: "admin",
                password: hashedPassword // Corrected password field name
            });

            console.log("Admin user created:", user);
        }
    } catch (error) {
        console.error("Error in user initialization:", error); // Improved error handling
    }
}

// Require authentication routes
require("./router/auth.rout")(app);

// Start the server
app.listen(server_config.PORT, () => {
    console.log("Server started at port", server_config.PORT);
});
