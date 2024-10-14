const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel");

const requireSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.SECRET
        );
        req.user = decode;  
        next();
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
};

module.exports = requireSignIn;

const isAdmin = async (req, res, next) => {
    try {
        if (!req.user || !req.user._id) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized access"
            });
        }
        const user = await usermodel.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized access"
            });
        }
        next();
    } catch (error) {
        console.log("error found in isadmin middleware", error);
        res.status(401).send({
            success: false,
            error,
            message: "error in admin midwr"
        });
    }
};

module.exports = isAdmin;
