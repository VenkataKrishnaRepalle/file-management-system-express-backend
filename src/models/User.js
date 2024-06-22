const mongoose = require("../configuration/DbConfig")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {type: String, enum: ["ADMIN", "USER"], default: "USER"}
});

module.exports = mongoose.model("User", userSchema);