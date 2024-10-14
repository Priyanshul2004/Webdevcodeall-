const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true,
    },
    decription: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    prize: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("Book", bookSchema);
