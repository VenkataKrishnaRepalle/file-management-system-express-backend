const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/files', {
    serverSelectionTimeoutMS: 5000
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log(`MongoDb Connection error: ${err}`);
});

module.exports = mongoose;