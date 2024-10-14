const Todo = require("../models/Todo");

exports.deletetodo = async (req, res) => {
    try {
        const { id } = req.params;
        const dtltodo = await Todo.findByIdAndDelete({ _id: id });
        res.status(200).json(
            {
                succes: true,
                data: dtltodo,
                message: "delete operation is succesfull"
            }
        )
    } catch (error) {
        console.log("error find in delete operation ", error);
        res.status(500).json({
            succes: false,
            message: error.message
        })
    }
}