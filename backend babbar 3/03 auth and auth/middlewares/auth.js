const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next)=>{
    try {
        const token = req.body.token || req.cookies.token
        if(!token){
            return res.status(400).json({
                success:false,
                message:"token missing"
            })
        }

        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);

            req.user = decode;
        } catch (error) {
            console.log(error);
            console.log("token is not valid");
        }

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'something went wrong while verifying the token'
        })
    }
}

exports.isstudent = (req,res,next)=>{
    try {
        if(req.user.role !== "student"){
            return res.status(401).json({
                success:false,
                message:'this is protected route for student '
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'user role is not matching'
        })
    }
}

exports.isadmin = (req,res,next)=>{
    try {
        if(req.user.role !== "Admin"){
            return res.status(401).json({
                success:false,
                message:'this is protected route for admin '
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'user role is not matching'
        })
    }
}