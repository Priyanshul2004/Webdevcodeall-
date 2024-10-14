const express = require("express");
const router = express.Router();
const requireSignIn = require("../middlewares/authmiddleware")
const isAdmin = require("../middlewares/authmiddleware")

const {registerController, forgotpassword} = require("../controllers/authController")
router.post('/register',registerController)


const {logincontroller} = require("../controllers/authController")
router.post("/login",logincontroller);



router.post('/forgot-password',forgotpassword)


const {testcontroller} = require("../controllers/authController")
router.get("/test",requireSignIn,isAdmin, testcontroller );


// protected route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({
        ok:true
    });
});

router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    });
});


module.exports = router;