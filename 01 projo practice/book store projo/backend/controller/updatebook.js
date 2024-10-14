const Book = require("../models/bookmodel");

exports.upbook = async (req, res) => {
    try {
        const { id } = req.params;
        const { bookname, decription, author, image, prize } = req.body;

        // Ensure that the `id` is valid and all required fields are provided
        if (!id || !bookname || !decription || !author || !image || !prize) {
            return res.status(400).json({
                success: false,
                message: "All fields are required and a valid ID must be provided."
            });
        }

        // Find and update the book
        const bookup = await Book.findByIdAndUpdate(
            id,
            { bookname, decription, author, image, prize },
            { new: true, runValidators: true }
        );

        if (!bookup) {
            return res.status(404).json({
                success: false,
                message: "Book not found."
            });
        }

        res.status(200).json({
            success: true,
            data: bookup,
            message: "Book data is updated"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in book updation"
        });
    }
};
