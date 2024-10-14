const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bookapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB connection successful");
})
.catch((error) => {
    console.log("DB connection error:", error);
});

