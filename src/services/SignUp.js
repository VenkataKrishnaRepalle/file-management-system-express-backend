const User = require("../models/User");
const bcrypt = require("bcrypt");

async function createUser(userData) {
    const {name, email, password} = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
        name,
        email,
        password: hashedPassword,
        role: "USER"
    });

    const savedUser = await createUser.save();
    return savedUser;
}

module.exports = {createUser};