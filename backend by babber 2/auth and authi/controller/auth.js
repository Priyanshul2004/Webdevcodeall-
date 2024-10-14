const bcrypt = require("bcrypt")
const user = require("../models/User");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config()


exports.signup = async (req,res)=>{
    try {
        //get data
        const {name,email,password,role} = req.body;
        // check if user already exist
        const existUser = await User.findOne({email})

        if(existUser){
               return res.status(400).json({
                success:false,
                message:"user already exist"
               })
        }

        let hasedpassword;
        try {
           hasedpassword = await bcrypt.hash(password,10); 
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:'error in hasing password'
            })
        }
          
        const user = await User.create({
            name,email,password:hasedpassword,role
        })

        return res.status(200).json({
            success:true,
            message:'user created successfully'
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:'user cannot be resester , please try again latter'
        })
    }
}

exports.login = async (req,res)=>{
    try {
        //fetch data
        const {email,password} = req.body;
        //validation on email and password 
        
        if(!email || !password){

            return res.status(400).json({
                success:false,
                message:'please fill the details carefully'
            })
        }

        // check for registered user
        const user = await User.findOne({email})
        //if not registered user 
        if(!user){
            return res.status(401).json({
                success:false,
                message:'user is not register'
            })
        }


        const payload = {
            email:user.email,
            id:user._id,
            role:user.roles
        }

        if(await bcrypt.compare(password,user.password)){
            // password match
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h"
            })


            user.token = token;
            user.password = undefined;

            const option = {

                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true
            }


            res.cookie("token",token,option).status(200).json({
                success:true,
                token,
                user,
                message:'User logged in successfully'
            })

        }else{
            // when pass in not match 
            return res.status(403).json({
                success:false,
                message:"pass incorrect"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success:false,
        message:'login failre'
        })
    }
}