const bcrypt = require("bcrypt");
const User = require("../model/User")
const jwt = require("jsonwebtoken")
require("dotenv").config();
require("cookies");

exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const existinguser = await User.findOne({ email });

        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: "user already exist"
            })
        }

        let hashedpassword;
        try {
            hashedpassword = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "error in hashing password",
            })
        }

        const user = await User.create({
            name, email, password: hashedpassword, role
        })


        return res.status(200).json({
            success: true,
            message: `user created successgfully ${user}`
        })


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'user cannot register plese try again latter'
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'please fill all the details carefully'
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'user is not registered'
            });
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        };

        if (await bcrypt.compare(password, user.password)) {
            let token = jwt.sign(payload,
                process.env.JWT_SECRET,
                {
                    expiresIn: "2h"
                }
            );

            const userWithToken = { ...user._doc, token }; // Clone user object and add token
            userWithToken.password = undefined; 

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user: userWithToken, // Use cloned user object
                message: 'user logged in successfully'
            });

        } else {
            return res.status(403).json({
                success: false,
                message: "password incorrect"
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'login failure'
        });
    }
};
