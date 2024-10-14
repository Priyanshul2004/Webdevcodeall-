const Todo = require("../models/Todo")

exports.gettodo = async (req, res) => {
    try {
        const response = await Todo.find();
        res.status(200).json({
            succes: true,
            data: response,
            message: "read operation is succesfull"
        })
    } catch (error) {
        console.log("error find in read operation ", error);
        res.status(500).json({
            succes: false,
            message: error.message
        })
    }
}
exports.gettodobyid = async (req, res) => {
    try {
        const id = req.params.id;
        const todofindid = await Todo.findById({ _id: id });

        res.status(200).json({
            success: true,
            data: todofindid,
            message: "All data is fetched by your given ID"
        });

        if (!todofindid) {
            return res.status(404).json({
                success: false,
                message: "ID not found",
            });
        }


    } catch (error) {
        console.error("Error found in reading by ID:", error);
        res.status(500).json({
            success: false,
            message: error.message,
            data: "Internal server error"
        });
    }
};
