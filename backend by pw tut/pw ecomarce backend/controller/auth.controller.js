const user_model = require("../models/user.model");
const jwt = require("jsonwebtoken");
const secret = require("../configs/auth.config");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try {
        // Read the request body
        const req_body = req.body;

        // Insert the data into the user object
        const userobj = {
            name: req_body.name,
            userid: req_body.userid,
            email: req_body.email,
            usertype: req_body.usertype,
            password: await bcrypt.hash(req_body.password, 8) // Await the hash function
        };

        // Create the user
        const usercreate = await user_model.create(userobj);

        const res_obj = {
            name: usercreate.name,
            email: usercreate.email,
            userid: usercreate.userid,
        };

        // Return the created user
        res.status(201).send(res_obj);
    } catch (error) {
        console.error("Error while registering the user:", error); // Log the error
        res.status(500).send({
            message: "An error occurred while registering the user"
        });
    }
};

exports.signin = async (req, res) => {
    try {
        const user = await user_model.findOne({ userid: req.body.userid });
        if (!user) {
            return res.status(400).send({
                message: "User ID is not valid"
            });
        }

        if (!user.password) {
            return res.status(400).send({
                message: "User password is not set"
            });
        }

        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({
                message: "Password is incorrect"
            });
        }

        const token = jwt.sign({ id: user.userid }, secret.secret, { expiresIn: 60 });

        res.status(200).send({
            name: user.name,
            userid: user.userid,
            email: user.email,
            usertype: user.usertype,
            accessToken: token
        });
    } catch (error) {
        console.error("Error while signing in:", error);
        res.status(500).send({
            message: "An error occurred while signing in"
        });
    }
};


