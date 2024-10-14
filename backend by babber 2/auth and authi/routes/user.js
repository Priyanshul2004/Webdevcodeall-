const express = require("express")
const router = express.Router();

const {login,signup} = require("../controller/auth")
const {auth,isstudent,isadmin} = require("../middleware/authmd")

router.post("/login",login);
router.post("/signup",signup);


// this code for the middleware 

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:'welcome to the protected route fort test'
    })
})


router.get("/student",auth,isstudent,(req,res)=>{
    res.json({
          success:true,
          message:'welcome to the protected route for the student'
    })
})

router.get("/admin",auth,isadmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route for admin"
    })
})

module.exports = router;