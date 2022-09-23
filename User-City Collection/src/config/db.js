const mongoose = require("mongoose")
require("dotenv").config()
url = process.env.URL

const connect = () => {
    return mongoose.connect(url)
}

module.exports = connect