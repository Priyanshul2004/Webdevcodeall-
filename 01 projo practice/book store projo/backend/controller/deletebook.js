const Book = require("../models/bookmodel");

exports.deletebook = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "ID is required"
            });
        }

        const dtlbook = await Book.findByIdAndDelete(id);

        if (!dtlbook) {
            return res.status(404).json({
                success: false,
                message: "Book not found"
            });
        }

        res.status(200).json({
            success: true,
            data: dtlbook,
            message: "Book deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in deleting the book"
        });
    }
};
