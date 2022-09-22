const connect = require("./config/db")
require("dotenv").config()
port = process.env.PORT

const app = require("./index")

app.listen(port, async () => {

    try {
        await connect()
    } catch (err) {
        return res.status(500).send({ message: err.message })
    }
    console.log("Listening on port 5000")
})