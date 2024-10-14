// checking req body is proper or not 
const user_model = require("../models/user.model")
const verifysignupbody =async (req,res,next)=>{
    try {
        if(!req.body.name){
            return res.status(400).send({
                message:"name is not provided"})
        }
        if(!req.body.email){
            return res.status(400).send({
                message:"email is not provided"})
        }
        if(!req.body.userid){
            return res.status(400).send({
                message:"userid is not provided"})
        }
        const user = await user_model.findOne({userid:req.body.userid})
        if(user){
            return res.status(400).send({
                message:"user is already present"})
        }
        next()
    } catch (error) {
        console.log("error foun while checking the request body by middle ware folder",error)
        res.status(500).send({
            message:"error found in validity check"
        })
    }
}
module.exports = {verifysignupbody:verifysignupbody}