const express = require("express")
var logger = require('morgan');

const user = require("./routes/index")

const app = express()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
   extended: false
}));

app.use("/",user)



module.exports = app