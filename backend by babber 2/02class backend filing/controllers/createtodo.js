const todo = require("../models/todo");

exports.createtodo = async(req,res)=>{
    try {
        const {title,decription} = req.body;
        //create and new todo and insert in db 
        const response = await todo.create({title,decription})
        // send a json response with succes flag 
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'entery created successfully'
            }
        )
    } catch (error) {
        console.error(error)
        console.log(error);
        res.status(500).json({
            success:false,
            data:"internal server error ",
            message:error.message
        })
    }
}   