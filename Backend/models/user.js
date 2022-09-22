const mongoose = require("mongoose")


const User = new mongoose.Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true,
    }
)


module.exports = mongoose.model("userData", User)