const express = require("express");
const router = express.Router();

const {login,signup} = require("../controllers/Auth");
const {auth,isstudent,isadmin} = require("../middlewares/auth")

router.post("/signup",signup);
router.post("/login",login) ;


router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for test "
    })
})


//protected route

router.get("/student",auth,isstudent,(req,res)=>{
        res.json({
            success:true,
            message:"welcome to the protected route for student"
        });
})


router.get("/admin",auth,isadmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for admin"
    });
})

module.exports = router;