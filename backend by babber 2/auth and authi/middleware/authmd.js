// AUTH IS STUDENT IS ADMIN 

const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.auth = (req,res)=>{
    try {
        // extrect the token 
        const token = req.body.token;
        if(!token){
            return res.status(401).json({
                success:false,
                message:"token missing"
            })
        }

        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode);

            req.user = decode;
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            })
        }
        next();

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"something went rong while verifing the token "
        })
    }
}

exports.isstudent = (req,res)=>{
    try {
        if(req.user.roles !== "student"){
            return res.status(401).json({
                success:false,
                message:"this is protected routre for student"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role is not matching"
        })
    }
}

exports.isadmin = (req,res)=>{
    try {
        if(req.user.roles !== "admin"){
            return res.status(401).json({
                success:false,
                message:"this is protected routre for admin"
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role is not matching"
        })
    }
}