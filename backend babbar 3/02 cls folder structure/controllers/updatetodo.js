const Todo = require("../models/Todo");

exports.updatetodo =async (req,res)=>{
     try {
        const {id} = req.params;
        const {title,description} = req.body;
        const todoup =await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updateAt:Date.now()},
        )
        res.status(200).json({
            succes: true,
            data: todoup,
            message: "update operation is succesfull"
        })

     } catch (error) {
        console.log("error find in read operation ", error);
        res.status(500).json({
            succes: false,
            message: error.message
        })
     }
}