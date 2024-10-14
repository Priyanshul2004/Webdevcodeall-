const Book = require("../models/bookmodel");

exports.addbook = async (req, res) => {
    try {
        const { bookname, decription, author, image, prize } = req.body;

        if (!bookname || !decription || !author || !image || !prize) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
        }

        const newBook = await Book.create({ bookname, decription, author, image, prize });

        res.status(200).json({
            success: true,
            data: newBook,
            message: "New book entry created",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error in entry creation",
        });
    }
};
