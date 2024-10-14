const todo = require("../models/todo");

exports.gettodo = async(req,res)=>{
    try {
        // fetch all todo item from db
        const todos = await todo.find({})

        //response 
        res.status(200).json({
            success:true,
            data:todos,
            message:"all data is fetched"
        })
    } catch (error) {
       console.error(error)
       res.status(500).json({
        success:false,
        data:"internal server error ",
        message:error.message
    })
    }
} 

exports.gettodobyid = async(req,res)=>{
    try {
        // fetch all todo item from db
        const id = req.params.id
        const todos = await todo.findById({_id:id})

        if(!todos){
            res.status(404).json({
                success:false,
                message:"no data is found by given id "
            })
        }
        //response 
        res.status(200).json({
            success:true,
            data:todos,
            message:"all data is fetched by your given id "
        })
    } catch (error) {
       console.error(error)
       res.status(500).json({
        success:false,
        data:"internal server error ",
        message:error.message
    })
    }
}
