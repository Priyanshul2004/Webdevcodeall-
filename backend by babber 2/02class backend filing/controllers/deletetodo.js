const todo = require("../models/todo");
const Todo = require("../models/todo"); 

exports.deletetodo= async (req, res) => {
    try {
        const { id } = req.params;

        const todod = await todo.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            data: todod,
            message: "Data is deleted of this id ID"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            data: "Internal server error in updation time",
            message: error.message
        });
    }
};
