const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`db connection successful ${conn.connection.host}`.bgMagenta );
    } catch (error) {
        console.error("error in db connection", error);
    }
}

module.exports = connectdb;

