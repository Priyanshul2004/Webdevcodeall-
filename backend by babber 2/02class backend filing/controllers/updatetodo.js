const Todo = require("../models/todo"); // Changed variable name to Todo to avoid conflict

exports.updatetodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const todo = await Todo.findByIdAndUpdate( // Changed variable name to updatedTodo
            { _id: id },
            { title, description, updatedAt: Date.now() },
            { new: true } // Added this option to return the updated document
        );

        res.status(200).json({
            success: true,
            data: todo, // Changed variable name to updatedTodo
            message: "Data is updated by ID"
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
